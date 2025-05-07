'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Metadata } from 'next';

import { PageHeader } from '@/components/PageHeader';
import { RegistrationForm, type RegistrationEvent, type RegistrationField } from '@/components/registration/RegistrationForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Clock, MapPin, CalendarDays, Users2, ArrowLeft } from 'lucide-react';
import { EVENT_IMAGES } from '@/lib/constants';

// Mock events data (should be fetched from backend in production)
const events: RegistrationEvent[] = [
  {
    id: 'shift-future-lectures',
    title: 'Shift the Future Lecture Series',
    description: 'A series of lectures featuring world leaders like Audrey Tang, Kai-Fu Lee, and Nina Schick on AI\'s future.',
    date: '2025-07-15',
    location: 'Multiple Venues',
    image: EVENT_IMAGES.LECTURE_SERIES,
    capacity: 500,
    price: 0,
    currency: 'USD',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: 'Full Name',
        required: true,
        placeholder: 'Enter your full name',
        validation: {
          minLength: 3,
          maxLength: 50,
        },
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        required: true,
        placeholder: 'you@example.com',
      },
      {
        id: 'organization',
        type: 'text',
        label: 'Organization',
        required: false,
        placeholder: 'Your company or organization',
      },
      {
        id: 'lectures',
        type: 'checkbox',
        label: 'I would like to attend all lectures in the series',
        description: 'Uncheck if you plan to attend only specific lectures',
        initialValue: true,
      },
      {
        id: 'specificLectures',
        type: 'select',
        label: 'Specific Lectures',
        required: false,
        placeholder: 'Select lectures you wish to attend',
        options: [
          { label: 'AI in Governance - Audrey Tang', value: 'ai-governance' },
          { label: 'Future of AI - Kai-Fu Lee', value: 'future-of-ai' },
          { label: 'Deepfakes and Democracy - Nina Schick', value: 'deepfakes' },
        ],
      },
      {
        id: 'dietaryRestrictions',
        type: 'textarea',
        label: 'Dietary Restrictions',
        required: false,
        placeholder: 'Please let us know if you have any dietary restrictions for the catered lunch',
      },
      {
        id: 'agreeTerms',
        type: 'checkbox',
        label: 'I agree to the terms and conditions',
        required: true,
        description: 'By checking this, you agree to our terms of service and privacy policy',
      },
    ],
  },
  {
    id: 'beyond-ai-cafe',
    title: 'Beyond AI Café - Episode 3',
    description: 'A movement sparking ethical tech conversations at the grassroots level.',
    date: '2025-06-15',
    location: 'New Delhi, India',
    image: EVENT_IMAGES.AI_CAFE,
    capacity: 120,
    price: 0,
    currency: 'USD',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: 'Full Name',
        required: true,
        placeholder: 'Enter your full name',
        validation: {
          minLength: 3,
          maxLength: 50,
        },
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        required: true,
        placeholder: 'you@example.com',
      },
      {
        id: 'occupation',
        type: 'select',
        label: 'Occupation',
        required: true,
        placeholder: 'Select your occupation',
        options: [
          { label: 'Student', value: 'student' },
          { label: 'Academic/Researcher', value: 'academic' },
          { label: 'Industry Professional', value: 'industry' },
          { label: 'Government', value: 'government' },
          { label: 'Non-profit', value: 'non-profit' },
          { label: 'Other', value: 'other' },
        ],
      },
      {
        id: 'topics',
        type: 'radio',
        label: 'Topic Interest',
        required: true,
        description: 'Select the topic you are most interested in discussing',
        options: [
          { label: 'AI Ethics in Education', value: 'ai-education' },
          { label: 'AI and Local Communities', value: 'ai-communities' },
          { label: 'Policy Recommendations for AI', value: 'ai-policy' },
        ],
      },
      {
        id: 'questions',
        type: 'textarea',
        label: 'Questions for Panelists',
        required: false,
        placeholder: 'Do you have any specific questions for our panelists?',
      },
      {
        id: 'agreeTerms',
        type: 'checkbox',
        label: 'I agree to the terms and conditions',
        required: true,
        description: 'By checking this, you agree to our terms of service and privacy policy',
      },
    ],
  },
  {
    id: 'digital-defenders',
    title: 'Digital Defenders Workshop',
    description: 'Training on AI safety, cybersecurity basics, and responsible tech behavior.',
    date: '2025-07-08',
    location: 'Tbilisi, Georgia',
    image: EVENT_IMAGES.DIGITAL_DEFENDERS,
    capacity: 50,
    price: 100,
    currency: 'USD',
    fields: [
      {
        id: 'fullName',
        type: 'text',
        label: 'Full Name',
        required: true,
        placeholder: 'Enter your full name',
        validation: {
          minLength: 3,
          maxLength: 50,
        },
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        required: true,
        placeholder: 'you@example.com',
      },
      {
        id: 'organization',
        type: 'text',
        label: 'Organization',
        required: false,
        placeholder: 'Your company or organization',
      },
      {
        id: 'experience',
        type: 'select',
        label: 'Experience Level',
        required: true,
        placeholder: 'Select your experience level with cybersecurity',
        options: [
          { label: 'Beginner', value: 'beginner' },
          { label: 'Intermediate', value: 'intermediate' },
          { label: 'Advanced', value: 'advanced' },
        ],
      },
      {
        id: 'workshopDate',
        type: 'date',
        label: 'Workshop Date',
        required: true,
        description: 'Select your preferred workshop date',
      },
      {
        id: 'expectations',
        type: 'textarea',
        label: 'Workshop Expectations',
        required: false,
        placeholder: 'What do you hope to learn from this workshop?',
      },
      {
        id: 'agreeTerms',
        type: 'checkbox',
        label: 'I agree to the terms and conditions',
        required: true,
        description: 'By checking this, you agree to our terms of service and privacy policy',
      },
    ],
  },
];

