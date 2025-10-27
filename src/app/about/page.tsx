'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaInstagram, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa'

export default function About() {
  const router = useRouter()

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only navigate if clicking the backdrop (not the modal content)
    if (e.target === e.currentTarget) {
      router.push('/')
    }
  }

  return (
    <main className="min-h-screen relative">
      {/* Full-screen background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/optimized/background.jpg"
          alt="Well Suited Band"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          onClick={handleBackgroundClick}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 container mx-auto px-4 py-16"
        onClick={handleBackgroundClick}>
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-block mb-8 text-white hover:text-brand-yellow transition-colors"
        >
          ← Back to Home
        </Link>

        {/* About Content */}
        <div className="max-w-3xl mx-auto bg-black bg-opacity-90 p-8 rounded-lg text-white backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-brand-yellow mb-6">About Well Suited</h1>

          <div className="prose prose-invert" onClick={(e) => e.stopPropagation()}>
            <p className="mb-4">
              Well Suited is a dynamic band bringing energy and professionalism to every performance.
              From weddings to corporate events, we deliver an unforgettable musical experience.
            </p>

            <h2 className="text-2xl font-bold text-brand-yellow mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              For bookings and inquiries, please contact us at:{' '}
              <a
                href="mailto:booking@wellsuitedband.com"
                className="text-brand-yellow hover:underline"
              >
                booking@wellsuitedband.com
              </a>
            </p>

            <h2 className="text-2xl font-bold text-brand-yellow mt-8 mb-4">Follow Us</h2>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/wellsuitedband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center gap-2"
              >
                <FaInstagram className="w-6 h-6" />
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@wellsuitedband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center gap-2"
              >
                <FaYoutube className="w-6 h-6" />
                YouTube
              </a>
              <a
                href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center gap-2"
              >
                <FaSpotify className="w-6 h-6" />
                Spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/well-suited/1526096406"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center gap-2"
              >
                <FaApple className="w-6 h-6" />
                Apple Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
