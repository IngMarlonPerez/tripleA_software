'use client'
import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'
import { trackCalendlyOpen } from '@/components/analytics/GoogleAnalytics'

export function CalendlyEmbed() {
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    trackCalendlyOpen()

    return () => {
      const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existing) document.head.removeChild(existing)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${siteConfig.calendly}?primary_color=4F46E5`}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
