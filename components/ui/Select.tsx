'use client'
import { forwardRef, type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'w-full px-4 py-3 font-inter text-[15px] text-charcoal bg-white rounded-[10px] outline-none transition-colors duration-200 cursor-pointer',
          'border-[1.5px] focus:border-indigo-600',
          hasError ? 'border-red-600' : 'border-slate-200',
          className
        )}
        {...props}
      >
        {children}
      </select>
    )
  }
)
Select.displayName = 'Select'

export { Select }
