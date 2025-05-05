import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  actions?: React.ReactNode;
  badge?: string;
  background?: "default" | "gradient" | "pattern" | "none";
  alignment?: "left" | "center";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  badge,
  background = "default",
  alignment = "left",
  size = "md",
  className,
  children,
}: PageHeaderProps) {
  // Define background classes
  const backgroundClasses = {
    default: "bg-white dark:bg-slate-900",
    gradient: "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800",
    pattern: "bg-slate-50 dark:bg-slate-800 bg-grid",
    none: "",
  };

  // Define padding based on size
  const sizeClasses = {
    sm: "py-8",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
  };

  // Define alignment classes
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  // Define container max width based on alignment
  const containerClasses = {
    left: "max-w-none",
    center: "max-w-2xl",
  };

  return (
    <div className={cn(
      "w-full", 
      backgroundClasses[background],
      sizeClasses[size],
      className
    )}>
      <div className="container px-4">
        <div className={cn(
          alignmentClasses[alignment],
          containerClasses[alignment]
        )}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-2">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.label}>
                    {index > 0 && (
                      <li className="inline-flex items-center">
                        <span className="mx-1">/</span>
                      </li>
                    )}
                    <li>
                      {crumb.href ? (
                        <Link 
                          href={crumb.href} 
                          className="hover:text-primary transition-colors duration-200"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          )}

          {/* Badge */}
          {badge && (
            <Badge 
              variant="outline" 
              className="mb-4 animate-fade-in bg-white/80 backdrop-blur-sm dark:bg-slate-800/80"
            >
              {badge}
            </Badge>
          )}

          {/* Title */}
          <h1 className={cn(
            "font-bold tracking-tight animate-fade-in",
            {
              "text-2xl md:text-3xl lg:text-4xl": size === "sm",
              "text-3xl md:text-4xl lg:text-5xl": size === "md",
              "text-4xl md:text-5xl lg:text-6xl": size === "lg",
            }
          )}>
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className={cn(
              "mt-4 text-slate-600 dark:text-slate-300 animate-fade-in animation-delay-300",
              {
                "text-base": size === "sm",
                "text-lg": size === "md",
                "text-xl": size === "lg",
                "max-w-xl mx-auto": alignment === "center",
                "max-w-2xl": alignment === "left",
              }
            )}>
              {description}
            </p>
          )}

          {/* Actions */}
          {actions && (
            <div className={cn(
              "mt-6 flex gap-3 animate-fade-in animation-delay-500",
              {
                "justify-center": alignment === "center",
                "justify-start": alignment === "left",
              }
            )}>
              {actions}
            </div>
          )}

          {/* Additional content */}
          {children && (
            <div className="mt-6 animate-fade-in animation-delay-700">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PageHeaderAction({
  children,
  variant,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button variant={variant || "default"} {...props}>
      {children}
    </Button>
  );
} 