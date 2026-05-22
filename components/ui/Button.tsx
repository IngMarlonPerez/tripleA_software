'use client'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-inter font-medium rounded-[10px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_4px_24px_rgba(79,70,229,0.25)] hover:shadow-[0_6px_28px_rgba(79,70,229,0.35)] hover:-translate-y-[1px] active:translate-y-0',
        secondary:
          'bg-transparent text-charcoal border-[1.5px] border-slate-200 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50',
        ghost:
          'bg-transparent text-slate-500 hover:text-charcoal hover:bg-slate-50',
        outline:
          'bg-transparent text-indigo-600 border-[1.5px] border-indigo-600 hover:bg-indigo-50',
        danger:
          'bg-red-600 text-white hover:bg-red-700 shadow-[0_4px_24px_rgba(220,38,38,0.25)]',
      },
      size: {
        sm: 'px-4 py-2 text-[13px]',
        md: 'px-7 py-3 text-[15px]',
        lg: 'px-9 py-4 text-[16px]',
        icon: 'w-10 h-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
