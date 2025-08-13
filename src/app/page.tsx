'use client';

import { useQuery } from '@tanstack/react-query';
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/api";
import { Text } from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorState from "@/components/ui/ErrorState";
import BasePageLayout from "@/components/layout/BasePageLayout";

export default function Home() {
  const {
    data: posts,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <BasePageLayout heroTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      <div className="flex flex-col gap-10">
        <Text as="h1" variant="h1">Nejnovější</Text>

        {isLoading && (
          <LoadingSpinner message="Načítání článků..." />
        )}

        {error && (
          <ErrorState
            title="Chyba při načítání článků"
            message={error.message}
            onRetry={() => refetch()}
          />
        )}

        {!isLoading && !error && posts && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {!isLoading && !error && (!posts || posts.length === 0) && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Text className="text-text-secondary mb-4">Žádné články nebyly nalezeny</Text>
              <Button onClick={() => refetch()} variant="secondary">
                Obnovit
              </Button>
            </div>
          </div>
        )}
      </div>
    </BasePageLayout>
  );
}
