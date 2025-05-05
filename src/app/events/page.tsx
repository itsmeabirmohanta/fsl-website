import { Metadata } from 'next';
import { PageHeader, PageHeaderAction } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, Clock, ExternalLink, Globe2, MapPin, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getStaggeredAnimationDelay } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Events | Future Shift Labs',
  description: 'Join our upcoming events, conferences, and workshops on AI policy and governance.',
};

// Mocked events data
const events = [
  {
    id: "1",
    title: "AI Governance and Policy Conference",
    slug: "ai-governance",
    type: "Conference",
    date: "June 15-16, 2023",
    location: "Washington DC Convention Center",
    locationIsVirtual: false,
    imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: true,
    description: "Exploring the future of AI regulation and ethical governance frameworks with leading experts from academia, industry, and government.",
    registrationUrl: "https://example.com/register/ai-governance"
  },
  {
    id: "2",
    title: "Data-Driven Policy Development",
    slug: "data-workshop",
    type: "Workshop",
    date: "July 8, 2023",
    location: "Boston University",
    locationIsVirtual: false,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: true,
    description: "Hands-on workshop on using data analytics for effective policy creation and implementation in the public sector.",
    registrationUrl: "https://example.com/register/data-workshop"
  },
  {
    id: "3",
    title: "Sustainable Development Goals Progress",
    slug: "sustainability-webinar",
    type: "Webinar",
    date: "August 3, 2023",
    location: "Virtual (Zoom)",
    locationIsVirtual: true,
    imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: true,
    description: "Analysis of current progress and policy recommendations for SDG achievement across developed and developing nations.",
    registrationUrl: "https://example.com/register/sdg-webinar"
  },
  {
    id: "4",
    title: "Urban Resilience Strategy Forum",
    slug: "urban-resilience",
    type: "Forum",
    date: "September 20-21, 2023",
    location: "New York City Hall",
    locationIsVirtual: false,
    imageUrl: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: false,
    description: "City leaders and planners discuss strategies for adapting urban areas to climate change and other emergent challenges.",
    registrationUrl: "https://example.com/register/urban-forum"
  },
  {
    id: "5",
    title: "Healthcare Innovation Roundtable",
    slug: "healthcare-roundtable",
    type: "Roundtable",
    date: "October 12, 2023",
    location: "Chicago Medical Center",
    locationIsVirtual: false,
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: false,
    description: "Bringing together healthcare providers, policymakers, and innovators to identify opportunities for healthcare delivery improvement.",
    registrationUrl: "https://example.com/register/healthcare-roundtable"
  },
  {
    id: "6",
    title: "Digital Inclusion Policy Webinar",
    slug: "digital-inclusion",
    type: "Webinar",
    date: "November 5, 2023",
    location: "Virtual (Microsoft Teams)",
    locationIsVirtual: true,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: false,
    description: "Examining strategies to close the digital divide and ensure equitable access to technology and internet services.",
    registrationUrl: "https://example.com/register/digital-inclusion"
  },
];

// Get all unique event types
const eventTypes = Array.from(new Set(events.map(event => event.type)));

// Get upcoming events (in this case, we'll fake it by just using the first 3)
const upcomingEvents = events.slice(0, 3);

// Get past events (in this case, we'll fake it by just using the rest)
const pastEvents = events.slice(3);

