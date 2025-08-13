import { Text } from '@/components/ui/Text';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

interface SuccessMessageProps {
  message: string;
  className?: string;
}

export default function SuccessMessage({
  message,
  className = ''
}: SuccessMessageProps) {
  return (
    <div className={cn("mb-10 p-4 bg-success-light rounded-lg transition-all duration-200 ease-in-out", className)}>
      <div className="flex items-center gap-3">
        <CheckCircleIcon className="w-8 h-8 text-success-dark flex-shrink-0" />
        <Text className="text-success-dark font-medium">
          {message}
        </Text>
      </div>
    </div>
  );
}
