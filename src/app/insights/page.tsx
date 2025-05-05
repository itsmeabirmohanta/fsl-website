import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Clock, Tag, User2, Search, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights | PolicyLab',
  description: 'Explore our latest research findings, policy analysis, and expert perspectives.',
};

export default function InsightsPage() {
  const categories = [
    'All',
    'Education',
    'Healthcare',
    'Climate',
    'Technology',
    'Economy',
    'Social Policy',
  ];

  const featuredPost = {
    title: 'The Future of Climate Policy: A Global Perspective',
    excerpt:
      'An in-depth analysis of international climate policies and their impact on global sustainability goals.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    category: 'Climate',
    author: 'Dr. Emma Thompson',
    date: 'March 15, 2024',
    readTime: '8 min read',
    slug: 'future-of-climate-policy',
  };

  const trendingTopics = [
    'AI Policy',
    'Climate Action',
    'Education Reform',
    'Healthcare Innovation',
  ];

  const posts = [
    {
      title: 'Education Reform in the Digital Age',
      excerpt:
        'How technology is reshaping education policy and creating new opportunities for learning.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      category: 'Education',
      author: 'Prof. Michael Rivera',
      date: 'March 10, 2024',
      readTime: '6 min read',
      slug: 'education-reform-digital-age',
    },
    {
      title: 'Healthcare Access in Rural Communities',
      excerpt:
        'Examining the challenges and solutions for improving healthcare accessibility in rural areas.',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      category: 'Healthcare',
      author: 'Dr. Sarah Chen',
      date: 'March 8, 2024',
      readTime: '5 min read',
      slug: 'healthcare-access-rural-communities',
    },
    {
      title: 'AI Governance Framework',
      excerpt:
        'Proposing a comprehensive framework for regulating artificial intelligence development.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      category: 'Technology',
      author: 'Alex Johnson',
      date: 'March 5, 2024',
      readTime: '7 min read',
      slug: 'ai-governance-framework',
    },
    {
      title: 'Economic Inequality Trends',
      excerpt:
        'Analyzing recent trends in economic inequality and potential policy solutions.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      category: 'Economy',
      author: 'Maria Garcia',
      date: 'March 3, 2024',
      readTime: '6 min read',
      slug: 'economic-inequality-trends',
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
          <div className="flex min-h-[40vh] flex-col items-center justify-center py-20 text-center">
            <div className="inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
              <BookOpen className="mr-2 h-4 w-4 text-primary" />
              Latest Insights
            </div>
            <h1 className="mb-6 mt-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Evidence-Based{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Policy Analysis
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 w-full bg-primary/10" />
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
              Explore our latest research findings, expert analysis, and policy recommendations
              on today&apos;s most pressing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="sticky top-[5rem] z-10 border-b bg-background/80 py-4 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search insights..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <TrendingUp className="h-4 w-4 text-primary" />
              Trending:
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic) => (
                <Link
                  key={topic}
                  href={`/insights/topics/${topic.toLowerCase().replace(' ', '-')}`}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="group overflow-hidden">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-[16/9] md:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                    Featured
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8">
                <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {featuredPost.category}
                </div>
                <h2 className="mb-4 text-3xl font-bold">{featuredPost.title}</h2>
                <p className="mb-6 text-muted-foreground">{featuredPost.excerpt}</p>
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User2 className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="group w-fit" asChild>
                  <Link href={`/insights/${featuredPost.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Recent Insights</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="group overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link href={`/insights/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User2 className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay Informed</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Subscribe to our newsletter to receive the latest insights and analysis directly in your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
} 