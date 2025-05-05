import { cn } from "@/lib/utils";
import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  withAccent?: boolean;
  animated?: boolean;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
};

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  withAccent = true,
  animated = true,
  className,
  subtitleClassName,
  titleClassName,
  as: Component = "h2",
  children,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const animationClass = animated ? "animate-fade-in" : "";

  return (
    <div className={cn("mb-12 max-w-3xl", alignmentClasses[align], className)}>
      {withAccent && (
        <div className={cn(
          "h-1 w-16 bg-primary rounded mb-6",
          {
            "mx-auto": align === "center",
            "ml-auto": align === "right"
          },
          animated && "animate-scale-up"
        )} />
      )}
      
      <Component className={cn(
        "font-bold tracking-tight",
        {
          "text-3xl md:text-4xl": Component === "h1",
          "text-2xl md:text-3xl": Component === "h2",
          "text-xl md:text-2xl": Component === "h3",
          "text-lg md:text-xl": Component === "h4" || Component === "h5" || Component === "h6",
        },
        animationClass,
        titleClassName
      )}>
        {title}
      </Component>
      
      {subtitle && (
        <p className={cn(
          "mt-3 text-slate-600 dark:text-slate-300",
          animationClass,
          "animation-delay-300",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
} 