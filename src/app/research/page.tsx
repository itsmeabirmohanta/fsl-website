import { PageHeader, PageHeaderAction } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Download, Filter, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { getStaggeredAnimationDelay } from "@/lib/utils";

// Mocked research data
const researchPapers = [
  {
    id: "1",
    title: "Transformative Climate Policy for Urban Centers",
    slug: "transformative-climate-policy",
    category: "Climate",
    date: "March 15, 2024",
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1569511166187-97eb6e387e19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    description: "Strategies for reducing carbon emissions in metropolitan areas without compromising economic growth.",
  },
  {
    id: "2",
    title: "Expanding Healthcare Access in Rural Communities",
    slug: "healthcare-access-rural",
    category: "Healthcare",
    date: "February 22, 2024",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: true,
    description: "Innovative approaches to healthcare delivery in underserved rural areas through technology.",
  },
  {
    id: "3",
    title: "Addressing Educational Inequities Post-Pandemic",
    slug: "education-equity-post-pandemic",
    category: "Education",
    date: "January 10, 2024",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: true,
    description: "Policy frameworks to mitigate learning gaps amplified by pandemic-related disruptions.",
  },
  {
    id: "4",
    title: "Digital Privacy in an AI World",
    slug: "digital-privacy-ai",
    category: "Technology",
    date: "December 5, 2023",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: false,
    description: "Examining the balance between innovation and personal privacy in the era of artificial intelligence.",
  },
  {
    id: "5",
    title: "Economic Impact of Renewable Energy Transition",
    slug: "economic-impact-renewable-energy",
    category: "Economics",
    date: "November 18, 2023",
    readTime: "10 min",
    imageUrl: "https://images.unsplash.com/photo-1579170053380-58064b2dee67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: false,
    description: "Analysis of job creation, market transformation, and economic resilience through green energy adoption.",
  },
  {
    id: "6",
    title: "Future of Work and Automation",
    slug: "future-work-automation",
    category: "Labor",
    date: "October 30, 2023",
    readTime: "9 min",
    imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: false,
    description: "How policy can prepare workforce for technological change while ensuring economic security.",
  },
];

// Get all unique categories
const categories = Array.from(new Set(researchPapers.map(paper => paper.category)));

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Research Papers"
        description="Our publications cover various policy domains with evidence-based recommendations for policymakers, organizations, and community leaders."
        background="pattern"
        size="lg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Research" },
        ]}
        actions={
          <>
            <PageHeaderAction asChild>
              <Link href="/research/latest">View latest</Link>
            </PageHeaderAction>
            <PageHeaderAction variant="outline" asChild>
              <Link href="/research/topics">Browse by topic</Link>
            </PageHeaderAction>
          </>
        }
      />

      {/* Research Filter & Search */}
      <section className="py-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input 
                placeholder="Search research papers..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" size="sm">Recent</Button>
              <Button variant="outline" size="sm">Popular</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container px-4">
          <SectionHeader 
            title="Featured Research" 
            subtitle="Our most impactful policy papers and analysis"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {researchPapers.filter(paper => paper.featured).map((paper, index) => (
              <Card 
                key={paper.id}
                className={`overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group hover-lift animate-fade-in ${getStaggeredAnimationDelay(index)}`}
              >
                <div className="relative h-48">
                  <Image
                    src={paper.imageUrl}
                    alt={paper.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-black">{paper.category}</Badge>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/research/${paper.slug}`} className="hover:text-primary after:absolute after:inset-0 after:content-['']">
                      {paper.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{paper.readTime} read</span>
                    </div>
                    <span className="text-primary font-medium">{paper.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Research Papers */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800 bg-grid">
        <div className="container px-4">
          <SectionHeader 
            title="All Research Papers" 
            subtitle="Browse our complete library of policy research"
            align="left"
          />

          <Tabs defaultValue="all" className="w-full mt-8">
            <TabsList className="flex flex-wrap mb-8 bg-transparent h-auto">
              <TabsTrigger value="all" className="mb-2 mr-2 data-[state=active]:bg-primary data-[state=active]:text-white">
                All Categories
              </TabsTrigger>
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category.toLowerCase()} 
                  className="mb-2 mr-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchPapers.map((paper, index) => (
                  <Card 
                    key={paper.id}
                    className={`border border-slate-200 dark:border-slate-700 animate-fade-in ${getStaggeredAnimationDelay(index)}`}
                  >
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">{paper.category}</Badge>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        <Link href={`/research/${paper.slug}`} className="hover:text-primary">
                          {paper.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                        {paper.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{paper.date}</span>
                        <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                          <Link href={`/research/${paper.slug}`} className="flex items-center">
                            Read more <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {categories.map(category => (
              <TabsContent key={category} value={category.toLowerCase()} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {researchPapers
                    .filter(paper => paper.category === category)
                    .map((paper, index) => (
                      <Card 
                        key={paper.id}
                        className={`border border-slate-200 dark:border-slate-700 animate-fade-in ${getStaggeredAnimationDelay(index)}`}
                      >
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-3">{paper.category}</Badge>
                          <h3 className="font-bold text-lg mb-2 line-clamp-2">
                            <Link href={`/research/${paper.slug}`} className="hover:text-primary">
                              {paper.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                            {paper.description}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500">{paper.date}</span>
                            <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                              <Link href={`/research/${paper.slug}`} className="flex items-center">
                                Read more <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Download Reports */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
                Download Our Comprehensive Policy Reports
              </h2>
              <p className="text-white/80 animate-fade-in animation-delay-300">
                Access our in-depth policy reports in PDF format for offline reading and distribution.
                These publications offer detailed analysis and actionable recommendations.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end animate-fade-in animation-delay-500">
              <Button size="lg" variant="secondary" className="group">
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                Download Reports
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 