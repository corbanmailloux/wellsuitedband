interface ShowCardProps {
  href?: string
  date: string
  name: string
  description: string
}

export default function ShowCard({ href, date, name, description }: ShowCardProps) {
  const baseClasses = "block rounded-lg border border-brand/60 bg-brand-white/10 p-4"
  const linkedClasses = `${baseClasses} transition-colors hover:bg-brand-white/20`

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={linkedClasses}
    >
      <p className="text-sm font-semibold tracking-wide text-brand">{date}</p>
      <p className="text-xl font-semibold">{name}</p>
      <p className="mt-1 text-sm text-white/80">{description}</p>
    </a>
  ) : (
    <div className={baseClasses}>
      <p className="text-sm font-semibold tracking-wide text-brand">{date}</p>
      <p className="text-xl font-semibold">{name}</p>
      <p className="mt-1 text-sm text-white/80">{description}</p>
    </div>
  )
}
