'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
  animationDelay?: string;
};

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
  animationDelay,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const content = (
    <Card 
      className={cn(
        "border-none shadow-md overflow-hidden relative group hover-lift",
        animationDelay,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      
      <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
        {/* Icon container with animation */}
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
          <div className="transition-transform duration-500 group-hover:scale-110 text-primary">
            {icon}
          </div>
        </div>
        
        <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {description}
        </p>
        
        {href && (
          <div className={cn(
            "mt-auto flex items-center text-sm font-medium text-primary transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <span className="mr-1">Learn more</span>
            <ArrowRight className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              isHovered ? "translate-x-1" : ""
            )} />
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
} 