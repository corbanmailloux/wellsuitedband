import Image from 'next/image'
import Link from 'next/link'
import { SiInstagram, SiFacebook, SiYoutube, SiSpotify, SiTiktok, SiApplemusic } from 'react-icons/si'
import BackgroundImage from '../components/BackgroundImage'

export default function About() {
  return (
    <main className="min-h-screen relative">
      <BackgroundImage
        imageSrc="/images/optimized/background.avif"
        portraitSrc="/images/optimized/background-portrait.avif"
        alt="Well Suited Band"
        containerClass="fixed inset-0 z-0"
      />

      {/* Clicking anywhere outside the content card navigates back home. */}
      <Link
        href="/"
        aria-label="Back to Home"
        className="fixed inset-0 z-10 bg-black/70"
      />

      {/* Content */}
      <div className="pointer-events-none relative z-20 container py-16">
        {/* Back to Home */}
        <Link
          href="/"
          className="pointer-events-auto inline-block mb-8 text-brand-white hover:text-brand transition-colors"
        >
          ← Back to Home
        </Link>

        {/* About Content */}
        <div className="pointer-events-auto max-w-3xl mx-auto bg-black/90 p-8 rounded-lg text-brand-white backdrop-blur-xs">
          <h1 className="text-4xl font-bold text-brand mb-6">About Well Suited</h1>

          <div className="prose prose-invert">
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
            <h2 className="text-2xl font-bold text-brand mb-4">The Band</h2>
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

            <h2 className="text-2xl font-bold text-brand mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              For bookings and inquiries, please contact us at:{' '}
              <a
                href="mailto:booking@wellsuitedband.com"
                className="text-brand hover:underline"
              >
                booking@wellsuitedband.com
              </a>
            </p>

            <h2 className="text-2xl font-bold text-brand mt-8 mb-4">Follow Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 mb-8">
              <a
                href="https://instagram.com/wellsuitedband"
                target="_blank"
                rel="me noopener"
                className="text-brand-white hover:text-brand transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <SiInstagram className="w-6 h-6" aria-hidden="true" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/wellsuitedband"
                target="_blank"
                rel="me noopener"
                className="text-brand-white hover:text-brand transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <SiFacebook className="w-6 h-6" aria-hidden="true" />
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@wellsuitedband"
                target="_blank"
                rel="me noopener"
                className="text-brand-white hover:text-brand transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <SiTiktok className="w-6 h-6" aria-hidden="true" />
                TikTok
              </a>
              <a
                href="https://www.youtube.com/@wellsuitedband"
                target="_blank"
                rel="me noopener"
                className="text-brand-white hover:text-brand transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <SiYoutube className="w-6 h-6" aria-hidden="true" />
                YouTube
              </a>
              <a
                href="https://open.spotify.com/artist/7rIYaPPZCDQTTFi9zhX6no"
                target="_blank"
                rel="me noopener"
                className="text-brand-white hover:text-brand transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <SiSpotify className="w-6 h-6" aria-hidden="true" />
                Spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/well-suited/1526096406"
                target="_blank"
                rel="me noopener"
                className="text-brand-white hover:text-brand transition-colors flex items-center justify-center gap-2 w-full h-full"
              >
                <SiApplemusic className="w-6 h-6" aria-hidden="true" />
                Apple Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
