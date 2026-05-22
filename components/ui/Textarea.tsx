'use client'
import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full px-4 py-3 font-inter text-[15px] text-charcoal bg-white rounded-[10px] outline-none transition-colors duration-200 resize-vertical',
          'border-[1.5px] focus:border-indigo-600',
          hasError ? 'border-red-600' : 'border-slate-200',
          'placeholder:text-slate-300',
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
