import { forwardRef, type LabelHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'block font-inter text-[13px] font-medium text-charcoal mb-[6px]',
          className
        )}
        {...props}
      />
    )
  }
)
Label.displayName = 'Label'

export { Label }
