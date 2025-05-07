'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { 
  Users2, 
  Lightbulb, 
  BookOpen, 
  Scale,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { ORGANIZATION_IMAGES, PROFILE_IMAGES } from '@/lib/constants/images';

export const metadata: Metadata = {
  title: 'About Us | Future Shift Labs',
  description: 'Our journey, mission, and team. Future Shift Labs is a global think tank at the frontier where AI, democracy, cybersecurity, ethics, and innovation converge.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Open Research',
      description: 'We foster intellectual imagination and thoroughness, embracing diverse perspectives to create breakthrough solutions.',
      icon: BookOpen,
      bgColor: 'bg-blue-50 dark:bg-blue-950/40',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Diverse & Inclusive',
      description: 'We cultivate an environment where everyone feels welcomed, respected, and heard, ensuring our research is accessible and equitable.',
      icon: Users2,
      bgColor: 'bg-purple-50 dark:bg-purple-950/40',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Human-Centered Innovation',
      description: 'We place people at the heart of AI innovation, focusing on ethical applications that solve real human challenges.',
      icon: Lightbulb,
      bgColor: 'bg-amber-50 dark:bg-amber-950/40',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Ethical Governance',
      description: 'We promote responsible AI development with robust governance frameworks that prioritize fairness, transparency, and accountability.',
      icon: Scale,
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/40',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
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

  return (
    <>
      <PageHeader
        title="About Us"
        description="Shaping the future of AI governance and ethics through research, collaboration, and innovation"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      {/* Mission & Values */}
      <section className="py-10">
        <div className="container">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide our work and research"
            className="mb-8"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className={`p-6 ${value.bgColor}`}>
                <div className={`w-12 h-12 rounded-lg ${value.bgColor} flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <SectionHeader
            title="Our Partners"
            subtitle="Collaborating with leading institutions to drive innovation in AI governance"
            className="mb-8"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-12 w-full mb-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span className="text-center text-sm font-medium text-slate-600 dark:text-slate-300">
                  {partner.name}
                </span>
                <div className="mt-2 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Visit site</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/80 to-primary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Shaping the Future of AI
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, policymaker, or industry expert, there are many ways to contribute to our mission.
          </p>
          <Button asChild variant="secondary" size="lg" className="group">
            <Link href="/contact">
              Get Involved
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 