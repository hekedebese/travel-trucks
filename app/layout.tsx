import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Suspense } from 'react';

import { Inter } from 'next/font/google';

import Header from '@/components/Header/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '900'],
  variable: '--font-inter',
  display: 'swap',
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
    <html lang="en">
      <body className={inter.variable}>
        <TanStackProvider>
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
