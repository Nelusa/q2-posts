import { Text } from '@/components/ui/Text';
import Container from '@/components/layout/Container';

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm">
      <Container>
        <div className="flex justify-start items-center h-16">
          <Text>
            2025 | Q2 Interactive s.r.o.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
