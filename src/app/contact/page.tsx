import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Globe, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | Future Shift Labs',
  description: 'Get in touch with our team for research collaborations, policy inquiries, or partnership opportunities.',
};

export default async function ContactPage() {
  const offices = [
    {
      city: 'New Delhi HQ',
      address: '123 Innovation Avenue, New Delhi 110001',
      phone: '+91 11 2345 6789',
      email: 'info@futureshiftlabs.org',
      hours: 'Mon-Fri: 10:00 AM - 6:30 PM IST',
      image: 'https://images.unsplash.com/photo-1564769610726-59cead6a6f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      mapLink: 'https://maps.google.com/?q=New+Delhi+India',
    },
    {
      city: 'Bengaluru',
      address: '45 Tech Park, Whitefield, Bengaluru 560066',
      phone: '+91 80 2345 6789',
      email: 'bangalore@futureshiftlabs.org',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST',
      image: 'https://images.unsplash.com/photo-1599066618764-ada5a0b8b94d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      mapLink: 'https://maps.google.com/?q=Bengaluru+India',
    },
  ];

  const contactCategories = [
    {
      title: 'Research Collaboration',
      description: 'Partner with us on AI policy research and responsible development initiatives.',
      icon: Globe,
      email: 'research@futureshiftlabs.org',
      color: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Policy Consulting',
      description: 'Get expert guidance on AI governance frameworks and implementation strategies.',
      icon: CheckCircle,
      email: 'consulting@futureshiftlabs.org',
      color: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
    },
    {
      title: 'Media Inquiries',
      description: 'Request interviews or expert commentary on AI policy developments.',
      icon: Mail,
      email: 'media@futureshiftlabs.org',
      color: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
    },
    {
      title: 'General Inquiries',
      description: 'Questions about our work or potential collaborations and partnerships.',
      icon: Phone,
      email: 'info@futureshiftlabs.org',
      color: 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400',
    },
  ];

  const faqs = [
    {
      question: "How can I partner with Future Shift Labs?",
      answer: "We welcome partnerships with academic institutions, government bodies, nonprofits, and private organizations committed to responsible AI development. Email us at partnerships@futureshiftlabs.org with details about your organization and potential collaboration areas."
    },
    {
      question: "Do you offer speaking engagements?",
      answer: "Yes, our experts are available for speaking engagements at conferences, workshops, and other events related to AI policy and governance. Please contact us at speakers@futureshiftlabs.org with event details."
    },
    {
      question: "How can I stay updated on your research?",
      answer: "Subscribe to our newsletter at the bottom of our homepage, follow us on social media, or check our Research page regularly for the latest publications and insights."
    },
    {
      question: "Are you hiring?",
      answer: "We're always looking for talented individuals passionate about responsible AI. Visit our Careers page for current openings or send your resume to careers@futureshiftlabs.org."
    }
  ];

  return (
    <>
      {/* Hero Section with Background Pattern */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex min-h-[40vh] flex-col items-center justify-center py-20 text-center">
            <Badge variant="outline" className="mb-4 animate-fade-in bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
              Let's Connect
            </Badge>
            <h1 className="mb-6 mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in">
              Let&apos;s Shape the{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Future of AI Together
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 w-full bg-primary/10" />
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground animate-fade-in animation-delay-300">
              Whether you're interested in research collaboration, policy consulting, or just want to learn more
              about our work in responsible AI development, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Animated Elements */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -z-10 animate-float animation-delay-2000"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Get in Touch" 
            subtitle="We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
            animated={true}
          />
          
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 mt-12">
            {/* Form */}
            <Card className="p-8 shadow-lg border-primary/10 hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <h2 className="mb-2 text-2xl font-bold">Send us a Message</h2>
              <p className="mb-6 text-muted-foreground">
                Your inquiry will be directed to the most appropriate team member.
              </p>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <Input id="firstName" placeholder="John" className="focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <Input id="lastName" placeholder="Doe" className="focus-visible:ring-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="focus-visible:ring-primary" />
                </div>
                <div>
                  <label htmlFor="organization" className="mb-2 block text-sm font-medium">
                    Organization
                  </label>
                  <Input id="organization" placeholder="Your organization" className="focus-visible:ring-primary" />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <Input id="subject" placeholder="How can we help?" className="focus-visible:ring-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className="focus-visible:ring-primary"
                  />
                </div>
                <Button size="lg" className="w-full relative overflow-hidden group">
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  We'll respond to your inquiry within 48 hours.
                </p>
              </form>
            </Card>

            {/* Contact Categories */}
            <div className="space-y-6 animate-fade-in animation-delay-500">
              <h2 className="text-2xl font-bold mb-6">Direct Contacts</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactCategories.map((category, index) => (
                  <Card 
                    key={category.title} 
                    className={cn(
                      "group overflow-hidden p-6 transition-all duration-300 hover:shadow-xl",
                      index % 2 === 0 ? "animation-delay-700" : "animation-delay-1000"
                    )}
                  >
                    <div className={cn(
                      "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                      category.color || "bg-primary/10 text-primary"
                    )}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                    <p className="mb-4 text-muted-foreground text-sm">{category.description}</p>
                    <Button variant="outline" className="w-full group" asChild>
                      <Link href={`mailto:${category.email}`} className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{category.email}</span>
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
              
              <Card className="p-6 mt-8 bg-primary/5 animate-fade-in animation-delay-1500">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Need Urgent Assistance?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  For immediate support or urgent inquiries, please call our main office at:
                </p>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="tel:+91-11-2345-6789" className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91 11 2345 6789</span>
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="border-t border-b bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Offices" 
            subtitle="Visit us at one of our locations or reach out through our local contacts"
            animated={true}
          />
          
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {offices.map((office, index) => (
              <Card 
                key={office.city} 
                className={cn(
                  "group overflow-hidden animate-fade-in", 
                  index === 0 ? "animation-delay-500" : "animation-delay-1000"
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={office.image || "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"}
                    alt={office.city + " office"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{office.city}</h3>
                      <p className="text-white/80 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{office.address}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      {office.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      {office.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {office.hours}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full group" asChild>
                    <Link href={office.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>View on Map</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find quick answers to common inquiries about our work and collaboration opportunities"
            animated={true}
          />
          
          <div className="mx-auto max-w-4xl mt-12 grid gap-6 animate-fade-in animation-delay-500">
            {faqs.map((faq, index) => (
              <Card 
                key={faq.question} 
                className={cn(
                  "p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30",
                  index % 2 === 0 ? "animation-delay-700" : "animation-delay-1000"
                )}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
            
            <Card className="p-6 mt-4 text-center bg-muted/30 animate-fade-in animation-delay-1500">
              <p className="mb-4">Don't see your question here?</p>
              <Button asChild>
                <a href="#top">Contact Us Directly</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold animate-fade-in">Connect With Us</h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80 animate-fade-in animation-delay-300">
            Follow us on social media to stay updated with our latest research, events, and policy insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
            <Button size="lg" variant="white" className="rounded-md" asChild>
              <Link href="https://twitter.com/futureshiftlabs">
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Link>
            </Button>
            <Button size="lg" variant="white" className="rounded-md" asChild>
              <Link href="https://linkedin.com/company/futureshiftlabs">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="white" className="rounded-md" asChild>
              <Link href="https://futureshiftlabs.org">
                <Globe className="mr-2 h-5 w-5" />
                Website
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 