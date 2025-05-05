'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { subscribeToNewsletter } from '@/lib/data';

interface SubscribeFormData {
  email: string;
  name?: string;
}

interface NewsletterSignupProps {
  showNameField?: boolean;
  className?: string;
}

export function NewsletterSignup({ showNameField = false, className = '' }: NewsletterSignupProps) {
  const [formData, setFormData] = useState<SubscribeFormData>({ email: '', name: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Using our client-side function instead of API call
      const result = subscribeToNewsletter(formData);
      
      if (result.success) {
        setSuccess(true);
        setFormData({ email: '', name: '' });
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {success ? (
        <div className="text-green-600 font-medium">
          Thank you for subscribing! We&apos;ll keep you updated with our latest insights.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {showNameField && (
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          )}
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              required
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
        </form>
      )}
    </div>
  );
} 