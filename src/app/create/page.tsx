'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormInputText from '@/components/form/FormInputText';
import FormInputTextarea from '@/components/form/FormInputTextarea';
import Button from '@/components/ui/Button';
import { createPost, CreatePostData } from '@/lib/api';
import SuccessMessage from '@/components/ui/SuccessMessage';
import ErrorState from '@/components/ui/ErrorState';
import BasePageLayout from '@/components/layout/BasePageLayout';

const schema = z.object({
  title: z.string().min(3, 'Titulek musí mít alespoň 3 znaky'),
  content: z.string().min(10, 'Obsah musí mít alespoň 10 znaků'),
  author: z.string().min(1, 'Autor je povinný')
});

export default function CreatePostPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreatePostData>({
    resolver: zodResolver(schema)
  });

  const mutation = useMutation({
    mutationFn: (data: CreatePostData) => createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      reset();
      setShowSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    },
  });

  const onSubmit = (data: CreatePostData) => {
    mutation.mutate(data);
  };

  return (
    <BasePageLayout heroTitle="Přidání článku" containerClassName="max-w-5xl">
      {showSuccess && (
        <SuccessMessage message="Článek byl úspěšně vytvořen! Přesměrování..." />
      )}

      {mutation.isError && (
        <ErrorState
          title="Chyba při vytváření článku"
          message={mutation.error?.message}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInputText
                label="Titulek"
                {...register('title')}
                error={errors.title?.message}
                placeholder="Zadejte titulek článku"
                disabled={mutation.isPending}
                aria-label="Titulek článku"
            />

            <FormInputTextarea
                label="Obsah"
                {...register('content')}
                error={errors.content?.message}
                placeholder="Zadejte obsah článku"
                rows={8}
                disabled={mutation.isPending}
                aria-label="Obsah článku"
            />

            <FormInputText
                label="Autor"
                {...register('author')}
                error={errors.author?.message}
                placeholder="Zadejte jméno autora"
                disabled={mutation.isPending}
                aria-label="Jméno autora"
            />

            <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={mutation.isPending}
                className="mt-20"
            >
              {mutation.isPending ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Odesílání...
                </div>
              ) : (
                'Odeslat'
              )}
            </Button>
          </form>
    </BasePageLayout>
  );
}
