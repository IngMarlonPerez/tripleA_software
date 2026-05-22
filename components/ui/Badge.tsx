import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center font-mono rounded-full transition-all duration-200',
  {
    variants: {
      variant: {
        tech: 'bg-indigo-50 text-indigo-600 border border-[rgba(79,70,229,0.2)]',
        industry: 'bg-white/90 text-foreground border border-transparent',
        status: 'bg-green-50 text-green-600 border border-green-200',
        neutral: 'bg-slate-100 text-slate-600 border border-slate-200',
      },
      size: {
        sm: 'px-[10px] py-[3px] text-[11px]',
        md: 'px-3 py-[5px] text-[12px]',
        lg: 'px-4 py-[6px] text-[13px]',
      },
    },
    defaultVariants: {
      variant: 'tech',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
