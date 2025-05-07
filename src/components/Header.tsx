'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/research', label: 'Research' },
    { href: '/events', label: 'Events' },
    { href: '/blog', label: 'Insights' },
    { href: '/team', label: 'Our Team' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <>
      {/* Only show spacer on non-home pages */}
      {!isHomePage && <div className="h-[5rem]" />}
      
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div 
          className={cn(
            "w-full transition-all duration-300",
            isHomePage ? (
              isScrolled 
                ? "max-w-7xl rounded-full mx-4 bg-gray-800/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-lg py-2 mt-3"
                : "max-w-7xl rounded-full mx-4 bg-transparent dark:bg-transparent py-3 mt-3"
            ) : (
              isScrolled 
                ? "bg-gray-900/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg py-3"
                : "bg-gray-900/50 dark:bg-slate-900/50 backdrop-blur-md py-4"
            )
          )}
        >
          <div className={cn(
            "flex items-center justify-between",
            isHomePage ? "px-4 sm:px-8" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          )}>
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl w-8 h-8">
                F
              </div>
              <span className="font-bold text-white dark:text-white">Future Shift Labs</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                      isActive(item.href)
                        ? "text-white bg-white/10 hover:bg-white/20" 
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="ml-2 flex items-center space-x-2">
                <ThemeToggle />
                <Button 
                  size="sm" 
                  className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
                className="rounded-full text-white hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <nav className={cn(
              "mt-4 pb-4",
              isHomePage ? "px-4" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            )}>
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-blue-600/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button 
                    size="sm" 
                    className="w-full rounded-xl bg-blue-600 hover:bg-blue-700" 
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 