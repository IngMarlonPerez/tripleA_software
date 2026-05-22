import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface SectionLabelProps extends HTMLAttributes<HTMLDivElement> {}

const SectionLabel = forwardRef<HTMLDivElement, SectionLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-[6px] bg-indigo-50 text-indigo-600 font-inter text-[13px] font-medium rounded-full uppercase tracking-[0.05em]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SectionLabel.displayName = 'SectionLabel'

export { SectionLabel }
