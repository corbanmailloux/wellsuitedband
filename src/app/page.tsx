import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram, SiFacebook, SiYoutube, SiSpotify, SiTiktok, SiApplemusic } from 'react-icons/si'
import BackgroundImage from './components/BackgroundImage'
import ShowCard from './components/ShowCard'

const shows = [
  {
    href: 'https://nohodna.org/the-taste-of-northampton/',
    date: '09/13/2026',
    name: 'Taste of Northampton',
    description: 'Northampton, MA. More details coming soon.',
  },
  {
    href: 'https://www.thebige.com/events/2026/well-suited',
    date: '09/24/2026 @ 3:00 PM',
    name: 'The Big E (on the E Stage)',
    description: 'West Springfield, MA. View event details.',
  },
  {
    href: 'https://garlicandarts.org/entertainment-and-activities/music/',
    date: '09/26/2026 @ 3:30 PM',
    name: 'North Quabbin Garlic & Arts Festival',
    description: 'Orange, MA. View event details.',
  },
  {
    href: 'https://www.incandescentbrewing.com/events',
    date: '10/03/2026 @ 6:00 PM',
    name: 'Incandescent Brewing',
    description: 'Bernardston, MA. Event details coming soon.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 bg-black"></div>
      <BackgroundImage
        imageSrc="/images/optimized/background.avif"
        portraitSrc="/images/optimized/background-portrait.avif"
        alt="Well Suited Band"
      />

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
            rel="me noopener"
            aria-label="Instagram"
            title="Instagram"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiInstagram className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.facebook.com/wellsuitedband"
            target="_blank"
            rel="me noopener"
            aria-label="Facebook"
            title="Facebook"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiFacebook className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.tiktok.com/@wellsuitedband"
            target="_blank"
            rel="me noopener"
            aria-label="TikTok"
            title="TikTok"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiTiktok className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://www.youtube.com/@wellsuitedband"
            target="_blank"
            rel="me noopener"
            aria-label="YouTube"
            title="YouTube"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiYoutube className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
            target="_blank"
            rel="me noopener"
            aria-label="Spotify"
            title="Spotify"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiSpotify className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a
            href="https://music.apple.com/us/artist/well-suited/1526096406"
            target="_blank"
            rel="me noopener"
            aria-label="Apple Music"
            title="Apple Music"
            className="text-brand-white hover:text-brand transition-colors"
          >
            <SiApplemusic className="w-8 h-8 md:w-12 md:h-12" />
          </a>
        </div>

        {/* Next Show Callout */}
        <div className="bg-black/75 p-6 rounded-lg max-w-md mx-auto mb-4">
          <h2 className="text-3xl font-bold text-brand mb-4">Upcoming Shows</h2>

          <div className="space-y-3 text-left">
            {shows.map((show) => (
              <ShowCard key={show.href} {...show} />
            ))}
          </div>
        </div>

        {/* Band News Callout */}
        <div className="bg-black/75 p-6 rounded-lg max-w-md mx-auto mb-4">
          <h2 className="text-2xl font-bold text-brand mb-4">"Wait Forever" Streaming Now</h2>
          <div className="flex justify-center mb-4">
            <div className="w-60 md:w-80">
              <a
              href="https://open.spotify.com/track/4HnHQGLcZpzUkUWnyZqCII"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/images/optimized/cover-wait-forever.avif"
                alt="Wait Forever cover art"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
              </a>
            </div>
          </div>
          <div className="flex space-x-6 md:space-x-12 items-center justify-center">
            <a
              href="https://open.spotify.com/track/4HnHQGLcZpzUkUWnyZqCII"
              target="_blank"
              rel="noopener"
              aria-label="Wait Forever on Spotify"
              title="Wait Forever on Spotify"
              className="text-brand-white hover:text-[#1ED760] transition-colors"
            >
              <SiSpotify className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <a
              href="https://music.apple.com/us/album/wait-forever/6770508565"
              target="_blank"
              rel="noopener"
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
          className="inline-block px-6 py-2 bg-black/40 border-2 border-brand text-brand hover:bg-brand hover:text-brand-black transition-colors rounded-lg text-lg"
        >
          About Us
        </Link>
      </div>
    </main>
  )
}
