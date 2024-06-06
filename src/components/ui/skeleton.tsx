import { cn } from '@/utils/tailwind'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'old-bg-black/5 old-dark:bg-white/5 animate-pulse rounded-md bg-secondary',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
