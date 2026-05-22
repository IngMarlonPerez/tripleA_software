'use client'
import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

function useCounter(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, startCounting])

  return count
}

function MetricCard({ valor, etiqueta, index }: { valor: string; etiqueta: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const match = valor.match(/^(\d+)(.*)$/)
  const numericValue = match ? parseInt(match[1]) : 0
  const suffix = match ? match[2] : ''

  const count = useCounter(numericValue, 1800, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      style={{ textAlign: 'center', padding: '32px 24px' }}
    >
      <div style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#4F46E5', lineHeight: 1, marginBottom: '8px', letterSpacing: '-0.02em' }}>
        {isVisible ? count : 0}{suffix}
      </div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B', margin: 0, fontWeight: 500 }}>
        {etiqueta}
      </p>
    </motion.div>
  )
}

export default function MetricsSection() {
  return (
    <section style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }} aria-label="Métricas y logros de TripleSoftware">
      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0' }}>
          {siteConfig.metricas.map((metrica, i) => (
            <div key={metrica.etiqueta} style={{ borderRight: i < siteConfig.metricas.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
              <MetricCard valor={metrica.valor} etiqueta={metrica.etiqueta} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
