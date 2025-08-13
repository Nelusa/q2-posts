import Container from '@/components/layout/Container';
import {Text} from "@/components/ui/Text";

interface HeroProps {
  title: string;
}

export default function Hero({ title }: HeroProps) {
  return (
    <div
      className="relative h-96 md:h-[600px] bg-cover bg-center bg-no-repeat hero-bg"
      role="banner"
      aria-label="Hero sekce"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-200"/>
      <Container className="relative h-full flex items-center">
        <Text as="h1" variant="hero" className="max-w-3/4">{title}</Text>
      </Container>
    </div>
  );
}
