import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background color fallback */}
      <div className="fixed inset-0 bg-black"></div>

      {/* Full-screen background image */}
      <div className="fixed inset-0 opacity-60">
        <Image
          src="/images/optimized/background.jpg"
          alt="Well Suited Band"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={85}
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-white text-center">
        {/* Logo */}
        <div className="w-64 h-64 mb-12 relative">
          <Image
            src="/images/logo-white-bg.svg"
            alt="Well Suited Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Band Name */}
        <h1 className="text-4xl font-bold mb-8 text-white">Well Suited</h1>

        {/* Social Links */}
        <div className="flex space-x-12 mb-16">
          <a
            href="https://instagram.com/wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaInstagram className="w-12 h-12" />
          </a>
          <a
            href="https://www.youtube.com/@wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaYoutube className="w-12 h-12" />
          </a>
          <a
            href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaSpotify className="w-12 h-12" />
          </a>
          <a
            href="https://music.apple.com/us/artist/well-suited/1526096406"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <FaApple className="w-12 h-12" />
          </a>
        </div>

        {/* Next Show Callout */}
        <div className="bg-black bg-opacity-75 p-8 rounded-lg max-w-md mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-yellow mb-4">Upcoming Shows</h2>
          {/* <p className="text-xl">Coming soon...</p> */}
          <a href='https://theparlorroom.my.salesforce-sites.com/ticket/#/events/a0SV5000009skYXMAY/2025-11-11T19:00:00-05:00' target="_blank">
            <p className="text-2xl">11/11/2025 @ The Iron Horse</p>
            Pre-order tickets <span className="text-brand-yellow">here!</span>
          </a>
        </div>

        {/* About Link */}
        <Link
          href="/about"
          className="inline-block px-8 py-4 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black transition-colors rounded-lg text-lg"
        >
          About Us
        </Link>
      </div>
    </main>
  )
}
