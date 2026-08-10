'use client'

import { useEffect, useState } from 'react'
import ShowCard from './ShowCard'

const TIMEZONE = 'America/New_York'

interface Show {
  href?: string
  date: string
  name: string
  description: string
}

interface EnrichedShow extends Show {
  countdown: string
}

function getDatePartsInET(date: Date): { year: number; month: number; day: number } {
  // Read the date components in US Eastern Time so all comparisons stay aligned
  // with the band’s local show schedule, even when the server and browser zones differ.
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)

  const year = Number(parts.find((part) => part.type === 'year')?.value ?? '0')
  const month = Number(parts.find((part) => part.type === 'month')?.value ?? '0')
  const day = Number(parts.find((part) => part.type === 'day')?.value ?? '0')

  return { year, month, day }
}

function getDateKeyInET(date: Date): string {
  const { year, month, day } = getDatePartsInET(date)
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function parseDateKey(dateStr: string): string {
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})/)
  if (!match) throw new Error(`Invalid date format: ${dateStr}`)

  const [, month, day, year] = match
  return `${year}-${month}-${day}`
}

function getCountdownText(showDateKey: string, todayDateKey: string): string {
  // Compare dates as YYYY-MM-DD strings so we avoid timezone edge cases and keep
  // the countdown logic simple and deterministic.
  const showDate = new Date(`${showDateKey}T12:00:00Z`)
  const todayDate = new Date(`${todayDateKey}T12:00:00Z`)
  const diffDays = Math.round((showDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'TODAY!'
  if (diffDays === 1) return 'TOMORROW!'
  return `${diffDays} days away`
}

interface ShowsListProps {
  shows: Show[]
}

export default function ShowsList({ shows }: ShowsListProps) {
  // Start with the static show data so the page renders immediately, then fill in
  // the countdown once the client has computed it. This avoids a flicker where the shows take longer to load.
  const [enrichedShows, setEnrichedShows] = useState<EnrichedShow[]>(() =>
    shows.map((show) => ({
      ...show,
      countdown: '',
    }))
  )

  useEffect(() => {
    const todayDateKey = getDateKeyInET(new Date())

    const nextShows = shows
      .map((show) => ({ show, dateKey: parseDateKey(show.date) }))
      .filter(({ dateKey }) => dateKey >= todayDateKey) // Only include shows that are today or in the future
      .sort((a, b) => a.dateKey.localeCompare(b.dateKey)) // Sort shows by date ascending
      .map(({ show, dateKey }) => ({
        ...show,
        countdown: getCountdownText(dateKey, todayDateKey),
      }))

    // The countdown depends on the client's clock, so it can only be computed
    // after hydration without causing a mismatch with the prerendered HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnrichedShows(nextShows)
  }, [shows])

  return (
    <div className="space-y-3 text-left">
      {enrichedShows.map((show) => (
        <ShowCard key={show.name} {...show} />
      ))}
      {enrichedShows.length === 0 && (
        <p className="text-white/60">No upcoming shows at the moment.</p>
      )}
    </div>
  )
}
