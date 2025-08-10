import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
       <div className="w-full flex flex-col gap-2">
         {label && (
             <label className="block text-sm font-medium text-text-primary">
               {label}
             </label>
         )}
         <textarea
             ref={ref}
             className={cn(
                 "w-full px-4 py-3 bg-white border border-border rounded-md",
                 "placeholder-text-secondary text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                 "resize-vertical min-h-[120px] transition-colors duration-200",
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

Textarea.displayName = 'Textarea';

export default Textarea;
