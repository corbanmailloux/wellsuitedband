import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://wellsuitedband.com'),
  title: 'Well Suited',
  description: 'Well Suited - 6-Piece Americana Rock Band',

  alternates: {
    canonical: 'https://wellsuitedband.com',
  },

  icons: {
    icon: [
      { url: '/images/optimized/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/optimized/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/images/optimized/icon-192.png',
    apple: '/images/optimized/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Well Suited',
    description: 'Six-piece Americana rock band known for high-energy shows and infectious good vibes.',
    url: 'https://wellsuitedband.com',
    siteName: 'Well Suited',
    images: [
      {
        url: '/images/optimized/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Well Suited Band',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Well Suited',
    description: 'Six-piece Americana rock band known for high-energy shows and infectious good vibes.',
    images: ['/images/optimized/og-image.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const viewport = {
  themeColor: '#0e0f11'
};
