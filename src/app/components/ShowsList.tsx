'use client'

import { useEffect, useState } from 'react'
import ShowCard from './ShowCard'
import { getDateKeyInET, parseDateKey, type Show } from '../lib/showDates'

interface EnrichedShow extends Show {
  countdown: string
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
        <p className="text-center text-white/60">
          No upcoming shows at the moment.
          <br />
          Want to book us?{' '}
          <a href="mailto:booking@wellsuitedband.com" className="text-brand hover:underline">
            Email us.
          </a>
        </p>
      )}
    </div>
  )
}
