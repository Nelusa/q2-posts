import Button from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryText?: string;
  showBackButton?: boolean;
  backText?: string;
  onBack?: () => void;
  className?: string;
}

export default function ErrorState({
  title = "Chyba",
  message,
  onRetry,
  retryText = "Zkusit znovu",
  showBackButton = false,
  backText = "Zpět",
  onBack,
  className = ''
}: ErrorStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 space-y-4", className)}>
      <div className="text-center">
        <Text className="text-error mb-2">{title}</Text>
        {message && <Text className="text-text-secondary text-base mb-4">{message}</Text>}
        <div className="flex gap-4 justify-center">
          {onRetry && (
            <Button onClick={onRetry} variant="primary">
              {retryText}
            </Button>
          )}
          {showBackButton && onBack && (
            <Button onClick={onBack} variant="secondary">
              {backText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
