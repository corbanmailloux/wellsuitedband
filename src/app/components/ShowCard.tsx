interface ShowCardProps {
  href: string
  date: string
  name: string
  description: string
}

export default function ShowCard({ href, date, name, description }: ShowCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="block rounded-lg border border-brand/60 bg-brand-white/10 p-4 transition-colors hover:bg-brand-white/20"
    >
      <p className="text-sm font-semibold tracking-wide text-brand">{date}</p>
      <p className="text-xl font-semibold">{name}</p>
      <p className="mt-1 text-sm text-white/80">{description}</p>
    </a>
  )
}
