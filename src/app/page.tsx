import Hero from "@/components/Hero";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Autor",
    image: "/placeholder.png"
  },
  {
    id: 2,
    title: "Consectetur adipiscing elit",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Autor",
    image: "/placeholder.png"
  },
  {
    id: 3,
    title: "Sed do eiusmod tempor",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Autor",
    image: "/placeholder.png"
  },
  {
    id: 4,
    title: "Incididunt ut labore",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Autor",
    image: "/placeholder.png"
  },
  {
    id: 5,
    title: "Dolore magna aliqua",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "Autor",
    image: "/placeholder.png"
  },
  {
    id: 6,
    title: "Ut enim ad minim veniam",
    content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Autor",
    image: "/placeholder.png"
  },
  {
    id: 7,
    title: "Quis nostrud exercitation",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    author: "Autor",
    image: "/placeholder.png"
  },
  {
    id: 8,
    title: "Ullamco laboris nisi",
    content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    author: "Autor",
    image: "/placeholder.png"
  }
];

export default function Home() {
  return (
    <div>
      <Hero title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-text-primary mb-8">Nejnovější</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-text-secondary mb-2">Autor</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-3">
                  {post.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
