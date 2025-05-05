import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type FloatingCardProps = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  animationDelay?: string;
  animationStyle?: "float" | "bounce" | "scale" | "slide" | "none";
  variant?: "default" | "primary" | "secondary" | "outlined" | "glass";
  hoverEffect?: "lift" | "glow" | "scale" | "none";
};

export function FloatingCard({
  title,
  subtitle,
  icon,
  href,
  className,
  animationDelay,
  animationStyle = "float",
  variant = "default",
  hoverEffect = "lift",
}: FloatingCardProps) {
  // Animation class based on style
  const animationClass = React.useMemo(() => {
    switch (animationStyle) {
      case "float":
        return "animate-float";
      case "bounce":
        return "animate-bounce";
      case "scale":
        return "animate-scale-up";
      case "slide":
        return "animate-slide-in-bottom";
      case "none":
        return "";
      default:
        return "animate-float";
    }
  }, [animationStyle]);

  // Variant styling
  const variantClass = React.useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-primary/90 text-primary-foreground dark:bg-primary/80";
      case "secondary":
        return "bg-secondary/90 text-secondary-foreground dark:bg-secondary/80";
      case "outlined":
        return "bg-transparent border-2 border-primary/30 dark:border-primary/20";
      case "glass":
        return "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/10 dark:border-slate-700/30";
      default:
        return "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-800";
    }
  }, [variant]);

  // Hover effect
  const hoverClass = React.useMemo(() => {
    switch (hoverEffect) {
      case "lift":
        return "transition-all duration-300 hover:shadow-xl hover:-translate-y-1";
      case "glow":
        return "transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/10";
      case "scale":
        return "transition-all duration-300 hover:scale-105";
      case "none":
        return "";
      default:
        return "transition-all duration-300 hover:shadow-xl hover:-translate-y-1";
    }
  }, [hoverEffect]);

  const content = (
    <div
      className={cn(
        "rounded-xl p-4 shadow-lg",
        variantClass,
        hoverClass,
        animationClass,
        animationDelay,
        className
      )}
    >
      {icon && (
        <div className={cn(
          "mb-2",
          variant === "primary" || variant === "secondary" 
            ? "text-current" 
            : "text-primary"
        )}>
          {icon}
        </div>
      )}
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className={cn(
        "text-xs",
        variant === "primary" || variant === "secondary"
          ? "text-current/80"
          : "text-slate-600 dark:text-slate-400"
      )}>{subtitle}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
} 