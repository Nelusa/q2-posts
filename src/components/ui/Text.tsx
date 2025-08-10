import {ElementType, ReactNode} from 'react';
import { cn } from '@/lib/utils';

export type TextVariant =
  'inherit'
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2';

export interface TextProps<T extends ElementType> {
  as?: T;
  variant?: TextVariant;
  className?: string;
  children: ReactNode;
}

export const textVariantOptions: Record<TextVariant, string> = {
  inherit: '',
  hero: 'text-4xl text-white font-bold',
  h1: 'text-4xl text-text-primary font-bold',
  h2: 'text-3xl text-text-primary font-bold',
  h3: 'text-2xl text-text-primary font-bold',
  h4: 'text-xl text-text-primary font-bold',
  h5: 'text-lg text-text-primary font-bold',
  h6: 'text-base text-text-primary font-bold',
  body1: 'text-sm text-text-primary',
  body2: 'text-xs text-text-secondary',
};

export function Text<T extends ElementType = 'div'>({
  as,
  variant = 'inherit',
  className,
  children,
  ...other
}: TextProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const variantClasses = textVariantOptions[variant];
  const Component = as || 'div';

  return (
    <Component className={cn(variantClasses, className)} {...other}>
      {children}
    </Component>
  );
}
