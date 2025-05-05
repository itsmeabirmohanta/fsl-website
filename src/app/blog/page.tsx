import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { ArrowRight, Search, Filter, BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { getBlogPosts, getCategories } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Insights | PolicyLab',
  description: 'Explore our latest insights, policy analysis, and commentary on public policy issues.',
};

export default async function BlogPage() {
  // Get blog posts data using our client-side data function
  const { posts: blogPosts } = getBlogPosts({ limit: 10 });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.isFeatured);
  // Get regular posts (excluding featured)
  const regularPosts = blogPosts.filter(post => !post.isFeatured);

  // Get categories
  const categories = getCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex min-h-[40vh] flex-col items-center justify-center py-20 text-center">
            <div className="inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
              <BookOpen className="mr-2 h-4 w-4 text-primary" />
              Latest Insights & Analysis
            </div>
            <h1 className="mb-6 mt-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Exploring Policy{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Perspectives
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 w-full bg-primary/10" />
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
              In-depth analysis and commentary on the most pressing policy challenges of our time,
              from leading experts and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="group overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:h-full">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Featured
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold group-hover:text-primary">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {featuredPost.description}
                  </p>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">5 min read</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {featuredPost.author?.imageUrl && (
                        <Image
                          src={featuredPost.author.imageUrl}
                          alt={featuredPost.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <div>
                        <div className="font-medium">{featuredPost.author?.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {featuredPost.author?.title}
                        </div>
                      </div>
                    </div>
                    <Button className="group/btn" asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="border-y bg-muted/30 py-8 sticky top-[5rem] z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search insights..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="default"
                size="sm"
                className="rounded-full"
              >
                All Topics
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  asChild
                >
                  <Link href={`/blog/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </Button>
              ))}
              <Button variant="outline" size="sm" className="rounded-full">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{post.author?.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {post.author?.title}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border bg-background p-1">
              <Button variant="ghost" size="sm" className="rounded-full">
                Previous
              </Button>
              <Button variant="default" size="sm" className="rounded-full">1</Button>
              <Button variant="ghost" size="sm" className="rounded-full">2</Button>
              <Button variant="ghost" size="sm" className="rounded-full">3</Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Stay Informed</h2>
            <p className="mb-8 text-muted-foreground">
              Get the latest policy analysis and commentary delivered directly to your inbox.
              We&apos;ll send you our most insightful articles and reports as they&apos;re published.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
} 