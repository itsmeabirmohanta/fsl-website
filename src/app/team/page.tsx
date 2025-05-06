import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mail, Twitter, Linkedin, Users2, BookOpen, Globe2, Target, Search, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Team | Future Shift Labs',
  description: 'Meet our diverse team of experts and researchers dedicated to shaping innovative policy solutions and advocating for responsible AI development.',
};

export default function TeamPage() {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      bio: 'Former policy advisor with 15+ years experience in public policy and research leadership.',
      socialLinks: [
        { icon: Twitter, href: 'https://twitter.com/drsarahchen', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com/in/drsarahchen', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:sarah@futureshiftlabs.org', label: 'Email' },
      ],
      expertise: ['AI Policy', 'Research Leadership', 'Strategic Planning'],
    },
    {
      name: 'Prof. Michael Rivera',
      role: 'Research Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      bio: 'Leading expert in education policy with extensive experience in policy implementation.',
      socialLinks: [
        { icon: Twitter, href: 'https://twitter.com/profrivera', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com/in/profrivera', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:michael@futureshiftlabs.org', label: 'Email' },
      ],
      expertise: ['Education Policy', 'Policy Implementation', 'Academic Research'],
    },
    {
      name: 'Dr. Emma Thompson',
      role: 'Policy Director',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      bio: 'Specializes in environmental policy with a focus on climate change initiatives.',
      socialLinks: [
        { icon: Twitter, href: 'https://twitter.com/dremmathompson', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com/in/dremmathompson', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:emma@futureshiftlabs.org', label: 'Email' },
      ],
      expertise: ['Environmental Policy', 'Climate Initiatives', 'Sustainable Development'],
    },
  ];

  const departments = [
    {
      name: 'Research',
      icon: BookOpen,
      count: 15,
      description: 'Our research team conducts rigorous analysis and produces evidence-based policy recommendations.',
      color: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Policy',
      icon: Target,
      count: 12,
      description: 'The policy team works directly with stakeholders to implement effective policy solutions.',
      color: 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400',
    },
    {
      name: 'Global Affairs',
      icon: Globe2,
      count: 8,
      description: 'Our international team coordinates with global partners and analyzes international policy trends.',
      color: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
    },
    {
      name: 'Operations',
      icon: Users2,
      count: 10,
      description: 'The operations team ensures smooth functioning of our organization and initiatives.',
      color: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
    },
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Senior Researcher',
      department: 'Research',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['AI Ethics', 'Data Privacy'],
    },
    {
      name: 'Maria Garcia',
      role: 'Policy Analyst',
      department: 'Policy',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['Economic Policy', 'Equity'],
    },
    {
      name: 'David Chen',
      role: 'Global Affairs Specialist',
      department: 'Global Affairs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['International Relations', 'Diplomacy'],
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      department: 'Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['Project Management', 'Strategic Planning'],
    },
    {
      name: 'James Wilson',
      role: 'Research Fellow',
      department: 'Research',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['Machine Learning', 'Policy Research'],
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Communications Specialist',
      department: 'Policy',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['Public Relations', 'Media Strategy'],
    },
    {
      name: 'Raj Patel',
      role: 'International Liaison',
      department: 'Global Affairs',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['Global Partnerships', 'Cross-cultural Communication'],
    },
    {
      name: 'Hannah Kim',
      role: 'Finance Manager',
      department: 'Operations',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      expertise: ['Budget Management', 'Financial Strategy'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
            <div className="inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
              <Users2 className="mr-2 h-4 w-4 text-primary" />
              Meet Our Team
            </div>
            <h1 className="mb-6 mt-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in">
              The Minds Behind{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Future Shift Labs
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 w-full bg-primary/10" />
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground animate-slide-in-bottom">
              Our diverse team of researchers, policy experts, and analysts work together to create
              innovative solutions for a sustainable and equitable future powered by responsible AI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group animate-slide-in-bottom animation-delay-500">
                <a href="#leadership">Leadership Team</a>
              </Button>
              <Button size="lg" variant="outline" className="group animate-slide-in-bottom animation-delay-1000">
                <a href="#join">Join Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Leadership Team" 
            subtitle="Meet the experienced leaders guiding our mission and driving our vision forward"
            animated={true}
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {leadership.map((leader, index) => (
              <Card 
                key={leader.name} 
                className={cn(
                  "group overflow-hidden p-6 transition-all duration-300 hover:shadow-xl border-primary/10",
                  "animate-fade-in",
                  index === 0 ? "animation-delay-500" : 
                  index === 1 ? "animation-delay-1000" : 
                  "animation-delay-1500"
                )}
              >
                <div className="relative mb-6 aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="mb-1 text-2xl font-semibold">{leader.name}</h3>
                <p className="mb-4 text-sm font-medium text-primary">{leader.role}</p>
                <p className="mb-4 text-muted-foreground">{leader.bio}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map(skill => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {leader.socialLinks.map(link => (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <link.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="border-y bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Departments" 
            subtitle="Specialized teams working together to drive policy innovation and implementation"
            animated={true}
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
            {departments.map((dept, index) => (
              <Card 
                key={dept.name} 
                className={cn(
                  "group relative overflow-hidden p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30",
                  "animate-fade-in",
                  index === 0 ? "animation-delay-500" : 
                  index === 1 ? "animation-delay-700" : 
                  index === 2 ? "animation-delay-900" : 
                  "animation-delay-1100"
                )}
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className={cn(
                    "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl",
                    dept.color || "bg-primary/10 text-primary"
                  )}>
                    <dept.icon className="h-7 w-7" />
                  </div>
                  <div className="mb-2 text-3xl font-bold">{dept.count}</div>
                  <h3 className="mb-2 text-xl font-semibold">{dept.name}</h3>
                  <p className="text-muted-foreground">{dept.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section with Filtering */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Meet Our Team" 
            subtitle="Our talented experts bring diverse perspectives to address complex policy challenges"
            animated={true}
          />
          
          <div className="flex justify-center mb-10 mt-10 overflow-x-auto py-2">
            <div className="flex gap-2 px-4">
              <Button variant="default" className="rounded-full">All Teams</Button>
              {departments.map(dept => (
                <Button key={dept.name} variant="outline" className="rounded-full whitespace-nowrap">
                  {dept.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={cn(
                  "group text-center animate-fade-in",
                  index % 4 === 0 ? "animation-delay-500" : 
                  index % 4 === 1 ? "animation-delay-700" : 
                  index % 4 === 2 ? "animation-delay-900" : 
                  "animation-delay-1100"
                )}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center p-4">
                    <div className="flex gap-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button size="sm" variant="white-outline" className="rounded-full">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="white-outline" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="mb-1 font-medium text-base">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <Badge variant="outline" className="text-xs font-normal">
                  {member.department}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="border-t bg-primary text-primary-foreground py-24 scroll-mt-24">
        <div className="container mx-auto px-4 text-center relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 text-3xl font-bold">Join Our Team</h2>
            <p className="mx-auto mb-8 text-xl text-primary-foreground/80">
              We're looking for talented individuals passionate about making a difference through policy research and advocacy for responsible AI.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Research Associate</h3>
                  <p className="text-sm mb-4 text-white/80">Join our research team to explore cutting-edge policy solutions.</p>
                  <Button size="sm" variant="white" className="w-full">
                    <span>View Position</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Policy Analyst</h3>
                  <p className="text-sm mb-4 text-white/80">Help shape evidence-based policy recommendations.</p>
                  <Button size="sm" variant="white" className="w-full">
                    <span>View Position</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white sm:col-span-2 md:col-span-1">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Communications Specialist</h3>
                  <p className="text-sm mb-4 text-white/80">Share our vision through compelling content and media.</p>
                  <Button size="sm" variant="white" className="w-full">
                    <span>View Position</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              variant="white"
              className="group rounded-md"
            >
              <span>View All Open Positions</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 