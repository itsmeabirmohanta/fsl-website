/**
 * Custom image loader to handle various scenarios including CDN optimization,
 * fallbacks for broken images, and retry mechanisms
 */

import type { ImageLoaderProps } from 'next/image';

// Image proxy services to try if original image fails
const imageProxies = [
  // Original source (no proxy)
  (url: string) => url,
  
  // Cloudinary proxy - requires a Cloudinary account
  // Format: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/fetch/f_auto,q_auto/https://example.com/image.jpg
  (url: string) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return cloudName ? 
      `https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto/${encodeURIComponent(url)}` : 
      url;
  },
  
  // ImgProxy - if you have your own ImgProxy instance
  // Format: https://imgproxy.yourdomain.com/insecure/rs:fill:300:200/plain/https://example.com/image.jpg
  (url: string) => {
    const imgProxyUrl = process.env.NEXT_PUBLIC_IMGPROXY_URL;
    return imgProxyUrl ? 
      `${imgProxyUrl}/insecure/rs:auto/plain/${encodeURIComponent(url)}` : 
      url;
  },
  
  // WeServ fallback - public service to resize and optimize images
  // https://images.weserv.nl/ - no API key needed for basic usage
  (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=fallback`,
];

/**
 * Session storage key for tracking failed image URLs
 */
const FAILED_IMAGES_KEY = 'failed-image-urls';

/**
 * Get the list of failed image URLs from session storage
 */
function getFailedImages(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  
  try {
    const storedData = sessionStorage.getItem(FAILED_IMAGES_KEY);
    return storedData ? JSON.parse(storedData) : {};
  } catch (error) {
    console.error('Error reading failed images from sessionStorage:', error);
    return {};
  }
}

/**
 * Record a failed image URL in session storage
 */
function recordFailedImage(url: string): number {
  if (typeof window === 'undefined') return 0;
  
  try {
    const failedImages = getFailedImages();
    const currentAttempts = failedImages[url] || 0;
    const newAttempts = currentAttempts + 1;
    
    failedImages[url] = newAttempts;
    sessionStorage.setItem(FAILED_IMAGES_KEY, JSON.stringify(failedImages));
    
    return newAttempts;
  } catch (error) {
    console.error('Error recording failed image:', error);
    return 0;
  }
}

/**
 * Clear a successful image from the failed images list
 */
function clearFailedImage(url: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const failedImages = getFailedImages();
    delete failedImages[url];
    sessionStorage.setItem(FAILED_IMAGES_KEY, JSON.stringify(failedImages));
  } catch (error) {
    console.error('Error clearing failed image:', error);
  }
}

/**
 * Custom image loader that handles retries through different proxies
 * and optimizes image loading based on width and quality requirements
 */
export default function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // Don't attempt to transform data URLs or SVG URLs
  if (src.startsWith('data:') || src.endsWith('.svg') || src.includes('svg+xml')) {
    return src;
  }
  
  // For relative URLs or URLs on the same domain, use Next.js default loader
  if (src.startsWith('/') || src.startsWith('./') || src.startsWith('../')) {
    // Use the provided quality
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
  }
  
  // For remote images, check if they've failed before
  if (typeof window !== 'undefined') {
    const failedImages = getFailedImages();
    const attempts = failedImages[src] || 0;
    
    // If this image has failed before, try a different proxy
    if (attempts > 0 && attempts < imageProxies.length) {
      return imageProxies[attempts](src);
    }
  }
  
  // Add cache busting for browsers that aggressively cache (optional)
  // const cacheBuster = new Date().getMonth(); // Changes monthly to avoid excessive cache invalidation
  // const cacheBusterParam = src.includes('?') ? `&_cb=${cacheBuster}` : `?_cb=${cacheBuster}`;
  
  // Return the original URL for the first attempt
  return src;
}

/**
 * Register event handlers to detect image loading failures
 * Call this in your layout or main component
 */
export function registerImageErrorHandlers(): void {
  if (typeof window === 'undefined') return;
  
  // Register a global handler for image errors
  window.addEventListener('error', (event: ErrorEvent) => {
    const target = event.target as HTMLImageElement;
    
    // Check if this is an image error
    if (target && target.tagName === 'IMG' && target.src) {
      // Don't handle errors for images that have error handlers
      if (target.hasAttribute('data-has-error-handler')) return;
      
      // Get the original source without any cache busting parameters
      const originalSrc = target.getAttribute('data-original-src') || target.src;
      
      // Record this as a failed image
      const attempts = recordFailedImage(originalSrc);
      
      // If we have another proxy to try, try it
      if (attempts < imageProxies.length) {
        console.log(`Image failed to load: ${originalSrc}. Trying alternate source (${attempts}/${imageProxies.length-1})`);
        
        // Store the original source for reference
        target.setAttribute('data-original-src', originalSrc);
        
        // Try the next proxy
        target.src = imageProxies[attempts](originalSrc);
      } else {
        console.error(`All image sources failed for: ${originalSrc}`);
      }
    }
  }, true); // Use capture to catch events before they're handled by other listeners
  
  // We also add a successful load handler to clear images from the failure list
  // if they eventually succeed
  window.addEventListener('load', (event: Event) => {
    const target = event.target as HTMLImageElement;
    
    // Check if this is an image load event
    if (target && target.tagName === 'IMG') {
      const originalSrc = target.getAttribute('data-original-src') || target.src;
      clearFailedImage(originalSrc);
    }
  }, true); // Use capture to catch events before they're handled by other listeners
} 