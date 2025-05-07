import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: 'Future Shift Labs | AI Policy Think Tank',
  description: 'A global think tank focused on AI policy, governance, and ethics to shape a human-centered future through evidence-based research and collaborative innovation.',
  keywords: 'AI policy, AI governance, AI ethics, AI think tank, technology policy, digital policy, responsible AI, future of AI',
  authors: [{ name: 'Future Shift Labs Team' }],
  category: 'Technology',
  creator: 'Future Shift Labs',
  publisher: 'Future Shift Labs',
  metadataBase: new URL('https://futureshiftlabs.org'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://futureshiftlabs.org',
    siteName: 'Future Shift Labs',
    title: 'Future Shift Labs | AI Policy Think Tank',
    description: 'A global think tank shaping the future of AI policy, governance, and ethics through evidence-based research and collaborative innovation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Future Shift Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Shift Labs | AI Policy Think Tank',
    description: 'A global think tank focused on AI policy, governance, and ethics to shape a human-centered future.',
    images: ['/images/twitter-image.jpg'],
    creator: '@futureshiftlabs',
  },
  alternates: {
    canonical: 'https://futureshiftlabs.org',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}; 