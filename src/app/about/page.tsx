import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Users2, Lightbulb, BookOpen, Target, BarChart3, Globe2, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Future Shift Labs',
  description: 'Learn about our mission, values, and commitment to responsible AI development.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Openness',
      description: 'We encourage imagination and thoroughness, embracing diverse ideas for impactful solutions.',
      icon: BookOpen,
    },
    {
      title: 'Diverse yet Inclusive',
      description: 'We ensure everyone feels welcome and respected, making research accessible and equitable.',
      icon: Users2,
    },
    {
      title: 'Innovation',
      description: 'We focus on critical thinking and human-centered, creative solutions.',
      icon: Lightbulb,
    },
  ];

  const services = [
    {
      title: 'Research & Analysis',
      description: 'Conducts thorough studies on the impacts of emerging AI technologies and global AI policies.',
      icon: BarChart3,
    },
    {
      title: 'Advocacy for Positive AI Use',
      description: 'Promotes the responsible application of AI through public campaigns and professional training.',
      icon: Scale,
    },
    {
      title: 'Strategic Consulting Services',
      description: 'Develop practical, product-driven solutions for real-world applications in sectors like governance, healthcare, and education.',
      icon: Target,
    },
    {
      title: 'Collaboration and Knowledge Sharing',
      description: 'Fosters partnerships among researchers, policymakers, and industry leaders.',
      icon: Users2,
    },
    {
      title: 'Enhancing International Cooperation',
      description: 'Aims to strengthen global collaboration to address and solve complex challenges.',
      icon: Globe2,
    },
    {
      title: 'Driving Innovative Solutions',
      description: 'Focuses on creating innovative approaches to tackle global issues effectively.',
      icon: Lightbulb,
    },
  ];

  return (
    <>
      {/* Hero Section with Split Design */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right Side - Content */}
        <div className="bg-primary text-primary-foreground p-8 lg:p-16 flex items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Who Are We</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Future Shift Labs, established in 2024, is devoted towards a sustainable and equitable future,
              valuing openness, diversity, and innovation. Our core goal is to make India a global leader by
              offering research, strategic consulting, and training on AI&apos;s impact, while fostering
              collaboration among researchers, policymakers, and industry leaders for responsible AI
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section with Description */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              At Future Shift Labs, we embrace deep standards of openness, diversity and innovation by engaging in a
              wide range of perspectives, addressing complex challenges more holistically, by ensuring our initiatives
              reflect the multifaceted nature of global issues.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="group p-8 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <value.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with AI Image */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Services & Initiatives</h2>
              <p className="text-lg text-muted-foreground">
                Through strategic consulting and public engagement, we advocate for positive AI applications 
                that address global challenges. Our comprehensive approach ensures effective solutions and 
                meaningful impact.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="AI and Justice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group p-8 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future of AI</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create a more sustainable and equitable future through responsible AI development
            and implementation. Let&apos;s collaborate to make a difference.
          </p>
          <Button 
            size="lg" 
            variant="white" 
            className="group rounded-md"
            asChild
          >
            <a href="/contact">
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
} 