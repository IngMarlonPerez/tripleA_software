'use client'
import { Suspense } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (command: string, target: string, params?: EventParams) => void
    dataLayer?: unknown[]
  }
}

function GaPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== 'function') return
    window.gtag('config', GA_ID, {
      page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
    })
  }, [pathname, searchParams])

  return null
}

export function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GaPageTracker />
      </Suspense>
    </>
  )
}

export function trackFormSubmit() {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'form_submit', { event_category: 'engagement' })
}

export function trackChatbotOpen() {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'chatbot_open', { event_category: 'engagement' })
}

export function trackChatbotLeadCaptured() {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'chatbot_lead_captured', { event_category: 'conversion' })
}

export function trackProjectView(projectName: string) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'project_view', {
    event_category: 'engagement',
    project_name: projectName,
  })
}

export function trackCalendlyOpen() {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'calendly_open', { event_category: 'conversion' })
}
