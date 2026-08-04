import type { Metadata } from 'next';
import './globals.css';
import { Inter, Montserrat, Poppins, Plus_Jakarta_Sans } from 'next/font/google';

// Primary font - Clean, modern sans-serif (similar to IndiGo Airlines)
// IndiGo uses a clean, modern sans-serif font similar to Montserrat or Poppins
const headingFont = Montserrat({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

// Secondary font - Clean body text (similar to IndiGo's body font)
const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Alternative: If you prefer Poppins (very clean and modern)
// const headingFont = Poppins({
//   variable: '--font-heading',
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
// });

export const metadata: Metadata = {
  title: 'TicketToAsia | Luxury Travel & Holiday Packages',
  description:
    'Book luxury holiday packages, flights, hotels and customized trips with TicketToAsia.',
  keywords: [
    'Skyluxe Journey',
    'ticket to asia',
    'travel agency',
    'holiday packages',
    'flights',
    'hotels',
    'Dubai package',
    'Bali package',
    'Maldives package',
  ],
  icons: {
    icon: '/favicon.ico',
  },
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
        {children}
      </body>
    </html>
  );
}