import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import { mockPosts } from "@/lib/mock-data";
import { Text } from "@/components/ui/Text";

export default function Home() {
  return (
    <div>
      <Hero title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-10">
          <Text as="h1" variant="h1">Nejnovější</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
            {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
