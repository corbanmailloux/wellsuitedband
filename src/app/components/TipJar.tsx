const VENMO_URL = 'https://venmo.com/u/WellSuitedBand'

interface TipJarProps {
  // Warm-gold treatment for the "there's a show right now" state.
  highlighted?: boolean
}

export default function TipJar({ highlighted = false }: TipJarProps) {
  const pillClass = highlighted
    ? 'group inline-flex max-w-md items-center rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-brand-black shadow-lg shadow-gold/40 transition-colors hover:bg-gold/85'
    : 'group inline-flex max-w-md items-center rounded-full border border-white/15 bg-black/60 px-5 py-2.5 text-center text-sm text-brand-white/75 transition-colors hover:border-gold/60 hover:bg-black/75 hover:text-brand-white'

  const linkClass = highlighted
    ? 'font-bold underline underline-offset-2'
    : 'font-semibold text-brand group-hover:underline'

  return (
    <div className="mb-4 flex justify-center">
      <a href={VENMO_URL} target="_blank" rel="noopener" className={pillClass}>
        <span>
          Looking for a tip jar? <span className={linkClass}>Tip us on Venmo</span>.
        </span>
      </a>
    </div>
  )
}
