'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Hero from '@/components/Hero';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const createPostSchema = z.object({
  title: z.string().min(3, 'Titulek musí mít alespoň 3 znaky'),
  content: z.string().min(10, 'Obsah musí mít alespoň 10 znaků'),
  author: z.string().min(1, 'Autor je povinný')
});

type CreatePostForm = z.infer<typeof createPostSchema>;

export default function CreatePostPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CreatePostForm>({
    resolver: zodResolver(createPostSchema)
  });

  const onSubmit = async (data: CreatePostForm) => {
    console.log('Form data:', data);
  };

  return (
    <div>
      <Hero title="Přidání článku" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Titulek"
            {...register('title')}
            error={errors.title?.message}
            placeholder="Zadejte titulek příspěvku"
          />

          <Textarea
            label="Obsah"
            {...register('content')}
            error={errors.content?.message}
            placeholder="Zadejte obsah příspěvku"
            rows={8}
          />

          <Input
            label="Autor"
            {...register('author')}
            error={errors.author?.message}
            placeholder="Zadejte jméno autora"
          />

          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Odesílání...' : 'Odeslat'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
