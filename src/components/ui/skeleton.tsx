import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The width of the skeleton
   */
  width?: string | number;
  /**
   * The height of the skeleton
   */
  height?: string | number;
  /**
   * Whether to show a pulse animation
   */
  animate?: boolean;
  /**
   * The shape of the skeleton (default, circle, rounded)
   */
  variant?: "default" | "circle" | "rounded";
}

function Skeleton({
  className,
  width,
  height,
  animate = true,
  variant = "default",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-muted/80 dark:bg-muted/60",
        animate && "animate-pulse",
        variant === "circle" && "rounded-full",
        variant === "rounded" && "rounded-md",
        variant === "default" && "rounded-md",
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  )
}

export { Skeleton }

// Specialized skeleton components for common use cases
export function AvatarSkeleton({ size = 48, className }: { size?: number, className?: string }) {
  return <Skeleton variant="circle" width={size} height={size} className={className} />
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-5 p-4", className)}>
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  )
}

export function TeamMemberSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <AvatarSkeleton size={120} />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-3 w-32" />
    </div>
  )
}

export function TextSkeleton({ lines = 3, className }: { lines?: number, className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className="h-4" 
          width={i === lines - 1 && lines > 1 ? "75%" : "100%"}
        />
      ))}
    </div>
  )
}

export function HeaderSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-5", className)}>
      <Skeleton className="h-8 w-2/3 sm:w-1/3" />
      <Skeleton className="h-4 w-full sm:w-2/3" />
    </div>
  )
} 