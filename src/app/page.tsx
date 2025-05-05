'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CalendarDays, Clock, FileText, Globe2, Lightbulb, MapPin, Target, Users2, BookOpen, BarChart3, ExternalLink, Shield, Vote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { FloatingCard } from '@/components/FloatingCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';

const featuredResearch = [
  {
    title: 'The Pervasive Influence of AI on Global Political Campaigns 2024',
    description: 'Analysis of AI\'s dual role in enhancing voter outreach while enabling disinformation across 74 global elections.',
    category: 'AI Governance',
    date: 'April 2025',
  },
  {
    title: 'Global Elections & AI Tracker',
    description: 'Pioneering digital tool offering real-time AI monitoring across electoral landscapes with disinformation detection matrix.',
    category: 'Democracy',
    date: 'March 2025',
  },
  {
    title: 'AI and Child Rights: Governance Frameworks',
    description: 'Examining algorithmic exploitation risks, deepfake threats to child safety, and designing child-first AI governance models.',
    category: 'Ethics',
    date: 'February 2025',
  },
];

const upcomingEvents = [
  {
    title: 'Shift the Future Lecture Series',
    date: 'Summer 2025',
    location: 'Multiple Venues',
    type: 'Lecture Series',
  },
  {
    title: 'Beyond AI Café - Episode 3',
    date: 'June 15, 2025',
    location: 'New Delhi, India',
    type: 'Discussion Forum',
  },
  {
    title: 'Digital Defenders Workshop',
    date: 'July 8, 2025',
    location: 'Tbilisi, Georgia',
    type: 'Training Workshop',
  },
];

const impactAreas = [
  {
    title: 'Research & Policy Innovation',
    description: 'Producing bold, actionable insights to shape the next era of AI governance',
    icon: BookOpen,
    href: '/services/research',
  },
  {
    title: 'Cybersecurity Readiness',
    description: 'Training frontline defenders to tackle emerging digital threats and deepfake risks',
    icon: Shield,
    href: '/services/cybersecurity',
  },
  {
    title: 'Global Collaboration',
    description: 'Partnering with leading universities, civil society networks, and international organizations',
    icon: Globe2,
    href: '/services/global-collaboration',
  },
  {
    title: 'Community Empowerment',
    description: 'Building grassroots capacity through workshops, leadership dialogues, and civic tech initiatives',
    icon: Users2,
    href: '/services/community',
  },
  {
    title: 'Tools for Democracy',
    description: 'Creating pioneering platforms like the Global Elections & AI Tracker to safeguard electoral integrity',
    icon: Vote,
    href: '/services/democracy-tools',
  },
];

