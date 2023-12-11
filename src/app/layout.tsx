import type { Metadata } from 'next';
import { Public_Sans as FontSans, Ibarra_Real_Nova as FontSerif } from 'next/font/google';

import '@/styles/globals.css';

import Footer from '@/components/footer';
import Header from '@/components/header';

const sans = FontSans({
  preload: true,
  display: 'swap',
  variable: '--ff-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
const serif = FontSerif({
  preload: true,
  display: 'swap',
  variable: '--ff-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Minimalist Portfolio',
  description:
    'This is a solution to the Minimalist portfolio website challenge on Frontend Mentor',
  creator: 'Mateus Belício',
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