export default function RegistrationPage() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');
  const [event, setEvent] = useState<RegistrationEvent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch from an API
    // For demo, we use the mock data
    if (eventId) {
      const foundEvent = events.find(e => e.id === eventId);
      if (foundEvent) {
        setEvent(foundEvent);
      }
    }
    setLoading(false);
  }, [eventId]);

  // Handle 404 if event not found and not loading
  if (!loading && !event && eventId) {
    notFound();
  }

  // Main registration page with event selection
  if (!eventId || !event) {
    return (
      <div className="container py-12">
        <PageHeader
          title="Event Registration"
          description="Register for our upcoming events and workshops"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Events', href: '/events' },
            { label: 'Registration', href: '/registration' }
          ]}
        />

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Available Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <OptimizedImage
                    src={event.image || EVENT_IMAGES.FALLBACK}
                    alt={event.title}
                    fill
                    className="object-cover"
                    fallbackSrc={EVENT_IMAGES.FALLBACK}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  
                  <div className="flex flex-col space-y-2 mb-6 text-sm">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      <span>{new Date(event.date || '').toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    {event.capacity && (
                      <div className="flex items-center">
                        <Users2 className="h-4 w-4 mr-2 text-primary" />
                        <span>Capacity: {event.capacity}</span>
                      </div>
                    )}
                  </div>
                  
                  <Link href={`/registration?event=${event.id}`} className="w-full">
                    <Button className="w-full">Register Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Event specific registration page
  return (
    <div className="container py-12">
      <PageHeader
        title="Event Registration"
        description={`Sign up for ${event.title}`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Registration', href: '/registration' },
          { label: event.title, href: `/registration?event=${event.id}` }
        ]}
      />

      <div className="mt-8">
        <Button 
          variant="outline"
          className="mb-8"
          size="sm"
          asChild
        >
          <Link href="/registration">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all events
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Event details sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card>
              <div className="relative h-48">
                <OptimizedImage
                  src={event.image || EVENT_IMAGES.FALLBACK}
                  alt={event.title}
                  fill
                  className="object-cover"
                  fallbackSrc={EVENT_IMAGES.FALLBACK}
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <p className="text-muted-foreground text-sm mb-6">{event.description}</p>
                
                <div className="flex flex-col space-y-4 mb-6">
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date || '').toLocaleDateString(undefined, {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                  
                  {event.capacity && (
                    <div className="flex items-center">
                      <Users2 className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Capacity</p>
                        <p className="text-sm text-muted-foreground">{event.capacity} attendees</p>
                      </div>
                    </div>
                  )}
                  
                  {event.price !== undefined && (
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Price</p>
                        <p className="text-sm text-muted-foreground">
                          {event.price === 0 ? 'Free' : `${event.price} ${event.currency}`}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                <div className="text-sm text-muted-foreground">
                  <p className="mb-4">Please complete the registration form to secure your spot.</p>
                  <p>Questions about the event? <Link href="/contact" className="text-primary hover:underline">Contact us</Link></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Registration form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below to register for {event.title}. Fields marked 
                with an asterisk (*) are required.
              </p>
              
              <RegistrationForm event={event} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Event Overview Section */}
      <section className="mb-8">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full">
              <OptimizedImage
                src={event.image || EVENT_IMAGES.FALLBACK}
                alt={event.title}
                fill
                className="object-cover"
                blurEffect="color"
                retryCount={2}
                fallbackSrc={EVENT_IMAGES.FALLBACK}
              />
            </div>
            
            {/* ... rest of the card content ... */}
          </div>
        </Card>
      </section>

      {/* Mobile Image Display (will only show on mobile) */}
      <div className="md:hidden relative w-full h-40 mb-6">
        <OptimizedImage
          src={event.image || EVENT_IMAGES.FALLBACK}
          alt={`${event.title}`}
          fill
          className="object-cover rounded-lg"
          blurEffect="color"
          retryCount={2}
          fallbackSrc={EVENT_IMAGES.FALLBACK}
        />
      </div>
    </div>
  );
} 