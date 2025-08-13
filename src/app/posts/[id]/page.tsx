'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getPost } from '@/lib/api';
import Button from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import Hero from "@/components/Hero";

export default function PostDetailPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);

  const {
    data: post,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    enabled: !isNaN(postId),
  });

  if (isNaN(postId)) {
    return (
      <div>
        <Hero title="Neplatné ID článku" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Text className="text-red-600">Neplatné ID článku</Text>
            <Link href="/">
              <Button variant="primary">
                Zpět na články
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <Hero title="Načítání..." />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <Text className="ml-3">Načítání článku...</Text>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Hero title="Chyba při načítání" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Text className="text-red-600">Chyba při načítání článku</Text>
            <Text className="text-gray-600 text-sm">{error.message}</Text>
            <div className="flex gap-4">
              <Button onClick={() => refetch()} variant="primary">
                Zkusit znovu
              </Button>
              <Link href="/">
                <Button variant="secondary">
                  Zpět na články
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <Hero title="Článek nenalezen" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Text className="text-gray-600">Článek nebyl nalezen</Text>
            <Link href="/">
              <Button variant="primary">
                Zpět na články
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero title={post.title} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-12 items-start">
            <div className="flex items-center gap-4 pt-1">
              <Text variant="body1" className="whitespace-nowrap">
                {post.author}
              </Text>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div>
              <article className="prose prose-lg max-w-none">
                <Text variant="body1" className="leading-6 whitespace-pre-wrap">
                  {post.content}
                </Text>
              </article>
            </div>
          </div>
        </div>
        <Link href="/">
          <Button variant="primary">
            Zpět na články
          </Button>
        </Link>
      </div>
    </div>
  );
}
