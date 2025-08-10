import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostById } from '@/lib/mock-data';
import Button from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import Hero from "@/components/Hero";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id);
  const post = getPostById(postId);

  if (!post) {
    notFound();
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
