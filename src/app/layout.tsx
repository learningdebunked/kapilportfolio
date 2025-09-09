import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { Header as HeaderComponent } from '@/components/header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kapil Poreddy | AI Powered Senior Engineering Leader',
  description: 'Making customer shopping checkout experience healthy and delightful',
  keywords: ['AI Engineer', 'Machine Learning', 'Digital Transformation', 'Portfolio', 'Kapil Poreddy'],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Kapil Poreddy | AI Powered Senior Engineering Leader',
    description: 'Making customer shopping checkout experience healthy and delightful',
    url: 'https://kapilporeddy.com',
    siteName: 'Kapil Poreddy',
    images: [
      {
        url: '/images/headshot.jpg',
        width: 800,
        height: 600,
        alt: 'Kapil Poreddy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kapil Poreddy | AI Powered Senior Engineering Leader',
    description: 'Making customer shopping checkout experience healthy and delightful',
    images: ['/images/headshot.jpg'],
  },
  metadataBase: new URL('https://kapilporeddy.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          robotoMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <HeaderComponent />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
