import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface ResearchPaperProps {
  id: string;
  title: string;
  abstract: string;
  publishedDate: string;
  imageUrl?: string;
  authors: Array<{
    id: string;
    name: string;
    imageUrl?: string;
    href?: string;
  }>;
  category: {
    name: string;
    href: string;
  };
  href: string;
  pdfUrl?: string;
  isFeatured?: boolean;
  variant?: 'featured' | 'compact' | 'standard';
}

export default function ResearchPaperCard({
  title,
  abstract,
  publishedDate,
  imageUrl,
  authors,
  category,
  href,
  pdfUrl,
  isFeatured = false,
  variant = 'standard',
}: ResearchPaperProps) {
  
  const formattedDate = publishedDate ? format(new Date(publishedDate), 'MMMM d, yyyy') : '';
  
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageUrl && (
            <div className="relative h-64 md:h-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}
          
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline" asChild>
                  <Link href={category.href}>{category.name}</Link>
                </Badge>
                <span className="text-sm text-muted-foreground">{formattedDate}</span>
              </div>
              
              <Link href={href} className="group">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-4 group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </Link>
              
              <CardDescription className="line-clamp-3 mb-4">
                {abstract}
              </CardDescription>
            </div>
            
            <div className="flex justify-between items-end">
              <div className="flex -space-x-2">
                {authors.slice(0, 3).map((author) => (
                  <div key={author.id} className="relative w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                    {author.imageUrl ? (
                      <Image
                        src={author.imageUrl}
                        alt={author.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-xs font-medium">{author.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                ))}
                {authors.length > 3 && (
                  <div className="relative w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                    <span className="text-xs font-medium">+{authors.length - 3}</span>
                  </div>
                )}
              </div>
              
              {pdfUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  if (variant === 'compact') {
    return (
      <Card className="overflow-hidden">
        <div className="flex h-full">
          {imageUrl && (
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs" asChild>
                  <Link href={category.href}>{category.name}</Link>
                </Badge>
                <span className="text-xs text-muted-foreground">{formattedDate}</span>
              </div>
              
              <Link href={href} className="group">
                <CardTitle className="text-base font-medium mb-1 group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </Link>
              
              <CardDescription className="text-xs line-clamp-1">
                {authors.map(a => a.name).join(', ')}
              </CardDescription>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  // Default standard variant
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" asChild>
            <Link href={category.href}>{category.name}</Link>
          </Badge>
          <span className="text-sm text-muted-foreground">{formattedDate}</span>
        </div>
        
        <Link href={href} className="group">
          <CardTitle className="group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </Link>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="line-clamp-3 mb-4">
          {abstract}
        </CardDescription>
        
        <div className="flex items-center space-x-1 text-sm">
          <span className="text-muted-foreground">By:</span>
          <span>{authors.map(a => a.name).join(', ')}</span>
        </div>
      </CardContent>
      
      {pdfUrl && (
        <CardFooter className="pt-2">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
} 