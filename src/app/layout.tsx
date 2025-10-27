import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Well Suited',
  description: 'Well Suited - 6-Piece Americana Rock Band',
  icons: {
    icon: '/images/logo-white-bg.svg',
    shortcut: '/images/logo-white-bg.svg',
    apple: '/images/logo-white-bg.svg',
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
