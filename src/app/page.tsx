import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram, SiFacebook, SiYoutube, SiSpotify, SiTiktok, SiApplemusic } from 'react-icons/si'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background color fallback */}
      <div className="fixed inset-0 bg-brand-black"></div>

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
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-brand-white text-center">
        {/* Logo */}
        <div className="size-60 mb-6 relative md:size-80">
          <Image
            src="/images/optimized/brand-circle.avif"
            alt="Well Suited"
            fill
            style={{ objectFit: 'contain' }}
            fetchPriority="high"
            priority
          />
        </div>

        {/* Band Name - Dropped with new branding that contains the name. */}
        {/* <h1 className="text-4xl font-bold mb-6 text-brand-white">Well Suited</h1> */}

        {/* Social Links */}
        <div className="flex space-x-6 md:space-x-12 mb-8 items-center justify-center">
          <a
            href="https://instagram.com/wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiInstagram className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.facebook.com/wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiFacebook className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.tiktok.com/@wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiTiktok className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.youtube.com/@wellsuitedband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiYoutube className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            title="Spotify"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiSpotify className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://music.apple.com/us/artist/well-suited/1526096406"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple Music"
            title="Apple Music"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiApplemusic className="w-8 h-8 md:w-12 md:h-12" />
          </a>
        </div>

        {/* Next Show Callout */}
        <div className="bg-brand-black bg-opacity-75 p-6 rounded-lg max-w-md mx-auto mb-4">
          <h2 className="text-3xl font-bold text-brand mb-4">Upcoming Shows</h2>

          <div className="space-y-3 text-left">
            <a
              href="https://nohodna.org/the-taste-of-northampton/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-brand/60 bg-brand-white/10 p-4 transition-colors hover:bg-brand-white/20"
            >
              <p className="text-sm font-semibold tracking-wide text-brand">09/13/2026</p>
              <p className="text-xl font-semibold">Taste of Northampton</p>
              <p className="mt-1 text-sm text-white/80">Northampton, MA. More details coming soon.</p>
            </a>

            <a
              href="https://www.thebige.com/events/2026/well-suited"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-brand/60 bg-brand-white/10 p-4 transition-colors hover:bg-brand-white/20"
            >
              <p className="text-sm font-semibold tracking-wide text-brand">09/24/2026 @ 3:00 PM</p>
              <p className="text-xl font-semibold">The Big E (on the E Stage)</p>
              <p className="mt-1 text-sm text-white/80">West Springfield, MA. View event details.</p>
            </a>

            <a
              href="https://garlicandarts.org/entertainment-and-activities/music/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-brand/60 bg-brand-white/10 p-4 transition-colors hover:bg-brand-white/20"
            >
              <p className="text-sm font-semibold tracking-wide text-brand">09/26/2026 @ 3:30 PM</p>
              <p className="text-xl font-semibold">North Quabbin Garlic & Arts Festival </p>
              <p className="mt-1 text-sm text-white/80">Orange, MA. View event details.</p>
            </a>

            <a
              href="https://www.incandescentbrewing.com/events"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-brand-yellow/60 bg-white/10 p-4 transition-colors hover:bg-white/20"
            >
              <p className="text-sm font-semibold tracking-wide text-brand-yellow">10/03/2026 @ 6:00 PM</p>
              <p className="text-xl font-semibold">Incandescent Brewing</p>
              <p className="mt-1 text-sm text-white/80">Bernardston, MA. Event details coming soon.</p>
            </a>
          </div>
        </div>

        {/* Band News Callout */}
        <div className="bg-brand-black bg-opacity-75 p-6 rounded-lg max-w-md mx-auto mb-4">
          <h2 className="text-2xl font-bold text-brand mb-4">"Wait Forever" Streaming Now</h2>
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
              className="text-brand-white hover:text-[#1ED760] transition-colors"
            >
              <SiSpotify className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <a
              href="https://music.apple.com/us/album/wait-forever/6770508565"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wait Forever on Apple Music"
              title="Wait Forever on Apple Music"
              className="text-brand-white hover:text-[#FF4E6B] transition-colors"
            >
              <SiApplemusic className="w-8 h-8 md:w-12 md:h-12" />
            </a>
          </div>
        </div>

        {/* About Link */}
        <Link
          href="/about"
          className="inline-block px-6 py-2 border-2 bg-brand-black bg-opacity-40 border-brand text-brand hover:bg-brand hover:text-brand-black transition-colors rounded-lg text-lg"
        >
          About Us
        </Link>
      </div>
    </main>
  )
}
