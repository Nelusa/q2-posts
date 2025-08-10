import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex flex-col gap-2">
          {label && (
              <label className="block text-sm font-medium text-text-primary">
                {label}
              </label>
          )}
          <input
              ref={ref}
              className={cn(
                  "w-full px-4 py-3 bg-white border border-border rounded-md",
                  "placeholder-text-secondary text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                  "transition-colors duration-200",
                  error && "border-error focus:ring-error focus:border-error",
                  className
              )}
              {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-error">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
