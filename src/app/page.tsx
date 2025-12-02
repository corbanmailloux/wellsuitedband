import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaSpotify, FaApple, FaTiktok } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background color fallback */}
      <div className="fixed inset-0 bg-black"></div>

      {/* Full-screen background image */}
      <div className="fixed inset-0 opacity-60">
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
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-white text-center">
        {/* Logo */}
        <div className="w-60 h-60 mb-2 relative">
          <Image
            src="/images/logo-white-bg.svg"
            alt="Well Suited Logo"
            fill
            style={{ objectFit: 'contain' }}
            fetchPriority="high"
            priority
          />
        </div>

        {/* Band Name */}
        <h1 className="text-4xl font-bold mb-6 text-white">Well Suited</h1>

        {/* Social Links */}
        <div className="flex space-x-6 md:space-x-12 mb-8 items-center justify-center">
          <a
            href="https://instagram.com/wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaInstagram className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.tiktok.com/@wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaTiktok className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.youtube.com/@wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaYoutube className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            title="Spotify"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaSpotify className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://music.apple.com/us/artist/well-suited/1526096406"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple Music"
            title="Apple Music"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaApple className="w-8 h-8 md:w-12 md:h-12" />
          </a>
        </div>

        {/* Next Show Callout */}
        <div className="bg-black bg-opacity-75 p-6 rounded-lg max-w-md mx-auto mb-4">
          <h2 className="text-2xl font-bold text-brand-yellow mb-4">Upcoming Shows</h2>
          <p className="text-xl">
            Coming soon. <a className="text-brand-yellow" href="https://instagram.com/wellsuitedband" target='_blank'>Book us?</a>
          </p>
          <div className="hidden">
            <a href='https://theparlorroom.my.salesforce-sites.com/ticket/#/events/a0SV5000009skYXMAY/2025-11-11T19:00:00-05:00' target="_blank">
              <p className="text-2xl">11/11/2025 @ The Iron Horse</p>
              Pre-order tickets <span className="text-brand-yellow">here!</span>
            </a>
          </div>
          <div className="hidden">
            <p className="text-2xl">11/26/2025 @ Stans in Turners Falls, MA</p>
            <a className="text-brand-yellow" href='https://www.facebook.com/p/St-Stanislaus-Society-100063656318869/' target='_blank'>St. Stanislaus on Facebook</a>
          </div>
        </div>

        {/* About Link */}
        <Link
          href="/about"
          className="inline-block px-6 py-2 border-2 bg-black bg-opacity-40 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black transition-colors rounded-lg text-lg"
        >
          About Us
        </Link>
      </div>
    </main>
  )
}
