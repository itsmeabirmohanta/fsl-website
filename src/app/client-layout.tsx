'use client';

import { Inter, Roboto_Mono } from 'next/font/google'
import "./globals.css";
import "./custom-animations.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Loader } from "@/components/Loader";
import { PageTransition } from "@/components/PageTransition";
import { cn } from "@/lib/utils";
import { FeedbackButton } from "@/components/Feedback";
import { registerImageErrorHandlers } from '@/lib/imageLoader';
import { useState, useEffect } from 'react';

// Optimize font loading for better performance
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-roboto-mono',
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Initialize image error handlers for better image loading
    registerImageErrorHandlers();
    
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {isLoading && <Loader finishDelay={300} />}
      <div className={cn(
        "min-h-screen flex flex-col transition-opacity duration-500",
        isLoading ? "opacity-0" : "opacity-100"
      )}>
        <Header />
        <PageTransition>
          <main className="flex-1">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </div>
      <Toaster />
      <FeedbackButton />
    </ThemeProvider>
  );
} 