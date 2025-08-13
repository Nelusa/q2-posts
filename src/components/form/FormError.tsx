import { Text } from '@/components/ui/Text';

interface ErrorProps {
  message: string;
  id?: string;
}

export default function FormError({ message, id }: ErrorProps) {
  return (
    <Text
      as="p"
      id={id}
      className="text-xs text-error"
      role="alert"
    >
      {message}
    </Text>
  );
}
