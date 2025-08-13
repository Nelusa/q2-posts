import {LabelHTMLAttributes, ReactNode} from 'react';
import { cn } from '@/lib/utils';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function FormLabel({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "block text-sm font-medium text-text-primary transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
