import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://wellsuitedband.com'),
  title: 'Well Suited',
  description: 'Well Suited - 6-Piece Americana Rock Band',
  icons: {
    icon: '/images/logo-white-bg.svg',
    shortcut: '/images/logo-white-bg.svg',
    apple: '/images/logo-white-bg.svg',
  },
  openGraph: {
    title: 'Well Suited',
    description: 'Six-piece rock/alternative/Americana band known for high-energy shows and infectious good vibes',
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
    description: 'Six-piece rock/alternative/Americana band known for high-energy shows and infectious good vibes',
    images: ['/images/optimized/og-image.jpg'],
  },
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
