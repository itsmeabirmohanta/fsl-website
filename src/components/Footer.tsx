'use client';

import Link from 'next/link';
import { NewsletterSignup } from './NewsletterSignup';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const mainLinks = [
    { href: '/research', label: 'Research' },
    { href: '/events', label: 'Events' },
    { href: '/blog', label: 'Insights' },
    { href: '/team', label: 'Our Team' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const researchAreas = [
    'Public Policy',
    'Economic Development',
    'Healthcare Policy',
    'Education Reform',
    'Environmental Policy',
    'Social Justice',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand and Newsletter Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="bg-primary text-primary-foreground rounded-lg w-10 h-10 flex items-center justify-center font-bold text-xl">
                  P
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                PolicyLab
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Driving evidence-based policy solutions through rigorous research, innovative analysis, 
              and collaborative engagement with stakeholders.
            </p>
            <NewsletterSignup />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Research Areas</h3>
            <ul className="space-y-3">
              {researchAreas.map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} PolicyLab. All rights reserved.</span>
            <div className="flex items-center space-x-8">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 