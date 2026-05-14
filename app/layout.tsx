import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter_Tight } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://realign.day'),
  title: {
    default: 'Align — Plan like you\'ll forget. Because you will.',
    template: '%s · Align',
  },
  description:
    'A calmer weekly planner for ADHD founders, overwhelmed parents, and anyone whose to-do list is a graveyard of good intentions.',
  applicationName: 'Align',
  keywords: ['ADHD planner', 'weekly planner', 'calm productivity', 'task management', 'brain dump'],
  authors: [{ name: 'Align' }],
  openGraph: {
    type: 'website',
    url: 'https://realign.day',
    title: 'Align — Plan like you\'ll forget. Because you will.',
    description:
      'A calmer weekly planner for ADHD founders, overwhelmed parents, and anyone whose to-do list is a graveyard of good intentions.',
    siteName: 'Align',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Align — Plan like you\'ll forget. Because you will.',
    description: 'A calmer weekly planner for chaotic brains.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/align-favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/align-icon.svg',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#7CA481',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
