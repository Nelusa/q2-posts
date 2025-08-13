import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import FormLabel from './FormLabel';
import FormError from './FormError';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const FormInputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`;

    return (
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex flex-col gap-1">
          {label && (
            <FormLabel htmlFor={inputId}>
              {label}
            </FormLabel>
          )}
          <input
              id={inputId}
              ref={ref}
              className={cn(
                  "w-full px-4 py-3 bg-white border border-border rounded-md",
                  "placeholder-text-secondary text-sm focus:ring-1 focus:ring-accent",
                  "transition-all duration-200 ease-in-out hover:border-border-dark",
                  error && "border-error focus:ring-error focus:border-error",
                  className
              )}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? `${inputId}-error` : undefined}
              {...props}
          />
        </div>
        {error && (
          <FormError message={error} id={`${inputId}-error`} />
        )}
      </div>
    );
  }
);

FormInputText.displayName = 'Input';

export default FormInputText;
