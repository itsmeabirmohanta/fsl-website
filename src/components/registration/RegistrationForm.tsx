'use client';

import React, { useState } from 'react';
import { 
  Button,
} from '@/components/ui/button';
import {
  Input,
} from '@/components/ui/input';
import {
  Textarea,
} from '@/components/ui/textarea';
import {
  Label,
} from '@/components/ui/label';
import {
  RadioGroup, 
  RadioGroupItem
} from '@/components/ui/radio-group';
import {
  Checkbox,
} from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Types
export type RegistrationFieldType = 
  'text' | 'email' | 'number' | 'textarea' | 
  'select' | 'checkbox' | 'radio' | 'date' |
  'file' | 'phone';

export interface RegistrationValidation {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
}

export interface RegistrationFieldOption {
  label: string;
  value: string;
}

export interface RegistrationField {
  id: string;
  type: RegistrationFieldType;
  label: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  options?: RegistrationFieldOption[];
  validation?: RegistrationValidation;
  initialValue?: any;
  disabled?: boolean;
}

export interface RegistrationEvent {
  id: string;
  title: string;
  description?: string;
  date?: string;
  location?: string;
  image: string | StaticImport;
  capacity?: number;
  price?: number;
  currency?: string;
  fields: RegistrationField[];
}

interface RegistrationFormProps {
  event: RegistrationEvent;
  onSuccess?: (formData: Record<string, any>) => void;
}

