'use client'

import { useEffect, useState } from 'react'
import { hasShowTodayOrYesterday, type Show } from '../lib/showDates'
import ShowsList from './ShowsList'
import TipJar from './TipJar'

interface ShowsSectionProps {
  shows: Show[]
}

export default function ShowsSection({ shows }: ShowsSectionProps) {
  // Whether the tip jar jumps above the shows and lights up depends on the
  // visitor's clock, so it renders in the default position first (matching the
  // prerendered HTML) and only repositions after hydration.
  const [isShowWindow, setIsShowWindow] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsShowWindow(hasShowTodayOrYesterday(shows))
  }, [shows])

  return (
    <>
      {isShowWindow && <TipJar highlighted />}

      {/* Next Show Callout */}
      <div className="bg-black/75 p-6 rounded-lg max-w-md mx-auto mb-4">
        <h2 className="text-3xl font-bold text-brand mb-4">Upcoming Shows</h2>

        <ShowsList shows={shows} />
      </div>

      {!isShowWindow && <TipJar />}
    </>
  )
}
