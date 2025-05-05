import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface AuthorProps {
  name: string;
  title?: string;
  bio?: string;
  imageUrl: string;
  twitterHandle?: string;
  linkedinUrl?: string;
  email?: string;
  authorPageUrl?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function AuthorBio({
  name,
  title,
  bio,
  imageUrl,
  twitterHandle,
  linkedinUrl,
  email,
  authorPageUrl,
  size = 'medium',
}: AuthorProps) {
  // Define sizes for different variants
  const sizeClasses = {
    small: {
      container: 'flex items-center',
      image: 'w-10 h-10',
      textContainer: '',
      name: 'text-sm font-semibold',
      title: 'text-xs text-muted-foreground',
      bio: 'hidden',
      socialLinks: 'hidden',
    },
    medium: {
      container: 'flex items-center',
      image: 'w-16 h-16',
      textContainer: '',
      name: 'text-lg font-bold',
      title: 'text-sm text-muted-foreground',
      bio: 'text-sm text-muted-foreground mt-1',
      socialLinks: 'flex mt-2 space-x-3',
    },
    large: {
      container: 'flex flex-col md:flex-row items-center md:items-start text-center md:text-left',
      image: 'w-24 h-24 md:mr-6 mb-4 md:mb-0',
      textContainer: 'flex-1',
      name: 'text-xl font-bold',
      title: 'text-base text-muted-foreground',
      bio: 'text-base text-muted-foreground mt-2',
      socialLinks: 'flex mt-4 space-x-4 justify-center md:justify-start',
    },
  };
  
  const classes = sizeClasses[size];
  
  return (
    <div className={cn(classes.container)}>
      <div className={cn(classes.image, "relative rounded-full overflow-hidden flex-shrink-0 mr-4")}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className={cn(classes.textContainer)}>
        {authorPageUrl ? (
          <Link href={authorPageUrl} className="hover:text-primary transition-colors">
            <h3 className={cn(classes.name)}>{name}</h3>
          </Link>
        ) : (
          <h3 className={cn(classes.name)}>{name}</h3>
        )}
        
        {title && <div className={cn(classes.title)}>{title}</div>}
        
        {bio && size !== 'small' && (
          <p className={cn(classes.bio)}>{bio}</p>
        )}
        
        {(twitterHandle || linkedinUrl || email) && size !== 'small' && (
          <div className={cn(classes.socialLinks)}>
            {twitterHandle && (
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="h-8 w-8"
              >
                <a 
                  href={`https://twitter.com/${twitterHandle}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s Twitter profile`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </Button>
            )}
            
            {linkedinUrl && (
              <Button
                size="icon"
                variant="ghost" 
                asChild
                className="h-8 w-8"
              >
                <a 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </Button>
            )}
            
            {email && (
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="h-8 w-8"
              >
                <a 
                  href={`mailto:${email}`}
                  aria-label={`Email ${name}`}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 