import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(3, 'Titulek musí mít alespoň 3 znaky'),
  content: z.string().min(10, 'Obsah musí mít alespoň 10 znaků'),
  author: z.string().min(1, 'Autor je povinný')
});

export type CreatePostFormData = z.infer<typeof createPostSchema>;
