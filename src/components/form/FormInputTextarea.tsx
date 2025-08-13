import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import FormLabel from "@/components/form/FormLabel";
import FormError from "@/components/form/FormError";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const FormInputTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 11)}`;

    return (
      <div className="w-full flex flex-col gap-1">
       <div className="w-full flex flex-col gap-1">
         {label && (
           <FormLabel htmlFor={textareaId}>
             {label}
           </FormLabel>
         )}
         <textarea
             id={textareaId}
             ref={ref}
             className={cn(
                 "w-full px-4 py-3 bg-white border border-border rounded-md",
                 "placeholder-text-secondary text-sm focus:ring-1 focus:ring-accent",
                 "resize-vertical min-h-[120px] transition-all duration-200 ease-in-out hover:border-border-dark",
                 error && "border-error focus:ring-error focus:border-error",
                 className
             )}
             aria-invalid={error ? 'true' : 'false'}
             aria-describedby={error ? `${textareaId}-error` : undefined}
             {...props}
         />
       </div>
        {error && (
          <FormError message={error} id={`${textareaId}-error`} />
        )}
      </div>
    );
  }
);

FormInputTextarea.displayName = 'Textarea';

export default FormInputTextarea;
