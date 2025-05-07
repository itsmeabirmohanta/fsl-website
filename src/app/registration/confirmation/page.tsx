'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Calendar, MapPin, Share2, ArrowLeft, Download, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');
  const confirmationId = searchParams.get('confirmation') || 'CONF-123456';
  
  const [event, setEvent] = useState({
    title: '',
    date: '',
    location: '',
    time: '',
  });
  
  // For demo purposes, we're setting mock data based on eventId
  // In a real app, you'd fetch this from an API
  useEffect(() => {
    // Mock data for different events
    const eventData: Record<string, any> = {
      'shift-future-lectures': {
        title: 'Shift the Future Lecture Series',
        date: 'July 15, 2025',
        location: 'Multiple Venues',
        time: '9:00 AM - 5:00 PM',
        image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf'
      },
      'beyond-ai-cafe': {
        title: 'Beyond AI Café - Episode 3',
        date: 'June 15, 2025',
        location: 'New Delhi, India',
        time: '6:30 PM - 9:00 PM',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87'
      },
      'digital-defenders': {
        title: 'Digital Defenders Workshop',
        date: 'July 8, 2025',
        location: 'Tbilisi, Georgia',
        time: '10:00 AM - 4:00 PM',
        image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2'
      },
      // Default fallback
      default: {
        title: 'Future Shift Labs Event',
        date: 'Upcoming',
        location: 'To be announced',
        time: 'To be announced',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
      }
    };
    
    setEvent(eventData[eventId || ''] || eventData.default);
  }, [eventId]);
  
  // Add to calendar functions
  const getGoogleCalendarUrl = () => {
    const text = `Future Shift Labs: ${event.title}`;
    const dates = '20250715T090000/20250715T170000'; // This should be dynamically generated
    const location = event.location;
    const details = `Your registration is confirmed! Confirmation ID: ${confirmationId}`;
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  };
  
  const getICalContent = () => {
    // Basic iCal format - would need to be properly formatted in a real app
    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
LOCATION:${event.location}
DESCRIPTION:Your registration is confirmed! Confirmation ID: ${confirmationId}
DTSTART:20250715T090000
DTEND:20250715T170000
END:VEVENT
END:VCALENDAR`;
  };
  
  const downloadICalFile = () => {
    const content = getICalContent();
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/calendar' });
    element.href = URL.createObjectURL(file);
    element.download = `${event.title.replace(/\s+/g, '-')}.ics`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  return (
    <div className="container py-12">
      <PageHeader
        title="Registration Confirmed"
        description="Your spot has been secured"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Registration', href: '/registration' },
          { label: 'Confirmation', href: '/registration/confirmation' }
        ]}
      />
      
      <div className="my-12 max-w-3xl mx-auto">
        <Card className="overflow-hidden border-emerald-200 dark:border-emerald-800 shadow-lg">
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-8 flex items-center">
            <div className="bg-white dark:bg-slate-800 rounded-full p-3 mr-5 shadow-sm">
              <CheckCircle className="h-10 w-10 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                Registration Successful!
              </h2>
              <p className="text-emerald-600 dark:text-emerald-400">
                Your spot for {event.title} has been reserved.
              </p>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="inline-block bg-slate-100 dark:bg-slate-800 rounded px-3 py-1 text-sm font-medium mb-2">
                Confirmation ID: {confirmationId}
              </div>
              <h3 className="text-xl font-bold mb-4">{event.title}</h3>
              
              <div className="flex flex-col space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-sm text-muted-foreground">
                      {event.date} • {event.time}
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
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-3 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <p className="font-medium mb-1">Next Steps:</p>
                    <p>We've sent a confirmation email with all the details. Please check your inbox 
                    (and spam folder) for an email from <strong>events@futureshiftlabs.org</strong></p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <h4 className="text-base font-semibold mb-3">Add to your calendar:</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" onClick={downloadICalFile}>
                  <Download className="h-4 w-4 mr-2" />
                  iCal / Outlook
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={getGoogleCalendarUrl()} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-4 w-4 mr-2" />
                    Google Calendar
                  </a>
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild variant="default">
                <Link href="/">
                  Return to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/events">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Browse More Events
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 