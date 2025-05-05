import { MetadataRoute } from 'next';
import { blogPosts, researchPapers, events } from '@/lib/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://futureshiftlabs.org';
  
  // Static routes
  const staticRoutes = [
    '', // homepage
    '/about',
    '/blog',
    '/research',
    '/team',
    '/events',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog post routes
  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.isFeatured ? 0.7 : 0.5,
  }));

  // Dynamic research paper routes
  const researchRoutes = researchPapers.map(paper => ({
    url: `${baseUrl}/research/${paper.slug}`,
    lastModified: new Date(paper.date),
    changeFrequency: 'monthly' as const,
    priority: paper.isFeatured ? 0.7 : 0.5,
  }));

  // Dynamic event routes
  const eventRoutes = events.map(event => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.startDate),
    changeFrequency: 'weekly' as const,
    priority: event.isFeatured ? 0.7 : 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...researchRoutes, ...eventRoutes];
} 