import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-bold rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 text-lg font-bold text-white transform hover:scale-105 active:scale-95';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-border-light text-text-primary hover:bg-border focus:ring-primary-light',
    accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent',
    error: 'bg-error text-white hover:bg-error-dark focus:ring-error',
    success: 'bg-success text-white hover:bg-success-dark focus:ring-success'
  };

  const sizeClasses = {
    sm: 'px-3 py-3 text-sm',
    md: 'px-16 py-3 text-sm',
    lg: 'px-20 py-4 text-base'
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
