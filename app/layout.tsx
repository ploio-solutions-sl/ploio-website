import 'tailwindcss/tailwind.css';

import { IBM_Plex_Mono, PT_Serif, Work_Sans } from '@next/font/google';
import clsx from 'clsx';
import type { Metadata } from 'next';

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
});
const sans = Work_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
});
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Ploio Solutions',
    template: '%s | Ploio Solutions',
  },
  description: 'Una Nueva Forma de Destacar.',
  openGraph: {
    title: 'Ploio Solutions',
    description: 'Una Nueva Forma de Destacar.',
    url: 'https://ploiosolutions.com',
    siteName: 'Ploio Solutions',
    images: [
      {
        url: 'https://ploiosolutions.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'Ploio Solutions',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon/favicon.ico',
  },
  // //   verification: {
  // //     google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  // //     yandex: '14d2e73487fa6c71',
  // //   },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
