'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

interface ScrollProgressBarProps {
  variant?: 'gradient' | 'glow' | 'pill' | 'minimal';
  color?: 'primary' | 'blue' | 'purple' | 'cyan' | 'rainbow';
  thickness?: 'thin' | 'medium' | 'thick';
  showPercentage?: boolean;
  position?: 'top' | 'bottom';
}

export function ScrollProgressBar({
  variant = 'gradient',
  color = 'primary',
  thickness = 'medium',
  showPercentage = false,
  position = 'top'
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Make the scroll progress smoother with spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar only after scrolling a bit (50px)
      setIsVisible(window.scrollY > 50);
      
      // Calculate scroll percentage
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(window.scrollY / windowHeight, 0), 1);
      setScrollPercentage(Math.round(scrolled * 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Style variants
  const colorStyles = {
    primary: "bg-primary",
    blue: "bg-blue-500", 
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
    rainbow: "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
  };
  
  const thicknessStyles = {
    thin: "h-0.5",
    medium: "h-1",
    thick: "h-2"
  };
  
  const variantStyles = {
    gradient: `${colorStyles[color]} opacity-80`,
    glow: `${colorStyles[color]} opacity-90 shadow-[0_0_10px_rgba(59,130,246,0.7),0_0_20px_rgba(59,130,246,0.5)]`,
    pill: "rounded-full mx-auto max-w-[80%] opacity-80",
    minimal: "opacity-50"
  };
  
  const positionStyles = {
    top: "top-0",
    bottom: "bottom-0"
  };
  
  if (!isVisible) return null;
  
  return (
    <>
      <motion.div
        className={cn(
          "fixed left-0 right-0 z-50 origin-left",
          thicknessStyles[thickness],
          variantStyles[variant],
          positionStyles[position],
          variant === 'pill' ? "rounded-full mx-auto max-w-[80%] opacity-80" : "",
          "transition-all duration-300"
        )}
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      
      {/* Active indicator dot that follows the scroll position */}
      {variant !== 'minimal' && (
        <motion.div
          className={cn(
            "fixed z-50 rounded-full shadow-lg",
            isHovering ? "scale-150" : "scale-100",
            position === 'top' ? "top-0" : "bottom-0",
            color === 'rainbow' ? 'bg-blue-500' : colorStyles[color],
            "progress-dot-pulse",
            {
              'h-2 w-2': thickness === 'thin',
              'h-3 w-3': thickness === 'medium',
              'h-4 w-4': thickness === 'thick'
            }
          )}
          style={{
            left: `${scrollPercentage}%`,
            translateX: '-50%',
            translateY: position === 'top' ? '-25%' : '25%'
          }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {/* Scroll percentage indicator */}
      {showPercentage && (
        <AnimatePresence>
          {isVisible && (
            <motion.div 
              className={cn(
                "fixed z-50 rounded-full bg-black/70 text-white text-xs px-2 py-1 backdrop-blur-sm",
                position === 'top' ? "top-4" : "bottom-4",
                "right-4"
              )}
              initial={{ opacity: 0, y: position === 'top' ? -10 : 10 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: isHovering ? 1.1 : 1
              }}
              exit={{ opacity: 0, y: position === 'top' ? -10 : 10 }}
              transition={{ duration: 0.2 }}
            >
              {scrollPercentage}%
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
} 