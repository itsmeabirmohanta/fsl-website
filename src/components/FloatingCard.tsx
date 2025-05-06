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
  variant?: "default" | "primary" | "secondary" | "outlined" | "glass" | "frosted";
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
        return "bg-gradient-to-br from-blue-600/90 to-blue-700/80 text-white dark:from-blue-600/90 dark:to-blue-800/80";
      case "secondary":
        return "bg-gradient-to-br from-secondary/80 to-secondary-foreground/20 text-secondary-foreground dark:from-secondary/80 dark:to-secondary/40";
      case "outlined":
        return "bg-transparent border-2 border-blue-400/30 dark:border-blue-400/20";
      case "glass":
        return "bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-xl";
      case "frosted":
        return "bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl";
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
        return "transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20";
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
        "rounded-xl p-5 shadow-lg relative overflow-hidden",
        variantClass,
        hoverClass,
        animationClass,
        animationDelay,
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-white/5 z-0"></div>
      <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-white/5 z-0"></div>
      
      {/* Content container with improved spacing */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          {icon && (
            <div className={cn(
              "p-2 rounded-full",
              variant === "primary" || variant === "secondary" 
                ? "bg-white/10 text-white" 
                : "bg-blue-400/10 text-blue-400"
            )}>
              {icon}
            </div>
          )}
          <h3 className={cn(
            "text-sm font-semibold",
            variant === "default" ? "text-primary" : "text-white"
          )}>
            {title}
          </h3>
        </div>
        <p className={cn(
          "text-sm",
          variant === "primary" || variant === "secondary" || variant === "glass" || variant === "frosted"
            ? "text-white/80"
            : "text-slate-600 dark:text-slate-300"
        )}>
          {subtitle}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
} 