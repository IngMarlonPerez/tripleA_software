import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const cardVariants = cva(
  'rounded-[16px] transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white border border-slate-200 hover:shadow-[0_10px_40px_-4px_rgba(0,0,0,0.10)] hover:-translate-y-[3px]',
        elevated: 'bg-white shadow-[0_10px_40px_-4px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_60px_-8px_rgba(0,0,0,0.15)] hover:-translate-y-[4px]',
        bordered: 'bg-white border-2 border-slate-200 hover:border-indigo-600',
        service: 'bg-white border-[1.5px] border-slate-200 hover:border-indigo-600 hover:shadow-[0_10px_40px_rgba(79,70,229,0.12)] hover:-translate-y-[4px]',
        project: 'bg-white border border-slate-200 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-[6px]',
      },
      padding: {
        none: 'p-0',
        sm: 'p-6',
        md: 'p-8',
        lg: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
)

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, className }))}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card, cardVariants }
