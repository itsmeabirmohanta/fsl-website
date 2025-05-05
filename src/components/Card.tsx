import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LinkButton } from './Button';
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  date?: string;
  category?: string;
  author?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  href,
  date,
  category,
  author,
  className,
}) => {
  return (
    <ShadcnCard className={cn("overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1", className)}>
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader className={imageUrl ? "pt-5" : ""}>
        {category && (
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {category}
          </div>
        )}
        <CardTitle className="text-xl hover:text-blue-600 transition-colors">
          <Link href={href}>{title}</Link>
        </CardTitle>
        {(date || author) && (
          <CardDescription>
            <div className="flex items-center text-sm">
              {date && (
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {date && author && <span className="mx-2">•</span>}
              {author && <span>{author}</span>}
            </div>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <LinkButton href={href} variant="link" size="sm">
          Read more →
        </LinkButton>
      </CardFooter>
    </ShadcnCard>
  );
};

export default Card; 