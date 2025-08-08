interface HeroProps {
  title: string;
}

export default function Hero({ title }: HeroProps) {
  return (
    <div className="relative h-96 md:h-[600px] bg-cover bg-center bg-no-repeat hero-bg">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold text-white max-w-3/4">
              {title}
            </h1>
          </div>
        </div>
    </div>
  );
}
