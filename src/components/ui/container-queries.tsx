'use client';

import { createContext, useContext, useRef, useEffect, useState, ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

// Define breakpoints similar to Tailwind
type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string;

interface ContainerState {
  size: ContainerSize;
  width: number;
  height: number;
}

const ContainerContext = createContext<ContainerState>({
  size: 'md',
  width: 0,
  height: 0,
});

// Define breakpoints in pixels (matching Tailwind)
const breakpoints: Record<ContainerSize, number> = {
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
};

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  monitorHeight?: boolean;
}

/**
 * A container component that provides size information to its children
 */
export function ResponsiveContainer({
  children,
  className,
  as: Component = 'div',
  monitorHeight = false,
}: ResponsiveContainerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<ContainerState>({
    size: 'md',
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const calculateSize = (width: number): ContainerSize => {
      if (width < breakpoints.sm) return 'sm';
      if (width < breakpoints.md) return 'md';
      if (width < breakpoints.lg) return 'lg';
      if (width < breakpoints.xl) return 'xl';
      return '2xl';
    };

    const updateSize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      const size = calculateSize(width);
      
      setState({ size, width, height });
    };

    // Initial calculation
    updateSize();

    // Use ResizeObserver for modern browsers
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        window.requestAnimationFrame(updateSize);
      });
      
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    } else {
      // Fallback to window resize event
      window.addEventListener('resize', updateSize);
      return () => {
        window.removeEventListener('resize', updateSize);
      };
    }
  }, []);

  // Generate dynamic classes based on container size
  const containerClasses = cn(
    className,
    `container-${state.size}`,
  );

  return (
    <ContainerContext.Provider value={state}>
      <Component ref={containerRef} className={containerClasses}>
        {children}
      </Component>
    </ContainerContext.Provider>
  );
}

/**
 * Hook that returns the current container size information
 */
export function useContainerQuery() {
  const context = useContext(ContainerContext);
  if (context === undefined) {
    throw new Error('useContainerQuery must be used within a ResponsiveContainer');
  }
  return context;
}

/**
 * Component that renders children only when container matches the given criteria
 */
interface ContainerQueryProps {
  children: ReactNode;
  minWidth?: number;
  maxWidth?: number;
  minSize?: ContainerSize;
  maxSize?: ContainerSize;
}

export function ContainerQuery({ 
  children, 
  minWidth, 
  maxWidth,
  minSize,
  maxSize,
}: ContainerQueryProps) {
  const { width, size } = useContainerQuery();
  
  const matchesMinWidth = minWidth === undefined || width >= minWidth;
  const matchesMaxWidth = maxWidth === undefined || width <= maxWidth;
  
  const minSizeValue = minSize ? breakpoints[minSize] : undefined;
  const maxSizeValue = maxSize ? breakpoints[maxSize] : undefined;
  
  const matchesMinSize = minSizeValue === undefined || width >= minSizeValue;
  const matchesMaxSize = maxSizeValue === undefined || width <= maxSizeValue;
  
  if (matchesMinWidth && matchesMaxWidth && matchesMinSize && matchesMaxSize) {
    return <>{children}</>;
  }
  
  return null;
} 