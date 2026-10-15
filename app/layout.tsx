import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

import Header from '@/components/Header/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TravelTrucks',
  description:
    'Find and rent your perfect camper van with TravelTrucks. Explore a wide selection of campers and motorhomes for your next adventure.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ua" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <TanStackProvider>
          <Header />

          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
