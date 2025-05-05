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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <div 
        className={cn(
          "w-full max-w-6xl rounded-full mx-auto transition-all duration-300 mt-3",
          isScrolled 
            ? "bg-background/85 backdrop-blur-xl shadow-lg py-2" 
            : "bg-background/50 backdrop-blur-md py-3 shadow-md"
        )}
      >
        <div className="px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl w-8 h-8">
              P
            </div>
            <span className="font-bold">PolicyLab</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
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
                className="rounded-full"
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
              className="rounded-full"
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
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 mt-4">
            <nav className="bg-background/95 backdrop-blur-xl rounded-2xl p-3 shadow-lg">
              <div className="flex flex-col space-y-1.5">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button size="sm" className="w-full rounded-xl" asChild>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 