const partners = [
  { name: 'British University Georgia', logo: '/images/partner-logo-1.png' },
  { name: 'Political Tech Summit', logo: '/images/partner-logo-2.png' },
  { name: 'Oxford Internet Institute', logo: '/images/partner-logo-3.png' },
  { name: 'CEE Digital Democracy Watch', logo: '/images/partner-logo-4.png' },
  { name: 'UP Police', logo: '/images/partner-logo-5.png' },
  { name: 'Core-AI', logo: '/images/partner-logo-6.png' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center">
        {/* Video Background - Full coverage with no top margin/padding */}
        <div className="absolute inset-0 z-0 top-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/file.mp4" type="video/mp4" />
          </video>
          {/* Overlay adjusted for better visibility against the video */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content container with proper spacing */}
        <div className="container mx-auto px-4 relative z-10 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Column - Text moved to align with screenshot */}
            <div className="lg:col-span-7 space-y-8 max-w-3xl mx-auto lg:mx-0 pt-12">
              <Badge className="inline-flex px-4 py-1.5 text-sm font-medium bg-primary/30 text-white backdrop-blur-sm border border-primary/20 rounded-full animate-slide-in-bottom">
                Where AI, Democracy & Ethics Converge
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in text-white">
                <span className="relative inline-block mb-2">
                  <span className="relative z-10">Future</span>
                  <div className="absolute bottom-2 left-0 right-0 h-4 w-full bg-primary/30 rounded-full transform skew-x-3"></div>
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Shift</span>
                  <div className="absolute bottom-2 left-0 right-0 h-4 w-full bg-primary/30 rounded-full transform -skew-x-3"></div>
                </span>{" "}
                <span className="text-blue-500">Labs</span>
              </h1>
                
              <p className="text-xl text-white/90 leading-relaxed max-w-xl animate-fade-in animation-delay-300">
                A global think tank operating at the frontier where AI, democracy, cybersecurity, ethics, and innovation converge to design a human-centered, just, and resilient future.
              </p>
                
              <div className="flex flex-wrap gap-5 pt-4 animate-fade-in animation-delay-500">
                <Button asChild size="lg" className="relative overflow-hidden group rounded-full shadow-lg shadow-primary/40 bg-blue-600 hover:bg-blue-700">
                  <Link href="/research">
                    <span className="relative z-10">Explore AI Governance</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white hover:shadow-md transition-all duration-300">
                  <Link href="/contact" className="flex items-center">
                    Get involved
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              <div className="pt-6 flex items-center gap-6 animate-fade-in animation-delay-700">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm shadow-lg transform transition-transform hover:scale-110 hover:z-10">BU</div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium text-sm shadow-lg transform transition-transform hover:scale-110 hover:z-10">PTS</div>
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium text-sm shadow-lg transform transition-transform hover:scale-110 hover:z-10">OII</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 text-white flex items-center justify-center text-sm font-medium shadow-lg transform transition-transform hover:scale-110 hover:z-10">+15</div>
                </div>
                <p className="text-sm text-white/80">Partnered with leading institutions worldwide</p>
              </div>
            </div>
                
            {/* Floating Cards Column - Adjusted to match screenshot */}
            <div className="lg:col-span-5 relative h-[300px] md:h-[400px] lg:h-[600px]">
              {/* Enhanced Floating Cards - Positioned to match screenshot */}
              <FloatingCard
                title="Research"
                subtitle="Global Elections & AI Tracker"
                icon={<FileText className="h-5 w-5 text-blue-400" />}
                className="absolute right-10 top-20 max-w-[280px] border border-blue-400/20 bg-black/40 shadow-xl backdrop-blur-md animate-slide-in-right z-30"
                href="/research/ai-tracker"
                animationDelay="animation-delay-1000"
                variant="glass"
                hoverEffect="glow"
              />
              
              <FloatingCard
                title="Initiative"
                subtitle="Digital Defenders"
                icon={<Users2 className="h-5 w-5 text-blue-400" />}
                className="absolute right-40 top-64 max-w-[280px] border border-blue-400/20 bg-black/40 shadow-xl backdrop-blur-md animate-slide-in-bottom z-20"
                href="/initiatives/digital-defenders"
                animationDelay="animation-delay-1500"
                variant="glass"
                hoverEffect="glow"
              />
              
              <FloatingCard
                title="Event"
                subtitle="Beyond AI Café"
                icon={<CalendarDays className="h-5 w-5 text-blue-400" />}
                className="absolute right-0 bottom-40 max-w-[280px] border border-blue-400/20 bg-black/40 shadow-xl backdrop-blur-md animate-slide-in-left z-10"
                href="/events/beyond-ai-cafe"
                animationDelay="animation-delay-2000"
                variant="glass"
                hoverEffect="glow"
              />
            </div>
          </div>
          
          {/* Elegant scroll indicator with chevron animation - Adjusted position */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity group cursor-pointer z-20"
            onClick={() => {
              // Smoothly scroll to the services section
              document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <span className="text-xs uppercase tracking-widest mb-3 text-white font-medium">DISCOVER</span>
            <div className="flex flex-col items-center">
              <div className="h-10 w-6 relative overflow-hidden">
                <div className="absolute inset-x-0 animate-slide-down animation-duration-2000 animation-infinite">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-blue-400 transition-colors">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-blue-400/70 transition-colors mt-1">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Using SectionHeader and ServiceCard */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Core Focus Areas"
            subtitle="Shaping a human-centered, just, and resilient future at the intersection of technology and society"
            animated={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={<service.icon className="h-8 w-8" />}
                href={service.href}
                animationDelay={`animation-delay-${index * 300}`}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 bg-grid">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Research"
            subtitle="Explore our latest research findings and policy recommendations"
            animated={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group hover-lift animate-fade-in">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="AI in Political Campaigns Research"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-black">AI Governance</Badge>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/research/ai-political-campaigns" className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                    The Pervasive Influence of AI on Global Political Campaigns
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Analysis of AI's dual role in enhancing voter outreach while enabling disinformation across 74 elections.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>7 min read</span>
                  </div>
                  <span className="text-primary font-medium">April 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group hover-lift animate-fade-in animation-delay-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="Global Elections & AI Tracker"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-black">Democracy</Badge>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/research/global-elections-tracker" className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                    Global Elections & AI Tracker
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Real-time monitoring of AI's influence in electoral processes across 74 global elections.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <span className="text-primary font-medium">March 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group hover-lift animate-fade-in animation-delay-500">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="AI and Child Rights Research"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-black">Ethics</Badge>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/research/ai-child-rights" className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                    AI and Child Rights: Governance Frameworks
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Examining algorithmic exploitation risks and designing child-first AI governance models.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6 min read</span>
                  </div>
                  <span className="text-primary font-medium">February 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center animate-fade-in animation-delay-700">
            <Button asChild variant="outline" className="group">
              <Link href="/research" className="flex items-center">
                View all research
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us for discussions, presentations, and networking opportunities"
            animated={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md group overflow-hidden hover-lift animate-fade-in">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="Shift the Future Lecture Series"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <Badge variant="secondary" className="bg-primary text-white border-none">Lecture Series</Badge>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/events/shift-future-lectures" className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                    Shift the Future Lecture Series
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Featuring world leaders like Audrey Tang, Kai-Fu Lee, and Nina Schick on AI's future.
                </p>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                    <span>Summer 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>Multiple Venues</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md group overflow-hidden hover-lift animate-fade-in animation-delay-300">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="Beyond AI Café"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <Badge variant="secondary" className="bg-primary text-white border-none">Discussion Forum</Badge>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/events/beyond-ai-cafe" className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                    Beyond AI Café - Episode 3
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  A movement sparking ethical tech conversations at the grassroots level.
                </p>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                    <span>June 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md group overflow-hidden hover-lift animate-fade-in animation-delay-500">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="Digital Defenders Workshop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <Badge variant="secondary" className="bg-primary text-white border-none">Training Workshop</Badge>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/events/digital-defenders" className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                    Digital Defenders Workshop
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Training on AI safety, cybersecurity basics, and responsible tech behavior.
                </p>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                    <span>July 8, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>Tbilisi, Georgia</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center animate-fade-in animation-delay-700">
            <Button asChild variant="outline" className="group">
              <Link href="/events" className="flex items-center">
                View all events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 bg-grid">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Partners"
            subtitle="Collaboration is at the heart of our approach to policy research"
            animated={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center justify-center p-4 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="h-20 w-44 bg-white dark:bg-slate-700 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/5 to-primary-foreground/0 bg-grid opacity-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">Stay Informed</h2>
            <p className="mb-8 text-white/80 animate-fade-in animation-delay-300">
              Subscribe to our newsletter for the latest research insights, policy updates, and event announcements
            </p>
            <div className="animate-fade-in animation-delay-500">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 