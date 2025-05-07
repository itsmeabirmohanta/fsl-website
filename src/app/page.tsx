'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CalendarDays, Clock, FileText, Globe2, Lightbulb, MapPin, Target, Users2, BookOpen, BarChart3, ExternalLink, Shield, Vote, Mail, User, Zap, Lock, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { FloatingCard } from '@/components/FloatingCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { EVENT_IMAGES } from '@/lib/constants/images';

const featuredResearch = [
  {
    title: "The Pervasive Influence of AI on Global Political Campaigns 2024",
    description: "Analysis of AI's dual role in enhancing voter outreach while enabling disinformation across 74 global elections.",
    category: "AI Governance",
    date: "April 2025",
  },
  {
    title: "Global Elections & AI Tracker",
    description: "Pioneering digital tool offering real-time AI monitoring across electoral landscapes with disinformation detection matrix.",
    category: "Democracy",
    date: "March 2025",
  },
  {
    title: "AI and Child Rights: Governance Frameworks",
    description: "Examining algorithmic exploitation risks, deepfake threats to child safety, and designing child-first AI governance models.",
    category: "Ethics",
    date: "February 2025",
  },
];

const upcomingEvents = [
  {
    id: 'shift-future-lectures',
    title: 'Shift the Future Lecture Series',
    date: 'Summer 2025',
    location: 'Multiple Venues',
    type: 'Lecture Series',
    description: 'A series of lectures featuring world leaders like Audrey Tang, Kai-Fu Lee, and Nina Schick on AI&apos;s future.',
    imageUrl: EVENT_IMAGES.LECTURE_SERIES,
  },
  {
    id: 'beyond-ai-cafe',
    title: 'Beyond AI Café - Episode 3',
    date: 'June 15, 2025',
    location: 'New Delhi, India',
    type: 'Discussion Forum',
    description: 'A movement sparking ethical tech conversations at the grassroots level.',
    imageUrl: EVENT_IMAGES.AI_CAFE,
  },
  {
    id: 'digital-defenders',
    title: 'Digital Defenders Workshop',
    date: 'July 8, 2025',
    location: 'Tbilisi, Georgia',
    type: 'Training Workshop',
    description: 'Training on AI safety, cybersecurity basics, and responsible tech behavior.',
    imageUrl: EVENT_IMAGES.DIGITAL_DEFENDERS,
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
  { 
    name: 'Oxford Internet Institute', 
    logo: '/images/partners/real/oii.svg',
    url: 'https://www.oii.ox.ac.uk/'
  },
  { 
    name: 'Alan Turing Institute', 
    logo: '/images/partners/real/turing.svg',
    url: 'https://www.turing.ac.uk/'
  },
  { 
    name: 'Stanford HAI', 
    logo: '/images/partners/real/stanford-hai.svg',
    url: 'https://hai.stanford.edu/'
  },
  { 
    name: 'Partnership on AI', 
    logo: '/images/partners/real/pai.svg',
    url: 'https://partnershiponai.org/'
  },
  { 
    name: 'AI Now Institute', 
    logo: '/images/partners/real/ai-now.svg',
    url: 'https://ainowinstitute.org/'
  },
  { 
    name: 'IEEE', 
    logo: '/images/partners/real/ieee.svg',
    url: 'https://www.ieee.org/'
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Schema.org structured data for better SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Future Shift Labs",
            "url": "https://futureshiftlabs.org",
            "logo": "https://futureshiftlabs.org/logo.png",
            "description": "A global think tank operating at the frontier where AI, democracy, cybersecurity, ethics, and innovation converge.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Global"
            },
            "sameAs": [
              "https://twitter.com/futureshiftlabs",
              "https://linkedin.com/company/futureshiftlabs"
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "AI Governance",
              "AI Ethics",
              "Technology Policy",
              "Digital Democracy"
            ],
            "foundingDate": "2024"
          })
        }}
      />

      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-[calc(100vh-64px)] md:min-h-screen overflow-hidden flex items-center mt-0">
        {/* Video Background - Absolutely positioned with no spacing */}
        <div className="absolute inset-0 z-0 top-0 left-0 right-0 bottom-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/file.mp4" type="video/mp4" />
          </video>
          {/* Video overlay for better text visibility - Reduced opacity and blur for higher video clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 z-0"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 md:pt-20 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Text Content - Spans 7 columns for more breathing room */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0">
              <Badge className="inline-flex px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium bg-primary/20 text-white backdrop-blur-sm border border-primary/20 rounded-full animate-slide-in-bottom">
                Where AI, Democracy & Ethics Converge
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-fade-in text-white">
                <span className="relative inline-block mb-2">
                  <span className="relative z-10">Future</span>
                  <div className="absolute bottom-2 left-0 right-0 h-3 md:h-4 w-full bg-primary/20 rounded-full transform skew-x-3"></div>
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Shift</span>
                  <div className="absolute bottom-2 left-0 right-0 h-3 md:h-4 w-full bg-primary/20 rounded-full transform -skew-x-3"></div>
                </span>{" "}
                <span className="text-gradient animate-shimmer bg-gradient-shimmer bg-clip-text text-transparent">Labs</span>
              </h1>
                
              <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-xl animate-fade-in animation-delay-300">
                A global think tank operating at the frontier where AI, democracy, cybersecurity, ethics, and innovation converge to design a human-centered, just, and resilient future.
              </p>
                
              <div className="flex flex-wrap gap-5 pt-4 animate-fade-in animation-delay-500">
                <Button asChild size="lg" className="relative overflow-hidden group rounded-full shadow-lg shadow-primary/20 bg-primary/90 hover:bg-primary">
                  <Link href="/research">
                    <span className="relative z-10">Explore AI Governance</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                </Button>
                <Button variant="white-outline" size="lg" className="group rounded-full border-2 border-white bg-white/10 text-white backdrop-blur-sm shadow-lg hover:bg-white hover:text-primary transition-all duration-300">
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
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center text-white text-sm font-medium shadow-lg transform transition-transform hover:scale-110 hover:z-10">+15</div>
                </div>
                <p className="text-sm text-white/80">Partnered with leading institutions worldwide</p>
              </div>
            </div>
                
            {/* Right Column - Redesigned Floating Cards - Spans 5 columns */}
            <div className="lg:col-span-5 relative h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Redesigned & Repositioned Floating Cards with consistent styling */}
              <div className="absolute right-0 top-[15%] w-[240px] md:w-[280px] transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl">
                <FloatingCard
                  title="Research"
                  subtitle="Global Elections & AI Tracker"
                  icon={<FileText className="h-5 w-5 text-white" />}
                  className="border border-white/20 shadow-xl backdrop-blur-md animate-slide-in-right"
                  href="/research/ai-tracker"
                  animationDelay="animation-delay-500"
                  variant="glass"
                  hoverEffect="glow"
                  animationStyle="float-3d"
                />
              </div>
              
              <div className="absolute right-[10%] md:right-[15%] top-[45%] w-[240px] md:w-[280px] transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl">
                <FloatingCard
                  title="Initiative"
                  subtitle="Digital Defenders"
                  icon={<Users2 className="h-5 w-5 text-white" />}
                  className="border border-white/20 shadow-xl backdrop-blur-md animate-slide-in-bottom"
                  href="/initiatives/digital-defenders"
                  animationDelay="animation-delay-700"
                  variant="glass"
                  hoverEffect="glow"
                  animationStyle="float-3d"
                />
              </div>
              
              <div className="absolute right-0 bottom-[15%] w-[240px] md:w-[280px] transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl">
                <FloatingCard
                  title="Event"
                  subtitle="Beyond AI Café"
                  icon={<CalendarDays className="h-5 w-5 text-white" />}
                  className="border border-white/20 shadow-xl backdrop-blur-md animate-slide-in-right"
                  href="/events/beyond-ai-cafe" 
                  animationDelay="animation-delay-900"
                  variant="glass"
                  hoverEffect="glow"
                  animationStyle="float-3d"
                />
              </div>
              
              <div className="absolute right-[15%] md:right-[20%] bottom-[40%] w-[240px] md:w-[280px] transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl">
                <FloatingCard
                  title="Policy"
                  subtitle="AI Governance Framework"
                  icon={<Target className="h-5 w-5 text-white" />}
                  className="border border-white/20 shadow-xl backdrop-blur-md animate-slide-in-bottom"
                  href="/policy/ai-governance"
                  animationDelay="animation-delay-1100"
                  variant="glass"
                  hoverEffect="glow"
                  animationStyle="float-3d"
                />
              </div>
            </div>
          </div>
          
          {/* Elegant scroll indicator with chevron animation */}
          <div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity group cursor-pointer"
            onClick={() => {
              // Smoothly scroll to the services section
              document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <span className="text-xs uppercase tracking-widest mb-3 text-white font-medium">Discover</span>
            <div className="flex flex-col items-center">
              <div className="h-10 w-6 relative overflow-hidden">
                <div className="absolute inset-x-0 animate-slide-down animation-duration-2000 animation-infinite">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-white/80 transition-colors">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-white/30 transition-colors mt-1">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.title} className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 100 + 300}ms` }}>
                <div className="relative h-48">
                  {event.imageUrl && (
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge variant="outline" className="bg-white/90 dark:bg-slate-800/90 text-xs font-medium mb-2">
                      {event.type}
                    </Badge>
                    <h3 className="text-white font-bold text-lg">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{event.description}</p>
                  <div className="flex flex-col space-y-2 mb-5 text-sm">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/events#${event.id}`}>
                        <FileText className="mr-1 h-4 w-4" />
                        Details
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/registration?event=${event.id}`}>
                        <Users2 className="mr-1 h-4 w-4" />
                        Register
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Newsletter section with captivating design */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-16 md:py-24 overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[10%] w-24 h-24 rounded-full bg-white/5 animate-float-3d"></div>
          <div className="absolute top-[60%] left-[20%] w-32 h-32 rounded-full bg-white/5 animate-float-3d animation-delay-1000"></div>
          <div className="absolute top-[30%] right-[15%] w-40 h-40 rounded-full bg-white/5 animate-float-3d animation-delay-2000"></div>
          <div className="absolute bottom-[20%] right-[30%] w-20 h-20 rounded-full bg-white/5 animate-pulse-slow"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-[10%] right-[10%] w-40 h-1 bg-gradient-to-r from-blue-400/40 to-transparent rotate-45"></div>
          <div className="absolute bottom-[15%] left-[5%] w-64 h-1 bg-gradient-to-r from-transparent to-indigo-400/40 -rotate-45"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="lg:flex items-center gap-12 justify-between">
            {/* Left column - Text content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white mb-6 animate-fade-in">
                <Mail className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Join 10,000+ subscribers
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
                Stay at the Forefront of <span className="relative inline-block">
                  <span className="relative z-10">AI Policy</span>
                  <div className="absolute bottom-2 left-0 right-0 h-2 md:h-3 w-full bg-primary/30 rounded-full transform -skew-x-3"></div>
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-lg animate-fade-in animation-delay-300">
                Get exclusive insights, early access to research papers, and invitations to special events. Our newsletter is trusted by policymakers, researchers, and industry leaders.
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8 md:grid-cols-3">
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 animate-fade-in animation-delay-500 hover:bg-white/20 transition-colors duration-300">
                  <CalendarDays className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mb-1 md:mb-2" />
                  <span className="text-white text-xs md:text-sm text-center">Bi-weekly Updates</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 animate-fade-in animation-delay-700 hover:bg-white/20 transition-colors duration-300">
                  <FileText className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mb-1 md:mb-2" />
                  <span className="text-white text-xs md:text-sm text-center">Research Summaries</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 animate-fade-in animation-delay-900 hover:bg-white/20 transition-colors duration-300">
                  <Zap className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mb-1 md:mb-2" />
                  <span className="text-white text-xs md:text-sm text-center">Exclusive Content</span>
                </div>
              </div>
              
              {/* Social proof */}
              <div className="flex items-center animate-fade-in animation-delay-1100">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-blue-800 bg-blue-100 flex items-center justify-center text-blue-800 text-xs font-bold">UN</div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-blue-800 bg-green-100 flex items-center justify-center text-blue-800 text-xs font-bold">O</div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-blue-800 bg-yellow-100 flex items-center justify-center text-blue-800 text-xs font-bold">M</div>
                </div>
                <span className="text-white/80 text-xs md:text-sm">Trusted by experts from global organizations</span>
              </div>
            </div>
            
            {/* Right column - Newsletter and preview */}
            <div className="lg:w-1/2 lg:pl-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10 animate-fade-in animation-delay-500">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-white/70 mb-6 text-sm md:text-base">Join our community of policymakers, researchers, and tech leaders receiving regular insights on AI governance.</p>
                
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-4 py-2 md:py-3 transition-colors duration-300 text-sm md:text-base">
                    Subscribe Now
                  </button>
                </div>
                  <p className="text-xs text-white/50 text-center pt-2">We respect your privacy. Unsubscribe at any time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section with Logo Carousel */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-slate-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Our Partners"
            subtitle="Collaborating with leading organizations driving AI innovation and ethics"
            animated={true}
          />
          
          <div className="mb-8 md:mb-12 max-w-3xl mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-300 animate-fade-in animation-delay-500 text-sm md:text-base">
              We work with prestigious research institutions and organizations worldwide to ensure our 
              policy recommendations have meaningful impact and are grounded in cutting-edge research.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-16 w-full mb-4 overflow-hidden">
                  <Image 
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%'
                    }}
                    className="transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // If image fails to load, show partner name as fallback
                      e.currentTarget.style.display = 'none';
                      // Find the parent and add a class to style text fallback
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center');
                        parent.innerHTML = `<span class="text-primary font-semibold text-center">${partner.name}</span>`;
                      }
                    }}
                  />
                </div>
                <span className="text-center text-sm font-medium text-slate-600 dark:text-slate-300">
                  {partner.name}
                </span>
                <div className="mt-2 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Visit site</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group rounded-lg animate-fade-in animation-delay-1000 shadow-sm"
              asChild
            >
              <Link href="/about#partners">
                Explore All Partnerships
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 