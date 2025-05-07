'use client';

import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
  errorMessage?: string;
  className?: string;
  retryCount?: number;
}

/**
 * A component that handles image loading errors at a global level
 * Wrap your Image components with this to handle errors gracefully
 */
export function ImageErrorBoundary({
  children,
  fallback,
  onError,
  errorMessage = "Image failed to load",
  className = "",
  retryCount = 2,
}: ImageErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [retries, setRetries] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  
  // Reset error state when children change
  useEffect(() => {
    setHasError(false);
    setRetries(0);
    setIsRetrying(false);
  }, [children]);
  
  // Listen for image error events bubbling up from children
  useEffect(() => {
    const handleError = (event: Event) => {
      // Only handle errors from image elements
      if (event.target instanceof HTMLImageElement) {
        event.stopPropagation(); // Prevent the error from bubbling up further
        
        if (retries < retryCount) {
          setIsRetrying(true);
          setRetries(prev => prev + 1);
          
          // Add a cache buster to force a fresh request
          const currentSrc = event.target.src;
          const cacheBuster = `${currentSrc.includes('?') ? '&' : '?'}_retry=${Date.now()}`;
          event.target.src = `${currentSrc}${cacheBuster}`;
        } else {
          setHasError(true);
          setIsRetrying(false);
          if (onError) onError(new Error('Image failed to load after retries'));
        }
      }
    };

    const element = document.getElementById('image-error-boundary');
    if (element) {
      element.addEventListener('error', handleError, true); // Use capture phase to catch all errors
      
      return () => {
        element.removeEventListener('error', handleError, true);
      };
    }
  }, [onError, retries, retryCount]);

  // Default fallback UI when an image fails to load
  const defaultFallback = (
    <div className={`flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-800 rounded ${className}`}>
      <div className="flex flex-col items-center text-slate-400 dark:text-slate-500 p-4 text-center">
        <ImageOff className="h-6 w-6 mb-2" />
        <p className="text-sm">{errorMessage}</p>
        {retries > 0 && (
          <p className="text-xs mt-1">
            Failed after {retries} {retries === 1 ? 'retry' : 'retries'}
          </p>
        )}
      </div>
    </div>
  );

  if (isRetrying) {
    return (
      <div id="image-error-boundary" className="relative">
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 animate-pulse" />
        {children}
      </div>
    );
  }

  return (
    <div id="image-error-boundary" className="relative">
      {hasError ? (fallback || defaultFallback) : children}
    </div>
  );
} 