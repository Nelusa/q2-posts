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
  const baseClasses = 'font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-lg font-bold text-white';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-gray-200 text-text-primary hover:bg-gray-300 focus:ring-gray-500',
    accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent',
    error: 'bg-error text-white hover:bg-error-dark focus:ring-error',
    success: 'bg-success text-white hover:bg-success-dark focus:ring-success'
  };
  
  const sizeClasses = {
    sm: 'px-12 py-2 text-sm',
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
