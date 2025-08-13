'use client';

import { useQuery } from '@tanstack/react-query';
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/api";
import { Text } from "@/components/ui/Text";
import Button from "@/components/ui/Button";

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

  if (isLoading) {
    return (
      <div>
        <Hero title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-10">
            <Text as="h1" variant="h1">Nejnovější</Text>
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <Text className="ml-3">Načítání článků...</Text>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Hero title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-10">
            <Text as="h1" variant="h1">Nejnovější</Text>
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Text className="text-red-600">Chyba při načítání článků</Text>
              <Text className="text-gray-600 text-sm">{error.message}</Text>
              <Button onClick={() => refetch()} variant="primary">
                Zkusit znovu
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-10">
          <Text as="h1" variant="h1">Nejnovější</Text>
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-12">
              <Text className="text-gray-600">Žádné články nebyly nalezeny</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
