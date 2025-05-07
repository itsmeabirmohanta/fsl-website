import { Inter, Roboto_Mono } from 'next/font/google'
import "./globals.css";
import "./custom-animations.css";
import { cn } from "@/lib/utils";

import ClientLayout from './client-layout';
import { metadata, viewport } from './metadata';

// Optimize font loading for better performance
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-roboto-mono',
})

export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className={cn('min-h-screen bg-background font-sans antialiased', 'scrollbar-fancy')}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}