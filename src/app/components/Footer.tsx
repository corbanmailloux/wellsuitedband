export default function Footer() {
  return (
    <footer className="relative z-20 mt-8 flex items-center justify-center gap-2 px-4 pb-4 text-sm text-gray-300">
      <span>&copy; {new Date().getFullYear()} Well Suited</span>

      {/* Classic logo easter egg: used as a CSS mask so it picks up the footer's text color. */}
      <span
        aria-hidden="true"
        className="size-8 shrink-0 bg-current"
        style={{
          WebkitMaskImage: 'url(/images/logo-thick.svg)',
          maskImage: 'url(/images/logo-thick.svg)',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
    </footer>
  )
}
