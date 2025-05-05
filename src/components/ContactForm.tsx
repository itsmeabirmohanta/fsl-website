'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { submitContactForm } from '@/lib/data';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    // Clear success message when user starts typing again
    if (submitStatus.success) {
      setSubmitStatus({});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      // Using our client-side function instead of API call
      const result = submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: result.message || 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus.message && (
        <div className={cn(
          "p-4 rounded-md mb-6",
          submitStatus.success 
            ? "bg-primary/10 text-primary border border-primary/20" 
            : "bg-destructive/10 text-destructive border border-destructive/20"
        )}>
          {submitStatus.message}
        </div>
      )}
      
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="font-medium">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={errors.name ? "border-destructive ring-destructive" : ""}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name}</p>
        )}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email" className="font-medium">
          Email Address <span className="text-destructive">*</span>
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={errors.email ? "border-destructive ring-destructive" : ""}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email}</p>
        )}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="subject" className="font-medium">
          Subject <span className="text-destructive">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is your message about?"
          className={errors.subject ? "border-destructive ring-destructive" : ""}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && (
          <p className="text-sm text-destructive mt-1">{errors.subject}</p>
        )}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="message" className="font-medium">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          rows={5}
          className={errors.message ? "border-destructive ring-destructive" : ""}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
} 