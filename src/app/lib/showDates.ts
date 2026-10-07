const TIMEZONE = 'America/New_York'
const MS_PER_DAY = 24 * 60 * 60 * 1000

export interface Show {
  href?: string
  date: string
  name: string
  description: string
}

// Read the date components in US Eastern Time so all comparisons stay aligned
// with the band's local show schedule, even when the server and browser zones differ.
function getDatePartsInET(date: Date): { year: number; month: number; day: number } {
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

export function getDateKeyInET(date: Date): string {
  const { year, month, day } = getDatePartsInET(date)
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

export function parseDateKey(dateStr: string): string {
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})/)
  if (!match) throw new Error(`Invalid date format: ${dateStr}`)

  const [, month, day, year] = match
  return `${year}-${month}-${day}`
}

// True when a show falls today or yesterday in band time — the window where the
// audience is likely still holding a QR code from the stage.
export function hasShowTodayOrYesterday(shows: Show[], now: Date = new Date()): boolean {
  const todayKey = getDateKeyInET(now)

  // Noon UTC stays on the same calendar day for every US Eastern offset (including
  // DST), so shifting it back a day lands safely on yesterday in band time.
  const noonToday = new Date(`${todayKey}T12:00:00Z`)
  const yesterdayKey = getDateKeyInET(new Date(noonToday.getTime() - MS_PER_DAY))

  return shows.some((show) => {
    const dateKey = parseDateKey(show.date)
    return dateKey === todayKey || dateKey === yesterdayKey
  })
}
