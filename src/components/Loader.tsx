'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LoaderProps {
  finishDelay?: number;
}

export function Loader({ finishDelay = 600 }: LoaderProps) {
  const [loading, setLoading] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Simulate minimum loader display time
    const timer = setTimeout(() => {
      setLoading(false);
      
      // After animation completes, remove from DOM entirely
      setTimeout(() => {
        setRemoved(true);
      }, finishDelay + 500); // Add extra time to ensure animation completes
    }, 1500);

    // Add class to body to prevent scrolling while loading
    document.body.classList.add('loading');
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, [finishDelay]);
  
  // Once removed completely, return null to prevent any rendering
  if (removed) return null;

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.5,
              delay: finishDelay / 1000,
              ease: [0.22, 1, 0.36, 1] 
            }
          }}
        >
          <div className="flex flex-col items-center">
            {/* Logo or brand mark */}
            <div className="mb-8 text-4xl font-bold tracking-tight text-white">
              <span className="text-gradient bg-gradient-shimmer animate-shimmer">Future Shift Labs</span>
            </div>
            
            {/* Loading indicator */}
            <div className="relative">
              {/* Orbital loader ring */}
              <div className="w-24 h-24 rounded-full border-t-2 border-b-2 border-primary animate-spin"></div>
              
              {/* Inner loader elements */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-r-2 border-l-2 border-blue-400 animate-spin animate-reverse"></div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Loading text */}
            <div className="mt-6 text-white/80 text-sm flex items-center">
              <span className="inline-block w-12 text-right mr-2">Loading</span>
              <span className="w-1 h-1 bg-white/60 rounded-full animate-pulse-dot1"></span>
              <span className="w-1 h-1 bg-white/60 rounded-full mx-1 animate-pulse-dot2"></span>
              <span className="w-1 h-1 bg-white/60 rounded-full animate-pulse-dot3"></span>
              <span className="inline-block w-12 text-left ml-2 text-gradient">FSL</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 