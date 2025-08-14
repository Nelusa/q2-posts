'use client';

import BasePageLayout from '@/components/layout/BasePageLayout';
import CreatePostForm from '@/components/form/CreatePostForm';

export default function CreatePostPage() {
  return (
    <BasePageLayout heroTitle="Přidání článku" containerClassName="max-w-5xl">
      <CreatePostForm />
    </BasePageLayout>
  );
}
