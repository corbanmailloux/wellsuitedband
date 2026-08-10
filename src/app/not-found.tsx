import Link from 'next/link'
import BackgroundImage from './components/BackgroundImage'

export default function NotFound() {
  return (
    <main className="min-h-screen relative">
      {/* Background color fallback */}
      <div className="fixed inset-0 bg-black"></div>
      <BackgroundImage
        imageSrc="/images/optimized/tough_guys.avif"
        alt="Well Suited Band - Tough Guys"
        containerClass="fixed inset-0 opacity-50"
      />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-brand-white text-center">
        <div className="bg-black/75 p-8 rounded-lg max-w-md mx-auto backdrop-blur-xs">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page not found. You&apos;re not supposed to be here.</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-brand-black transition-colors rounded-lg text-lg"
          >
            Go home?
          </Link>
        </div>
      </div>
    </main>
  )
}
