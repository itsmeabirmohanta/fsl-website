import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface TeamMemberProps {
  id: string;
  name: string;
  title: string;
  department?: string;
  bio: string;
  imageUrl: string;
  email?: string;
  phone?: string;
  twitterHandle?: string;
  linkedinUrl?: string;
  href: string;
  isLeadership?: boolean;
  variant?: 'leadership' | 'standard' | 'compact';
}

export default function TeamMemberCard({
  name,
  title,
  department,
  bio,
  imageUrl,
  email,
  phone,
  twitterHandle,
  linkedinUrl,
  href,
  isLeadership = false,
  variant = 'standard',
}: TeamMemberProps) {
  
  if (variant === 'leadership') {
    return (
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-96 md:h-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover object-center"
            />
          </div>
          
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <Link href={href} className="group">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {name}
                </h3>
              </Link>
              
              <div className="mb-4">
                <p className="text-lg font-medium">{title}</p>
                {department && (
                  <p className="text-muted-foreground">{department}</p>
                )}
              </div>
              
              <CardDescription className="line-clamp-4 mb-6">
                {bio}
              </CardDescription>
              
              <div className="space-y-1">
                {email && (
                  <p className="text-sm">
                    <span className="font-medium">Email:</span> {email}
                  </p>
                )}
                {phone && (
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> {phone}
                  </p>
                )}
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <Button variant="default" className="flex-1" asChild>
                <Link href={href}>View Profile</Link>
              </Button>
              
              <div className="flex space-x-2">
                {twitterHandle && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Twitter profile`}>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </Button>
                )}
                
                {linkedinUrl && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn profile`}>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  if (variant === 'compact') {
    return (
      <Card className="overflow-hidden">
        <div className="flex items-center p-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0 mr-4">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <Link href={href} className="group">
              <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                {name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </Card>
    );
  }
  
  // Default standard variant
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative pt-[100%] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <CardHeader className="pb-2">
        <Link href={href} className="group">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        <div>
          <p className="font-medium">{title}</p>
          {department && (
            <p className="text-sm text-muted-foreground">{department}</p>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow pb-4">
        <CardDescription className="line-clamp-3">
          {bio}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between">
        <Button variant="default" size="sm" className="flex-1" asChild>
          <Link href={href}>View Profile</Link>
        </Button>
        
        <div className="flex space-x-1">
          {twitterHandle && (
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Twitter profile`}>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </Button>
          )}
          
          {linkedinUrl && (
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn profile`}>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
} 