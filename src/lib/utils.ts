import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple className strings using clsx and tailwind-merge
 * to ensure proper merging of Tailwind CSS classes without conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Truncates a string to the specified length and adds an ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Formats a date as a string using the specified format
 * or falls back to a default format
 */
export function formatDate(date: Date | string, options: Intl.DateTimeFormatOptions = {}) {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(dateObj);
}

/**
 * Provides a formatted description for SEO and social sharing
 */
export function getSeoDescription(text: string, maxLength: number = 160): string {
  // Remove any HTML tags
  const plainText = text.replace(/<[^>]*>/g, '');
  return truncateText(plainText, maxLength);
}

/**
 * Creates a URL-friendly slug from a string
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Creates a random ID string for temporary element identification
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Applies staggered animation delays to an array of items
 * @param index The index of the current item
 * @param baseDelay The base delay in milliseconds
 * @param intervalDelay The interval between each item in milliseconds
 * @returns A string with the animation delay class
 */
export function getStaggeredAnimationDelay(index: number, baseDelay = 0, intervalDelay = 150) {
  const delay = baseDelay + (index * intervalDelay);
  
  if (delay <= 500) return `animation-delay-${delay}`;
  if (delay <= 1000) return "animation-delay-500";
  if (delay <= 2000) return "animation-delay-1000";
  if (delay <= 3000) return "animation-delay-2000";
  if (delay <= 4000) return "animation-delay-3000";
  
  return "animation-delay-4000";
} 