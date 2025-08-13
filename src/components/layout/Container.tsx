import { ElementType, ReactNode} from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({
  children,
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className={cn(
      "max-w-7xl mx-auto px-8 lg:px-16",
      className
    )}>
      {children}
    </Component>
  );
}
