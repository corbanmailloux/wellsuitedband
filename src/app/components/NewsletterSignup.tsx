'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          theme?: 'light' | 'dark' | 'auto'
          language?: string
          appearance?: 'always' | 'interaction-only' | 'execute'
          callback?: (token: string) => void
        },
      ) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
      getResponse: (widgetId?: string) => string
    }
  }
}

const ACTION_URL = 'https://bc1aed18.sibforms.com/serve/MUIFAEWr-syKbio5H6wKuWxt_8ByWqkFo-x3z0R1O__hL_8_WR_NPGqYTrHuPmAmXW2NfVlbs0u8wdHQK_BSWmn_e2O7Btq7tLnuu_I-g9a5RswZqlAmTYUI4gyha9Gf87_qTo4V6Z6NYN2AqlEg73GxSXHwVLSAXEX-NwQl8S_o9uCj_MBBdYRNXlWtYrYM_zwWnE5FJKzBeY76hg=='
const SITE_KEY = '0x4AAAAAAEJzHCqx9T-f_xwb'

type SibResponsePayload = {
  success?: boolean | string
  message?: string
  detail?: string
  help?: string
  error?: string
  errors?: Record<string, unknown> | string[] | string
}

function normalizeResponseValue(value: unknown): string {
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return value.filter(Boolean).map((item) => normalizeResponseValue(item)).join(' ')
  if (value && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, item]) => `${key}: ${normalizeResponseValue(item)}`)
      .join(' ')
  }
  return ''
}

function parseSibResponse(responseText: string, fallbackSuccess: boolean) {
  const trimmed = responseText.trim()

  if (!trimmed) {
    return {
      success: fallbackSuccess,
      message: fallbackSuccess
        ? "You're subscribed! Thanks for joining the list."
        : 'Your subscription could not be saved. Please try again.',
    }
  }

  try {
    const payload = JSON.parse(trimmed) as SibResponsePayload
    const success =
      payload.success === true ||
      (typeof payload.success === 'string' && payload.success.toLowerCase() === 'true')

    const message =
      payload.message ||
      normalizeResponseValue(payload.errors) ||
      payload.detail ||
      payload.help ||
      payload.error ||
      (success
        ? "You're subscribed! Thanks for joining the list."
        : 'Your subscription could not be saved. Please try again.')

    return { success, message }
  } catch {
    return { success: fallbackSuccess, message: trimmed }
  }
}

export default function NewsletterSignup() {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [message, setMessage] = useState('')
  const [showWidget, setShowWidget] = useState(false)

  useEffect(() => {
    const renderWidget = () => {
      if (!showWidget || !containerRef.current || !window.turnstile || widgetIdRef.current) return

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        theme: 'dark',
        language: 'en',
        // appearance: 'interaction-only',
        callback: () => {
          setStatus((current) => (current === 'loading' ? 'idle' : current))
        },
      })
    }

    if (!showWidget) {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
      return
    }

    if (window.turnstile) {
      renderWidget()
      return
    }

    const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')
    if (existingScript) {
      existingScript.addEventListener('load', renderWidget, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.defer = true
    script.onload = renderWidget
    document.body.appendChild(script)

    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [showWidget])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowWidget(true)

    if (!window.turnstile || !widgetIdRef.current) {
      setStatus('error')
      setMessage('The captcha is not ready yet. Please refresh and try again.')
      return
    }

    const token = window.turnstile.getResponse(widgetIdRef.current)
    if (!token) {
      setStatus('error')
      setMessage('Please complete the captcha before subscribing.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('email_address_check', '')
    formData.set('locale', 'en')
    formData.set('cf-turnstile-response', token)

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch(`${ACTION_URL}?isAjax=1`, {
        method: 'POST',
        body: formData,
        redirect: 'manual',
      })

      const responseText = await response.text()
      const parsed = parseSibResponse(responseText, response.ok)

      if (parsed.success) {
        setStatus('success')
        setMessage(parsed.message)
        form.reset()
      } else {
        setStatus('error')
        setMessage(parsed.message)
      }
    } catch {
      setStatus('error')
      setMessage('We could not reach the signup service. Please try again in a moment.')
    } finally {
      window.turnstile?.reset(widgetIdRef.current || undefined)
    }
  }

  return (
    <div className="bg-black/75 p-6 rounded-lg max-w-lg mx-auto mb-4">
      <h2 className="text-2xl font-bold text-brand mb-2">Stay in the Loop</h2>
      <p className="text-sm text-brand-white/75 mb-4">
        Get show dates, new music announcements, and band news straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3 text-left">
        <div className="grid gap-3 sm:grid-cols-2">
          <label htmlFor="FIRSTNAME" className="block">
            <span className="sr-only">First name</span>
            <input
              id="FIRSTNAME"
              name="FIRSTNAME"
              type="text"
              autoComplete="given-name"
              placeholder="First name"
              required
              onFocus={() => setShowWidget(true)}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-white/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>

          <label htmlFor="LASTNAME" className="block">
            <span className="sr-only">Last name</span>
            <input
              id="LASTNAME"
              name="LASTNAME"
              type="text"
              autoComplete="family-name"
              placeholder="Last name"
              required
              onFocus={() => setShowWidget(true)}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-white/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>
        </div>

        <label htmlFor="EMAIL" className="block">
          <span className="sr-only">Email address</span>
          <input
            id="EMAIL"
            name="EMAIL"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            required
            onFocus={() => setShowWidget(true)}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-white/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </label>

        {showWidget ? (
          <div className="flex w-full items-center justify-center overflow-visible rounded-none border-0 bg-transparent p-0">
            <div ref={containerRef} className="flex items-center justify-center" />
          </div>
        ) : null}

        <input type="text" name="email_address_check" defaultValue="" className="hidden" />
        <input type="hidden" name="locale" value="en" />

        <button
          type="submit"
          disabled={status === 'loading'}
          onClick={() => setShowWidget(true)}
          className="w-full cursor-pointer rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand/80 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      {message ? (
        <div
          aria-live="polite"
          className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
            status === 'success'
              ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-100'
              : 'border-rose-400/30 bg-rose-500/10 text-rose-100'
          }`}
        >
          {message}
        </div>
      ) : null}

      <p className="mt-3 text-xs text-brand-white/60">No spam. Unsubscribe anytime.</p>
    </div>
  )
}
