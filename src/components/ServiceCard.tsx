'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
  animationDelay?: string;
  variant?: "default" | "gradient" | "outlined" | "accent" | "glass";
  hoverEffect?: "lift" | "glow" | "scale" | "highlight" | "none";
};

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
  animationDelay,
  variant = "default",
  hoverEffect = "lift",
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Calculate variant classes
  const variantClasses = React.useMemo(() => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-br from-primary/5 via-transparent to-primary/10 border-none shadow-md";
      case "outlined":
        return "bg-background border-2 border-primary/20 shadow-sm";
      case "accent":
        return "bg-primary/5 border-l-4 border-l-primary shadow-sm";
      case "glass":
        return "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white";
      default:
        return "bg-card border-none shadow-md";
    }
  }, [variant]);

  // Calculate hover effect classes
  const hoverClasses = React.useMemo(() => {
    switch (hoverEffect) {
      case "lift":
        return "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";
      case "glow":
        return "transition-all duration-300 hover:shadow-lg hover:shadow-primary/20";
      case "scale":
        return "transition-all duration-300 hover:scale-[1.02]";
      case "highlight":
        return "transition-all duration-300 hover:border-primary/50 hover:bg-primary/5";
      case "none":
        return "";
      default:
        return "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";
    }
  }, [hoverEffect]);

  const content = (
    <Card 
      className={cn(
        "relative group overflow-hidden",
        variantClasses,
        hoverClasses,
        animationDelay,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full transform transition-transform duration-500 group-hover:scale-150" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-grid transition-opacity duration-300 group-hover:opacity-5" />
      
      <div className="p-6 flex flex-col items-center text-center relative z-10">
        {/* Icon container with animation */}
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 relative">
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 group-hover:blur-md transition-all duration-500" />
          <div className="transition-transform duration-500 group-hover:scale-110 text-primary relative z-10">
            {icon}
          </div>
        </div>
        
        <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        
        {href && (
          <div className={cn(
            "mt-auto flex items-center text-sm font-medium text-primary transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-60"
          )}>
            <span className="mr-1">Learn more</span>
            <ArrowRight className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              isHovered ? "translate-x-1" : ""
            )} />
          </div>
        )}
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
} 