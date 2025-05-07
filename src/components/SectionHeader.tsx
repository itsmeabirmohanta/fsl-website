'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  withAccent = false,
  animated = true,
  className,
  subtitleClassName,
  titleClassName,
  as: Component = "h2",
  children,
}: SectionHeaderProps) {
  // Alignment classes
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const accentVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  // Wrapper component based on animation setting
  const Wrapper = animated ? motion.div : "div";
  const HeaderItem = animated ? motion.div : "div";
  const Accent = animated ? motion.div : "div";

  // Props for animated components
  const containerProps = animated 
    ? { 
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" }
      } 
    : {};

  const itemProps = animated ? { variants: itemVariants } : {};
  const accentProps = animated ? { variants: accentVariants } : {};

  return (
    <Wrapper 
      className={cn("max-w-3xl mb-12", alignClass[align], className)}
      {...containerProps}
    >
      {withAccent && align === "left" && (
        <Accent
          className="h-1 w-24 bg-primary rounded-full mb-6"
          {...accentProps}
        />
      )}

      <HeaderItem {...itemProps}>
        <Component className={cn(
          "font-bold tracking-tight",
          {
            "text-3xl md:text-4xl": Component === "h1",
            "text-2xl md:text-3xl": Component === "h2",
            "text-xl md:text-2xl": Component === "h3",
            "text-lg md:text-xl": Component === "h4" || Component === "h5" || Component === "h6",
          },
          titleClassName
        )}>
          {title}
        </Component>
      </HeaderItem>

      {subtitle && (
        <HeaderItem {...itemProps}>
          <p className={cn(
            "mt-3 text-slate-600 dark:text-slate-300",
            subtitleClassName
          )}>
            {subtitle}
          </p>
        </HeaderItem>
      )}

      {withAccent && align === "center" && (
        <Accent
          className="h-1 w-24 bg-primary rounded-full mx-auto mt-6"
          {...accentProps}
        />
      )}

      {children && <HeaderItem {...itemProps}>{children}</HeaderItem>}
    </Wrapper>
  );
} 