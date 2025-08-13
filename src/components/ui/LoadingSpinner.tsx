import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({
  message = "Načítání...",
  size = 'md',
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={cn("flex items-center justify-center py-12", className)}>
      <div className={cn("animate-spin rounded-full border-b-2 border-accent", sizeClasses[size])}></div>
      {message && <Text className="ml-3 text-text-secondary">{message}</Text>}
    </div>
  );
}
