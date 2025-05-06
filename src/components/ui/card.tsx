import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "elevated" | "bordered" | "glass" | "accent"
  }
>(({ className, variant = "default", ...props }, ref) => {
  // Calculate variant classes
  const variantClasses = React.useMemo(() => {
    switch (variant) {
      case "elevated":
        return "bg-card text-card-foreground shadow-lg hover:shadow-xl border-t border-slate-100 dark:border-slate-800";
      case "bordered":
        return "bg-card text-card-foreground border-2 hover:border-primary/50";
      case "glass":
        return "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-card-foreground border border-white/20 dark:border-slate-700/20";
      case "accent":
        return "bg-card text-card-foreground border-l-4 border-primary shadow-sm";
      default:
        return "bg-card text-card-foreground shadow-sm";
    }
  }, [variant]);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl relative overflow-hidden transition-all duration-300",
        "after:absolute after:inset-0 after:rounded-xl after:pointer-events-none after:opacity-0 after:transition-opacity",
        "after:bg-gradient-to-tr after:from-primary/5 after:via-primary/5 after:to-transparent",
        "hover:after:opacity-100",
        variantClasses,
        className
      )}
      {...props}
    />
  );
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary/90",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } 