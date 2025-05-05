import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime?: string;
  endTime?: string;
  location: string;
  isVirtual?: boolean;
  imageUrl: string;
  category: {
    name: string;
    href: string;
  };
  href: string;
  registrationUrl?: string;
  isFeatured?: boolean;
  variant?: 'featured' | 'compact' | 'standard';
}

export default function EventCard({
  title,
  description,
  date,
  startTime,
  endTime,
  location,
  isVirtual = false,
  imageUrl,
  category,
  href,
  registrationUrl,
  isFeatured = false,
  variant = 'standard',
}: EventProps) {
  
  const formattedDate = date ? format(new Date(date), 'MMMM d, yyyy') : '';
  const timeString = startTime && endTime ? `${startTime} - ${endTime}` : startTime || '';
  
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge variant={isVirtual ? "secondary" : "default"}>
                {isVirtual ? 'Virtual Event' : 'In-Person'}
              </Badge>
            </div>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline" asChild>
                  <Link href={category.href}>{category.name}</Link>
                </Badge>
              </div>
              
              <Link href={href} className="group">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-4 group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </Link>
              
              <CardDescription className="line-clamp-3 mb-4">
                {description}
              </CardDescription>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center text-sm">
                  <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{formattedDate}</span>
                </div>
                {timeString && (
                  <div className="flex items-center text-sm">
                    <ClockIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{timeString}</span>
                  </div>
                )}
                <div className="flex items-center text-sm">
                  <MapPinIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
            
            {registrationUrl && (
              <div className="mt-6">
                <Button className="w-full" asChild>
                  <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  }
  
  if (variant === 'compact') {
    return (
      <Card className="overflow-hidden">
        <div className="flex h-full">
          <div className="relative w-24 md:w-32 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-primary-foreground text-xs p-1 text-center">
              {format(new Date(date), 'MMM d')}
            </div>
          </div>
          
          <div className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs" asChild>
                  <Link href={category.href}>{category.name}</Link>
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {isVirtual ? 'Virtual' : 'In-Person'}
                </Badge>
              </div>
              
              <Link href={href} className="group">
                <CardTitle className="text-base font-medium mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {title}
                </CardTitle>
              </Link>
              
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPinIcon className="h-3 w-3 mr-1" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  // Default standard variant
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={isVirtual ? "secondary" : "default"}>
            {isVirtual ? 'Virtual Event' : 'In-Person'}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" asChild>
            <Link href={category.href}>{category.name}</Link>
          </Badge>
        </div>
        
        <Link href={href} className="group">
          <CardTitle className="group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </Link>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="line-clamp-2 mb-4">
          {description}
        </CardDescription>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          {timeString && (
            <div className="flex items-center text-sm">
              <ClockIcon className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{timeString}</span>
            </div>
          )}
          <div className="flex items-center text-sm">
            <MapPinIcon className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
      
      {registrationUrl && (
        <CardFooter className="pt-0 mt-auto">
          <Button className="w-full" asChild>
            <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
} 