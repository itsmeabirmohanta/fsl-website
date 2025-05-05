'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

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
  quality = 85, // Higher quality default
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw', // Responsive sizes default
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // Reset loading state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [src]);
  
  // Determine placeholder settings
  const placeholderStyle = blurEffect === 'color' ? { backgroundColor: blurColor } : undefined;
  const placeholder = blurEffect === 'data' ? 'blur' : undefined;
  
  // Set priority for above-fold images
  const priority = isAboveFold ? true : props.priority;
  
  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };
  
  // Handle loading error
  const handleError = () => {
    setIsError(true);
  };
  
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
  
  const shimmerDataUrl = `data:image/svg+xml;base64,${Buffer.from(shimmerSvg).toString('base64')}`;
  
  // Apply shimmer effect if enabled
  const blurDataURL = shimmer ? shimmerDataUrl : props.blurDataURL;
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden', 
        wrapperClassName,
        isError ? 'bg-gray-200' : ''
      )}
      style={{
        ...placeholderStyle,
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
      }}
    >
      {!isError ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          quality={quality}
          sizes={sizes}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoadingComplete={handleLoadingComplete}
          onError={handleError}
          className={cn(
            className,
            fadeIn && 'transition-opacity duration-500',
            fadeIn && !isLoaded ? 'opacity-0' : 'opacity-100'
          )}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 text-sm">
          {alt || 'Image failed to load'}
        </div>
      )}
    </div>
  );
} 