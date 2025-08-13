import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/api';
import { Text } from '@/components/ui/Text';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
      <Link href={`/posts/${post.id}`} className="block h-full group">
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-200 ease-in-out h-full flex flex-col transform hover:-translate-y-1">
          <div className="relative h-48 flex-shrink-0 overflow-hidden">
            <Image
                src={post.image || "/placeholder.png"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                loading="lazy"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <Text variant="body2" className="mb-4 text-text-secondary">
              {post.author}
            </Text>
            <Text as="h5" variant="h5" className="line-clamp-2 mb-4 group-hover:text-primary transition-colors duration-200">
              {post.title}
            </Text>
            <div className="mt-auto">
              <Text variant="body2" className="line-clamp-3 leading-5 text-text-secondary">
                {post.content}
              </Text>
            </div>
          </div>
        </article>
      </Link>
  );
}
