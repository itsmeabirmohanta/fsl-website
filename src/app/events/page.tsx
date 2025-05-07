'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, ChevronRight, Clock, MapPin, Users2 } from 'lucide-react';

import { PageHeader } from '@/components/PageHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { EVENT_IMAGES } from '@/lib/constants/images';

// Types
interface EventType {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  type: string;
  registrationUrl: string;
  isFeatured?: boolean;
  category?: string;
  capacity?: number;
  price?: number;
  currency?: string;
}

// Mock data for events
const events: EventType[] = [
  {
    id: 'shift-future-lectures',
    title: 'Shift the Future Lecture Series',
    date: 'Summer 2025',
    location: 'Multiple Venues',
    type: 'Lecture Series',
    description: 'A series of lectures featuring world leaders like Audrey Tang, Kai-Fu Lee, and Nina Schick on AI\'s future.',
    imageUrl: EVENT_IMAGES.LECTURE_SERIES,
    registrationUrl: '/registration/shift-future-lectures',
  },
  {
    id: 'beyond-ai-cafe',
    title: 'Beyond AI Café - Episode 3',
    date: 'June 15, 2025',
    location: 'New Delhi, India',
    type: 'Discussion Forum',
    description: 'A movement sparking ethical tech conversations at the grassroots level.',
    imageUrl: EVENT_IMAGES.AI_CAFE,
    registrationUrl: '/registration/beyond-ai-cafe',
  },
  {
    id: 'digital-defenders',
    title: 'Digital Defenders Workshop',
    date: 'July 8, 2025',
    location: 'Tbilisi, Georgia',
    type: 'Training Workshop',
    description: 'Training on AI safety, cybersecurity basics, and responsible tech behavior.',
    imageUrl: EVENT_IMAGES.DIGITAL_DEFENDERS,
    registrationUrl: '/registration/digital-defenders',
  },
  {
    id: 'policy-summit',
    title: 'AI Policy Summit 2025',
    date: 'August 22-23, 2025',
    location: 'Virtual Event',
    type: 'Conference',
    description: 'Global summit on AI policy and governance with policymakers and experts.',
    imageUrl: EVENT_IMAGES.POLICY_SUMMIT,
    registrationUrl: '/registration/policy-summit',
  },
  {
    id: 'ethics-hackathon',
    title: 'Ethics in AI Hackathon',
    date: 'September 15-17, 2025',
    location: 'Berlin, Germany',
    type: 'Hackathon',
    description: 'A 48-hour hackathon focused on developing ethical AI solutions.',
    imageUrl: EVENT_IMAGES.ETHICS_HACKATHON,
    registrationUrl: '/registration/ethics-hackathon',
  },
  {
    id: 'education-forum',
    title: 'Future of Education Forum',
    date: 'October 5, 2025',
    location: 'London, UK',
    type: 'Forum',
    description: 'Exploring the intersection of AI and education with global experts.',
    imageUrl: EVENT_IMAGES.EDUCATION_FORUM,
    registrationUrl: '/registration/education-forum',
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Events" },
  { id: "lectures", name: "Lectures" },
  { id: "meetups", name: "Meetups" },
  { id: "workshops", name: "Workshops" },
  { id: "conferences", name: "Conferences" },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>(events);
  const [featuredEvent, setFeaturedEvent] = useState<EventType | null>(null);
  
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  useEffect(() => {
    const featured = events.find(event => event.isFeatured);
    setFeaturedEvent(featured || events[0]);
  }, []);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <>
      <PageHeader
        title="Events"
        description="Join us at our upcoming events, workshops, and lectures around the world"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
        ]}
      />
      
      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-10">
          <div className="container">
            <SectionHeader
              title="Featured Event"
              subtitle="Don't miss our most anticipated upcoming events"
              className="mb-8"
            />
            
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-[400px] w-full">
                  <Image
                    src={featuredEvent.imageUrl}
                    alt={featuredEvent.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="mb-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{featuredEvent.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredEvent.description}</p>
                  
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      <span>{formatDate(featuredEvent.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    {featuredEvent.capacity && (
                      <div className="flex items-center">
                        <Users2 className="h-4 w-4 mr-2 text-primary" />
                        <span>Capacity: {featuredEvent.capacity}</span>
                      </div>
                    )}
                    {featuredEvent.price !== undefined && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>
                          {featuredEvent.price === 0
                            ? 'Free'
                            : `${featuredEvent.currency || '$'}${featuredEvent.price}`}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild>
                      <Link href={featuredEvent.registrationUrl}>
                        Register Now
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}
      
      {/* Event Listing */}
      <section className="py-10">
        <div className="container">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Browse and register for our upcoming events"
            className="mb-8"
          />
          
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList>
              {categories.map(category => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-0">
              {filteredEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map(event => (
                    <Card key={event.id} className="flex flex-col h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={event.imageUrl}
                          alt={event.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-primary mb-1">
                              {event.type}
                            </p>
                            <CardTitle className="mb-2">
                              {event.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="mt-auto pt-6">
                        <Button asChild className="w-full">
                          <Link href={event.registrationUrl}>
                            Register Now
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No events found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
} 