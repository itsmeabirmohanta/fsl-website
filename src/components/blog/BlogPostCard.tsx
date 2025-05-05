import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthorBio from './AuthorBio';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface BlogPostProps {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  author: {
    name: string;
    title?: string;
    imageUrl?: string;
  };
  category: string;
  categorySlug: string;
  href: string;
  isFeatured?: boolean;
  variant?: 'compact' | 'standard' | 'featured';
}

export default function BlogPostCard({
  title,
  description,
  date,
  imageUrl,
  author,
  category,
  categorySlug,
  href,
  variant = 'standard',
}: BlogPostProps) {
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Different layouts based on variant
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden">
        <div className="md:grid md:grid-cols-2">
          <div className="h-64 md:h-full relative">
            <Image 
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <Link 
                href={`/blog/category/${categorySlug}`}
                className="inline-block text-primary text-sm font-medium mb-2 hover:underline"
              >
                {category}
              </Link>
              <h2 className="text-2xl font-bold mb-3 leading-tight">
                <Link href={href} className="hover:text-primary transition-colors">
                  {title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                {description}
              </p>
            </div>
            <div>
              <div className="mb-3 text-sm text-muted-foreground">
                {formattedDate}
              </div>
              <AuthorBio 
                name={author.name}
                title={author.title}
                imageUrl={author.imageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"}
                size="small"
              />
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-start">
        <div className="w-20 h-20 relative flex-shrink-0 rounded overflow-hidden mr-4">
          <Image 
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-base mb-1">
            <Link href={href} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </h3>
          <div className="text-xs text-muted-foreground mb-1">{formattedDate}</div>
          <Link 
            href={`/blog/category/${categorySlug}`}
            className="text-xs text-primary hover:underline"
          >
            {category}
          </Link>
        </div>
      </div>
    );
  }

  // Standard variant (default)
  return (
    <Card className="h-full flex flex-col">
      <div className="h-48 relative">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="pt-6 pb-2">
        <Link 
          href={`/blog/category/${categorySlug}`}
          className="inline-block text-primary text-sm font-medium mb-2 hover:underline"
        >
          {category}
        </Link>
        <h2 className="text-xl font-bold">
          <Link href={href} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h2>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-3 pt-0">
        <div className="text-sm text-muted-foreground">{formattedDate}</div>
        <div className="flex items-center justify-between w-full">
          <div className="text-sm font-medium">By {author.name}</div>
          <Button asChild variant="link" size="sm" className="p-0">
            <Link href={href}>
              Read more →
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
} 