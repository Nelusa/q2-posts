import { Text } from '@/components/ui/Text';
import { Post } from '@/lib/api';

interface DetailContentProps {
  post: Post;
}

export default function DetailContent({ post }: DetailContentProps) {
  return (
    <div className="max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-12 items-start">
        <div className="flex items-center gap-4 pt-1">
          <Text variant="body1" className="whitespace-nowrap text-text-secondary">
            {post.author}
          </Text>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <div>
          <article className="prose prose-lg max-w-none">
            <Text variant="body1" className="leading-6 whitespace-pre-wrap text-text-primary">
              {post.content}
            </Text>
          </article>
        </div>
      </div>
    </div>
  );
}
