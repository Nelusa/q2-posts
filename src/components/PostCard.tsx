import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/mock-data';
import { Text } from '@/components/ui/Text';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
      <Link href={`/posts/${post.id}`} className="block h-full">
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
          <div className="relative h-48 flex-shrink-0">
            <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <Text variant="body2" className="mb-4">
              {post.author}
            </Text>
            <Text as="h5" variant="h5" className="line-clamp-2 mb-4">
              {post.title}
            </Text>
            <div className="mt-auto">
              <Text variant="body2" className="line-clamp-3 leading-5">
                {post.content}
              </Text>
            </div>
          </div>
        </article>
      </Link>
  );
}
