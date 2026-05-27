import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram, SiFacebook, SiYoutube, SiSpotify, SiTiktok, SiApplemusic } from 'react-icons/si'

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
            <SiInstagram className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.facebook.com/wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <SiFacebook className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.tiktok.com/@wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <SiTiktok className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.youtube.com/@wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <SiYoutube className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            title="Spotify"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <SiSpotify className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://music.apple.com/us/artist/well-suited/1526096406"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple Music"
            title="Apple Music"
            className="text-white hover:text-brand-yellow transition-colors"
          >
            <SiApplemusic className="w-8 h-8 md:w-12 md:h-12" />
          </a>
        </div>

        {/* Band News Callout */}
        <div className="bg-black bg-opacity-75 p-6 rounded-lg max-w-md mx-auto mb-4">
          <h2 className="text-2xl font-bold text-brand-yellow mb-4">"Wait Forever" Streaming Now</h2>
          <div className="flex justify-center mb-4">
            <div className="w-60 md:w-80">
              <a
              href="https://open.spotify.com/track/4HnHQGLcZpzUkUWnyZqCII"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/optimized/cover-wait-forever.avif"
                alt="Wait Forever cover art"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
              </a>
            </div>
          </div>
          <div className="flex space-x-6 md:space-x-12 items-center justify-center">
            <a
              href="https://open.spotify.com/track/4HnHQGLcZpzUkUWnyZqCII"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wait Forever on Spotify"
              title="Wait Forever on Spotify"
              className="text-white hover:text-[#1ED760] transition-colors"
            >
              <SiSpotify className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <a
              href="https://music.apple.com/us/album/wait-forever/6770508565"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wait Forever on Apple Music"
              title="Wait Forever on Apple Music"
              className="text-white hover:text-[#FF4E6B] transition-colors"
            >
              <SiApplemusic className="w-8 h-8 md:w-12 md:h-12" />
            </a>
          </div>
        </div>

        {/* Next Show Callout */}
        <div className="bg-black bg-opacity-75 p-6 rounded-lg max-w-md mx-auto mb-4">
          <h2 className="text-3xl font-bold text-brand-yellow mb-4">Upcoming Shows</h2>

          {/* Default when no shows are scheduled */}
          <div className="hidden">
            <p className="text-xl">
              Coming soon. <a className="text-brand-yellow" href="https://instagram.com/wellsuitedband" target='_blank'>Book us?</a>
            </p>
          </div>

          {/* Show with full text link */}
          <div className="hidden">
            <a href='https://stonechurchvt.com/events#/events/161604' target="_blank">
              <p className="text-2xl">1/23/2026 @ Stone Church</p>
              with Madaila in Brattleboro, VT<br />
              Details and tickets <span className="text-brand-yellow">here!</span>
            </a>
          </div>

          {/* Show with simple link or no link */}
          <div className="">
            <p className="text-xl">7/6/2026 @ Greenfield Fireworks</p>
            <p className="">
              Details on the <a href='https://www.greenfieldrecreation.com/fireworks.html' target="_blank" className="text-brand-yellow">Greenfield Recreation site</a>.
            </p>
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
