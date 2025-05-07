import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://futureshiftlabs.org';
  
  // Add all your site's static pages
  const routes = [
    '',
    '/about',
    '/research',
    '/events',
    '/blog',
    '/team',
    '/contact',
    '/services/research',
    '/services/cybersecurity',
    '/services/global-collaboration',
    '/services/community',
    '/services/democracy-tools',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 