export default async function EventsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Events & Webinars"
        description="Join us for thought-provoking discussions, practical workshops, and networking opportunities with fellow policy professionals."
        background="gradient"
        size="lg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
        actions={
          <>
            <PageHeaderAction asChild>
              <Link href="#upcoming">Upcoming events</Link>
            </PageHeaderAction>
            <PageHeaderAction variant="outline" asChild>
              <Link href="/events/calendar">View calendar</Link>
            </PageHeaderAction>
          </>
        }
      />

      {/* Featured Event Banner */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container px-4">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                alt="AI Governance Conference" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
              <div className="max-w-2xl">
                <Badge className="mb-4 bg-white/20 text-white border-none animate-fade-in">Featured Event</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in animation-delay-300">AI Governance and Policy Conference</h2>
                <p className="text-white/90 text-lg mb-6 animate-fade-in animation-delay-500">
                  Join leading policymakers, researchers, and industry experts for a two-day conference 
                  on the future of AI governance and regulation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 animate-fade-in animation-delay-700">
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2 text-white/80" />
                    <span>June 15-16, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-white/80" />
                    <span>Washington DC Convention Center</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-1000">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Register now
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-16 bg-white dark:bg-slate-900 scroll-mt-20">
        <div className="container px-4">
          <SectionHeader 
            title="Upcoming Events" 
            subtitle="Join us at our upcoming events and connect with policy experts and practitioners"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id}
                className={`border-none shadow-md group overflow-hidden hover-lift animate-fade-in ${getStaggeredAnimationDelay(index)}`}
              >
                <div className="relative h-48">
                  <Image 
                    src={event.imageUrl} 
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <Badge variant="secondary" className="bg-primary text-white border-none">{event.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/events/${event.slug}`} className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                      {event.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-col space-y-2 text-sm mb-4">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      {event.locationIsVirtual ? (
                        <Globe2 className="h-4 w-4 mr-2 text-primary" />
                      ) : (
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                      )}
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button asChild variant="outline" size="sm" className="text-sm">
                      <Link href={event.registrationUrl}>
                        Register
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="text-sm">
                      <Link href={`/events/${event.slug}`} className="flex items-center">
                        Details
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800 bg-grid">
        <div className="container px-4">
          <SectionHeader 
            title="Event Calendar" 
            subtitle="Browse all upcoming and past events by type"
            align="left"
          />

          <Tabs defaultValue="all" className="w-full mt-8">
            <TabsList className="flex flex-wrap mb-8 bg-transparent h-auto">
              <TabsTrigger value="all" className="mb-2 mr-2 data-[state=active]:bg-primary data-[state=active]:text-white">
                All Events
              </TabsTrigger>
              {eventTypes.map(type => (
                <TabsTrigger 
                  key={type} 
                  value={type.toLowerCase()} 
                  className="mb-2 mr-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">All Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.map((event, index) => (
                    <Card 
                      key={event.id}
                      className={`border border-slate-200 dark:border-slate-700 animate-fade-in ${getStaggeredAnimationDelay(index)}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-3">
                          <Badge variant="secondary">{event.type}</Badge>
                          <span className="text-sm text-primary font-medium">{event.date}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">
                          <Link href={`/events/${event.slug}`} className="hover:text-primary">
                            {event.title}
                          </Link>
                        </h3>
                        <div className="flex items-center text-sm text-slate-500 mb-4">
                          {event.locationIsVirtual ? (
                            <Globe2 className="h-4 w-4 mr-2 text-primary/70" />
                          ) : (
                            <MapPin className="h-4 w-4 mr-2 text-primary/70" />
                          )}
                          <span>{event.location}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button asChild variant="outline" size="sm" className="text-sm">
                            <Link href={event.registrationUrl}>
                              Register
                            </Link>
                          </Button>
                          <Button asChild variant="ghost" size="sm" className="text-sm">
                            <Link href={`/events/${event.slug}`} className="flex items-center">
                              Details
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {eventTypes.map(type => (
              <TabsContent key={type} value={type.toLowerCase()} className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">{type} Events</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events
                      .filter(event => event.type === type)
                      .map((event, index) => (
                        <Card 
                          key={event.id}
                          className={`border border-slate-200 dark:border-slate-700 animate-fade-in ${getStaggeredAnimationDelay(index)}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between mb-3">
                              <Badge variant="secondary">{event.type}</Badge>
                              <span className="text-sm text-primary font-medium">{event.date}</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 line-clamp-2">
                              <Link href={`/events/${event.slug}`} className="hover:text-primary">
                                {event.title}
                              </Link>
                            </h3>
                            <div className="flex items-center text-sm text-slate-500 mb-4">
                              {event.locationIsVirtual ? (
                                <Globe2 className="h-4 w-4 mr-2 text-primary/70" />
                              ) : (
                                <MapPin className="h-4 w-4 mr-2 text-primary/70" />
                              )}
                              <span>{event.location}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <Button asChild variant="outline" size="sm" className="text-sm">
                                <Link href={event.registrationUrl}>
                                  Register
                                </Link>
                              </Button>
                              <Button asChild variant="ghost" size="sm" className="text-sm">
                                <Link href={`/events/${event.slug}`} className="flex items-center">
                                  Details
                                  <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Host Your Own Event */}
      <section className="py-16 bg-primary/10 dark:bg-primary/5">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 animate-fade-in">
              <Image 
                src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                alt="Host your own event with us" 
                width={600} 
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <SectionHeader 
                title="Host Your Event With Us" 
                subtitle="Partner with PolicyLab to organize workshops, panels, or conferences that align with our mission"
                align="left"
                withAccent={true}
              />
              
              <div className="mt-6 space-y-4 animate-fade-in animation-delay-300">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Expert Network</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Access our network of policy experts, researchers, and practitioners for your event
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Venue Support</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Help with venue selection, hybrid format setup, and logistics management
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Promotional Reach</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Benefit from our promotional channels and audience engagement strategies
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 animate-fade-in animation-delay-700" asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 