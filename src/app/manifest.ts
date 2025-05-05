import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Future Shift Labs - Think Tank & Policy Research',
    short_name: 'Future Shift Labs',
    description: 'Evidence-based policy research and AI governance solutions for a better future',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0369a1',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/icon-maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    orientation: 'portrait',
    categories: ['education', 'government', 'research', 'technology'],
    screenshots: [
      {
        src: '/screenshots/homepage.jpg',
        sizes: '1280x720',
        type: 'image/jpeg'
      },
      {
        src: '/screenshots/research.jpg',
        sizes: '1280x720',
        type: 'image/jpeg'
      }
    ],
    display_override: ['standalone', 'browser'],
    related_applications: [
      {
        platform: 'webapp',
        url: 'https://futureshiftlabs.org/manifest.json'
      }
    ],
    prefer_related_applications: false,
  };
} 