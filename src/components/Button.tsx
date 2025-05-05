import React from 'react';
import Link from 'next/link';
import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

interface LinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  external?: boolean;
}

// Map our variant names to Shadcn variant names
const mapVariant = (variant: ButtonVariant): "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" => {
  switch (variant) {
    case 'primary':
      return 'default';
    case 'secondary':
      return 'secondary';
    case 'outline':
      return 'outline';
    case 'ghost':
      return 'ghost';
    case 'link':
      return 'link';
    case 'destructive':
      return 'destructive';
    default:
      return 'default';
  }
};

// Map our size names to Shadcn size names
const mapSize = (size: ButtonSize): "default" | "sm" | "lg" => {
  switch (size) {
    case 'sm':
      return 'sm';
    case 'md':
      return 'default';
    case 'lg':
      return 'lg';
    default:
      return 'default';
  }
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) => {
  return (
    <ShadcnButton
      variant={mapVariant(variant)}
      size={mapSize(size)}
      className={cn(fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export const LinkButton = ({
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: LinkButtonProps) => {
  const mappedVariant = mapVariant(variant);
  const mappedSize = mapSize(size);

  const classNames = cn(
    buttonVariants({
      variant: mappedVariant,
      size: mappedSize,
    }),
    fullWidth && 'w-full',
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames} {...props}>
      {children}
    </Link>
  );
};

export default Button; 