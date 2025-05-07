'use client';

import { useState, useEffect, useCallback } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react';

export interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  /**
   * Enables blur-up loading effect with either a data URL or 'color' for solid color
   */
  blurEffect?: 'data' | 'color' | 'none';
  
  /**
   * Background color to use when blurEffect is 'color'
   */
  blurColor?: string;
  
  /**
   * Adds fade-in animation when image loads
   */
  fadeIn?: boolean;
  
  /**
   * Whether this image is likely to be above the fold
   */
  isAboveFold?: boolean;
  
  /**
   * Custom class for the wrapper div
   */
  wrapperClassName?: string;
  
  /**
   * Whether to render a shimmer placeholder
   */
  shimmer?: boolean;
  
  /**
   * Makes Next.js generate the image at build time instead of on-demand
   * Use this for hero and other critical images
   */
  generateStatically?: boolean;
  
  /**
   * URL to use as fallback if the primary image fails to load
   */
  fallbackSrc?: string;
  
  /**
   * Custom component or element to show when image fails to load
   */
  errorComponent?: React.ReactNode;
  
  /**
   * Number of times to retry loading the image
   */
  retryCount?: number;
  
  /**
   * Alt text to display for accessibility
   */
  alt: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  blurEffect = 'none',
  blurColor = '#f3f4f6', // Light gray default
  fadeIn = true,
  isAboveFold = false,
  wrapperClassName,
  shimmer = false,
  generateStatically = false,
  fallbackSrc,
  errorComponent,
  retryCount = 0,
  quality = 85, // Higher quality default
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw', // Responsive sizes default
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retries, setRetries] = useState(0);
  
  // Reset loading state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
    setCurrentSrc(src);
    setRetries(0);
  }, [src]);
  
  // Determine placeholder settings
  const placeholderStyle = blurEffect === 'color' ? { backgroundColor: blurColor } : undefined;
  const placeholder = blurEffect === 'data' ? 'blur' : undefined;
  
  // Set priority for above-fold images
  const priority = isAboveFold ? true : props.priority;
  
  // Handle loading complete
  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);
  
  // Handle loading error with retry and fallback logic
  const handleError = useCallback(() => {
    if (retries < retryCount) {
      // Retry loading the same image
      setRetries(prev => prev + 1);
      // Add a cache buster to the URL to bypass browser cache
      const currentSrcString = typeof currentSrc === 'string' ? currentSrc : '';
      const cacheBuster = `${currentSrcString.includes('?') ? '&' : '?'}_retry=${Date.now()}`;
      setCurrentSrc(`${typeof src === 'string' ? src : ''}${cacheBuster}`);
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {
      // Try the fallback image if available and not already using it
      setCurrentSrc(fallbackSrc);
      setRetries(0);
    } else {
      // If all retries and fallbacks fail, show error state
      setIsError(true);
    }
  }, [retries, retryCount, currentSrc, fallbackSrc, src]);
  
  // Create shimmer SVG for placeholder
  const shimmerSvg = `
    <svg width="100%" height="100%" viewBox="0 0 ${width || 400} ${height || 225}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f6f7f8">
            <animate attributeName="offset" values="-2; 1" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stop-color="#edeef1">
            <animate attributeName="offset" values="-1.5; 1.5" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stop-color="#f6f7f8">
            <animate attributeName="offset" values="-1; 2" dur="2s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shimmerGradient)" />
    </svg>
  `;
  
  const shimmerDataUrl = typeof window !== 'undefined' ? 
    `data:image/svg+xml;base64,${Buffer.from(shimmerSvg).toString('base64')}` : 
    undefined;
  
  // Apply shimmer effect if enabled
  const blurDataURL = shimmer && shimmerDataUrl ? shimmerDataUrl : props.blurDataURL;
  
  // Error component to show when image fails to load
  const DefaultErrorComponent = (
    <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-800 rounded-md">
      <div className="flex flex-col items-center text-slate-400 dark:text-slate-500 p-4 text-center">
        <ImageOff className="h-6 w-6 mb-2" />
        <p className="text-xs">{alt || 'Image not available'}</p>
      </div>
    </div>
  );
  
  // If error state and no custom error component, show default error component
  if (isError) {
    return (
      <div 
        className={cn(
          'relative overflow-hidden',
          wrapperClassName,
        )}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          ...placeholderStyle
        }}
      >
        {errorComponent || DefaultErrorComponent}
      </div>
    );
  }
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        wrapperClassName,
        shimmer && !isLoaded && 'animate-pulse bg-slate-200 dark:bg-slate-700'
      )} 
      style={placeholderStyle}
    >
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn(
          className,
          fadeIn && 'transition-opacity duration-500',
          fadeIn && !isLoaded && 'opacity-0',
          fadeIn && isLoaded && 'opacity-100',
          // Add GPU acceleration for smoother animations
          'transform-gpu will-change-[opacity]'
        )}
        quality={quality}
        sizes={sizes}
        priority={priority}
        onLoad={handleLoadingComplete}
        onError={handleError}
        loading={isAboveFold ? 'eager' : 'lazy'}
        fetchPriority={isAboveFold ? 'high' : 'auto'}
        {...props}
        blurDataURL={blurDataURL}
        placeholder={placeholder}
      />
    </div>
  );
} 