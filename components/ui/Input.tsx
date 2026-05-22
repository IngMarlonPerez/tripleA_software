'use client'
import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-3 font-inter text-[15px] text-charcoal bg-white rounded-[10px] outline-none transition-colors duration-200',
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
Input.displayName = 'Input'

export { Input }
