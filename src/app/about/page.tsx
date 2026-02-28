'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify, FaApple, FaTiktok } from 'react-icons/fa'

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
        {/* Portrait/Mobile background */}
        <div className="relative block md:hidden w-full h-full">
          <Image
            src="/images/optimized/background-portrait.avif"
            alt="Well Suited Band"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={85}
          />
        </div>
        {/* Landscape/Desktop background */}
        <div className="relative hidden md:block w-full h-full">
          <Image
            src="/images/optimized/background.avif"
            alt="Well Suited Band"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={85}
          />
        </div>
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
            <p className="mb-6">
              Well Suited is a 6-piece Americana band blending rock and soul into high-energy performances and feel-good grooves. Formed in 2010, the band has grown into a genre-bending force—complete with sax, guitars, piano, and vocal hooks you’ll be humming for days.
            </p>

            {/* Group Photo */}
            <div className="w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src="/images/optimized/group_for_about.avif"
                alt="Well Suited Band Group Photo"
                width={1200}
                height={675}
                className="w-full rounded-lg"
                sizes="(max-width: 768px) 100vw, 800px"
                fetchPriority="high"
                priority
              />
            </div>

            {/* Band Members */}
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">The Band</h2>
            <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-3 mb-8">
              <div className="text-center">
                <h3 className="font-bold">Mike Parker</h3>
                <p className="text-sm text-gray-300">Guitar</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold">Corban Mailloux</h3>
                <p className="text-sm text-gray-300">Saxophones</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold">MacKae Freeland</h3>
                <p className="text-sm text-gray-300">Guitar, Keyboard</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold">Jake Lewis</h3>
                <p className="text-sm text-gray-300">Bass, Vocals</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold">Dylan Bocon</h3>
                <p className="text-sm text-gray-300">Lead Vocals, Guitar</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold">Ben Mailloux</h3>
                <p className="text-sm text-gray-300">Drums, Vocals</p>
              </div>
            </div>

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
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 mb-8">
              <a
                href="https://instagram.com/wellsuitedband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <FaInstagram className="w-6 h-6" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/wellsuitedband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <FaFacebook className="w-6 h-6" />
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@wellsuitedband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <FaTiktok className="w-6 h-6" />
                TikTok
              </a>
              <a
                href="https://www.youtube.com/@wellsuitedband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <FaYoutube className="w-6 h-6" />
                YouTube
              </a>
              <a
                href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <FaSpotify className="w-6 h-6" />
                Spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/well-suited/1526096406"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow transition-colors flex items-center justify-center gap-2 w-full h-full"
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
