interface ShowCardProps {
  href?: string
  date: string
  name: string
  description: string
  countdown?: string
}

export default function ShowCard({ href, date, name, description, countdown }: ShowCardProps) {
  // Top padding is slightly smaller than bottom padding to account for the countdown badge which has py-1.
  const baseClasses = "block rounded-lg border border-brand/60 bg-brand-white/10 px-4 pt-2 pb-3"
  const linkedClasses = `${baseClasses} transition-colors hover:bg-brand-white/20`

  // String-matching is brittle, but the possible values are well-defined.
  const isSpecialCountdown = countdown === 'TODAY!' || countdown === 'TOMORROW!'

  const content = (
    <>
      <div className="flex items-center justify-between gap-2">
        <p className="py-1 text-sm font-semibold tracking-wide text-brand">{date}</p>
        {countdown && (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
              isSpecialCountdown
                ? 'bg-red-500/40 text-white ring-0'
                : 'text-white/60'
            }`}
          >
            {countdown}
          </span>
        )}
      </div>
      <p className="text-xl font-semibold">{name}</p>
      <p className="mt-1 text-sm text-white/80">{description}</p>
    </>
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={linkedClasses}
    >
      {content}
    </a>
  ) : (
    <div className={baseClasses}>
      {content}
    </div>
  )
}
