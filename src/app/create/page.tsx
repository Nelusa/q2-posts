'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { createPost, CreatePostData } from '@/lib/api';
import { Text } from '@/components/ui/Text';

const schema = z.object({
  title: z.string().min(3, 'Titulek musí mít alespoň 3 znaky'),
  content: z.string().min(10, 'Obsah musí mít alespoň 10 znaků'),
  author: z.string().min(1, 'Autor je povinný')
});

export default function CreatePostPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreatePostData>({
    resolver: zodResolver(schema)
  });

  const mutation = useMutation({
    mutationFn: (data: CreatePostData) => createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      reset();
      router.push('/');
    },
  });

  const onSubmit = (data: CreatePostData) => {
    mutation.mutate(data);
  };

  return (
      <div>
        <Hero title="Přidání článku" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {mutation.isError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <Text className="text-red-600">
                  Chyba při vytváření článku: {mutation.error?.message}
                </Text>
              </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
                label="Titulek"
                {...register('title')}
                error={errors.title?.message}
                placeholder="Zadejte titulek článku"
                disabled={mutation.isPending}
            />

            <Textarea
                label="Obsah"
                {...register('content')}
                error={errors.content?.message}
                placeholder="Zadejte obsah článku"
                rows={8}
                disabled={mutation.isPending}
            />

            <Input
                label="Autor"
                {...register('author')}
                error={errors.author?.message}
                placeholder="Zadejte jméno autora"
                disabled={mutation.isPending}
            />

            <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Odesílání...' : 'Odeslat'}
            </Button>
          </form>
        </div>
      </div>
  );
}