export const RegistrationForm = ({ event, onSuccess }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    // Initialize form data with initial values from fields
    const initialData: Record<string, any> = {};
    
    event.fields.forEach((field) => {
      if (field.initialValue !== undefined) {
        initialData[field.id] = field.initialValue;
      } else if (field.type === 'checkbox') {
        initialData[field.id] = false;
      } else if (field.type === 'date') {
        initialData[field.id] = null;
      } else {
        initialData[field.id] = '';
      }
    });
    
    return initialData;
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateField = (field: RegistrationField, value: any): string => {
    if (field.required && (value === '' || value === null || value === undefined)) {
      return 'This field is required';
    }
    
    if (field.validation) {
      const { minLength, maxLength, pattern, min, max } = field.validation;
      
      if (typeof value === 'string') {
        if (minLength && value.length < minLength) {
          return `Minimum length is ${minLength} characters`;
        }
        
        if (maxLength && value.length > maxLength) {
          return `Maximum length is ${maxLength} characters`;
        }
        
        if (pattern && !new RegExp(pattern).test(value)) {
          return 'Invalid format';
        }
      }
      
      if (typeof value === 'number') {
        if (min !== undefined && value < min) {
          return `Minimum value is ${min}`;
        }
        
        if (max !== undefined && value > max) {
          return `Maximum value is ${max}`;
        }
      }
    }
    
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Invalid email address';
      }
    }
    
    return '';
  };
  
  const handleChange = (fieldId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
    
    // Clear error when user types
    if (errors[fieldId]) {
      setErrors(prev => ({
        ...prev,
        [fieldId]: ''
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    
    event.fields.forEach((field) => {
      const error = validateField(field, formData[field.id]);
      if (error) {
        newErrors[field.id] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Scroll to the first error
      const firstErrorId = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this to your API
      console.log('Form data to submit:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      
      if (onSuccess) {
        onSuccess(formData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const renderField = (field: RegistrationField) => {
    const { id, type, label, required, placeholder, description, options, disabled } = field;
    const value = formData[id];
    const error = errors[id];
    
    const fieldLabel = (
      <div className="mb-2">
        <Label 
          htmlFor={id}
          className={cn("font-medium", error && "text-destructive")}
        >
          {label}{required && <span className="text-destructive"> *</span>}
        </Label>
        {description && (
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        )}
      </div>
    );
    
    const errorMessage = error && (
      <p className="text-destructive text-sm mt-1 flex items-center">
        <AlertCircle className="h-4 w-4 mr-1" />
        {error}
      </p>
    );
    
    switch (type) {
      case 'text':
      case 'email':
      case 'number':
      case 'phone':
        return (
          <div className="mb-5">
            {fieldLabel}
            <Input
              id={id}
              name={id}
              type={type === 'phone' ? 'tel' : type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => handleChange(id, e.target.value)}
              className={cn(error && "border-destructive")}
              disabled={disabled || isSubmitting}
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : undefined}
            />
            {errorMessage}
          </div>
        );
        
      case 'textarea':
        return (
          <div className="mb-5">
            {fieldLabel}
            <Textarea
              id={id}
              name={id}
              placeholder={placeholder}
              value={value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(id, e.target.value)}
              className={cn(error && "border-destructive")}
              disabled={disabled || isSubmitting}
              rows={4}
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : undefined}
            />
            {errorMessage}
          </div>
        );
        
      case 'select':
        return (
          <div className="mb-5">
            {fieldLabel}
            <Select
              value={value}
              onValueChange={(value: string) => handleChange(id, value)}
              disabled={disabled || isSubmitting}
            >
              <SelectTrigger 
                className={cn(error && "border-destructive")}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errorMessage}
          </div>
        );
        
      case 'checkbox':
        return (
          <div className="mb-5">
            <div className="flex items-start space-x-2">
              <Checkbox
                id={id}
                name={id}
                checked={value}
                onCheckedChange={(checked: boolean | 'indeterminate') => handleChange(id, checked)}
                disabled={disabled || isSubmitting}
                className={cn("mt-1", error && "border-destructive")}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
              />
              <div>
                <Label 
                  htmlFor={id}
                  className={cn("font-medium", error && "text-destructive")}
                >
                  {label}{required && <span className="text-destructive"> *</span>}
                </Label>
                {description && (
                  <p className="text-muted-foreground text-sm">{description}</p>
                )}
                {errorMessage}
              </div>
            </div>
          </div>
        );
        
      case 'radio':
        return (
          <div className="mb-5">
            {fieldLabel}
            <RadioGroup
              value={value}
              onValueChange={(value: string) => handleChange(id, value)}
              className={cn("mt-2", error && "border-destructive border p-2 rounded-md")}
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : undefined}
            >
              {options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 py-1">
                  <RadioGroupItem value={option.value} id={`${id}-${option.value}`} disabled={disabled || isSubmitting} />
                  <Label htmlFor={`${id}-${option.value}`} className="font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errorMessage}
          </div>
        );
        
      case 'date':
        return (
          <div className="mb-5">
            {fieldLabel}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id={id}
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !value && "text-muted-foreground",
                    error && "border-destructive"
                  )}
                  disabled={disabled || isSubmitting}
                  aria-invalid={!!error}
                  aria-describedby={error ? `${id}-error` : undefined}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {value ? format(value, "PPP") : <span>{placeholder || "Select a date"}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={value}
                  onSelect={(date: Date | undefined) => handleChange(id, date)}
                  initialFocus
                  disabled={disabled || isSubmitting}
                />
              </PopoverContent>
            </Popover>
            {errorMessage}
          </div>
        );
        
      default:
        return null;
    }
  };
  
  // Show success message if form submitted successfully
  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center text-center py-10 space-y-4">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Registration Successful!</h3>
        <p className="text-muted-foreground max-w-md">
          Thank you for registering for {event.title}. We have sent a confirmation 
          email with all the details to your email address.
        </p>
        <Button asChild className="mt-6">
          <a href="/">Return to Homepage</a>
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {event.fields.map((field) => (
        <div key={field.id} id={field.id}>
          {renderField(field)}
        </div>
      ))}
      
      {errors.form && (
        <div className="bg-destructive/10 text-destructive p-3 rounded-md flex items-center">
          <AlertCircle className="h-4 w-4 mr-2" />
          <p>{errors.form}</p>
        </div>
      )}
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Complete Registration'}
      </Button>
      
      <p className="text-sm text-muted-foreground text-center mt-4">
        By registering, you agree to our{' '}
        <a href="/terms" className="text-primary hover:underline">Terms of Service</a>{' '}
        and{' '}
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
}; 