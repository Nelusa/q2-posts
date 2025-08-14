'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormInputText from '@/components/form/FormInputText';
import FormInputTextarea from '@/components/form/FormInputTextarea';
import Button from '@/components/ui/Button';
import { createPost } from '@/lib/api';
import { CreatePostData } from '@/lib/types';
import { createPostSchema, CreatePostFormData } from '@/lib/validations';
import SuccessMessage from '@/components/ui/SuccessMessage';
import ErrorState from '@/components/ui/ErrorState';

export default function CreatePostForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema)
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

  const onSubmit = (data: CreatePostFormData) => {
    mutation.mutate(data);
  };

  if (showSuccess) {
    return (
      <SuccessMessage message="Článek byl úspěšně vytvořen! Přesměrování..." />
    );
  }

  if (mutation.isError) {
    return (
      <ErrorState
        title="Chyba při vytváření článku"
        message={mutation.error?.message}
      />
    );
  }

  return (
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
  );
}
