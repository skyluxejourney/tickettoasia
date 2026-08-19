// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Plus_Jakarta_Sans, DM_Sans, Outfit } from 'next/font/google';
import StatCounter from '@/components/StatCounter';

const headingFont = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const bodyFont = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// ✅ COMPLETE SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://tickettoasia.com'),
  
  title: {
    default: 'TicketToAsia | Flights, Hotels & Holiday Packages to Asia',
    template: '%s | TicketToAsia',
  },
  
  description: 'Book cheap flights, luxury hotels, and customized holiday packages to Asia. Best deals on Singapore, Bali, Dubai, Maldives & more. 24/7 customer support.',
  
  keywords: [
    'TicketToAsia',
    'cheap flights to Asia',
    'Asia holiday packages',
    'Singapore package',
    'Bali package',
    'Dubai package',
    'Maldives package',
    'Bangkok package',
    'Tokyo package',
    'book flights online',
    'luxury travel agency',
    'holiday deals',
  ],
  
  authors: [{ name: 'TicketToAsia' }],
  
  openGraph: {
    title: 'TicketToAsia | Flights, Hotels & Holiday Packages to Asia',
    description: 'Book cheap flights, luxury hotels, and customized holiday packages to Asia. Best deals on Singapore, Bali, Dubai, Maldives & more.',
    url: 'https://tickettoasia.com',
    siteName: 'TicketToAsia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TicketToAsia - Travel to Asia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'TicketToAsia | Flights, Hotels & Holiday Packages to Asia',
    description: 'Book cheap flights, luxury hotels, and customized holiday packages to Asia.',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://tickettoasia.com',
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900 flex flex-col">
        <StatCounter />
        {children}
      </body>
    </html>
  );
}