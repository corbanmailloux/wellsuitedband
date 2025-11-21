import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen relative">
      {/* Background color fallback */}
      <div className="fixed inset-0 bg-black"></div>

      {/* Full-screen background image */}
      <div className="fixed inset-0 opacity-50">
        <Image
          src="/images/optimized/tough_guys.jpg"
          alt="Well Suited Band - Tough Guys"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-white text-center">
        <div className="bg-black bg-opacity-75 p-8 rounded-lg max-w-md mx-auto backdrop-blur-sm">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page not found. You're not supposed to be here.</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black transition-colors rounded-lg text-lg"
          >
            Go home?
          </Link>
        </div>
      </div>
    </main>
  )
}
