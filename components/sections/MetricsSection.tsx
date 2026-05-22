'use client'
// Métricas — Rediseño estilo FIDEVAL con fondo oscuro y números enormes
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
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
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
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      style={{ textAlign: 'center', padding: '48px 24px', position: 'relative' }}
    >
      <div style={{
        fontFamily: 'Sora, sans-serif',
        fontSize: 'clamp(44px, 6vw, 72px)',
        fontWeight: 700,
        color: '#FFFFFF',
        lineHeight: 1,
        marginBottom: '12px',
        letterSpacing: '-0.03em',
      }}>
        <span style={{ color: '#06B6D4' }}>+</span>
        {isVisible ? count : 0}{suffix}
      </div>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px',
        color: 'rgba(255,255,255,0.6)',
        margin: 0,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        {etiqueta}
      </p>
    </motion.div>
  )
}

export default function MetricsSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Métricas y logros de TRIPLE_A"
    >
      {/* Decoración de fondo */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(79,70,229,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        {/* Título de sección */}
        <div style={{ textAlign: 'center', paddingTop: '64px', marginBottom: '16px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#818CF8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            TRIPLE_A en números
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', paddingBottom: '64px' }}>
          {siteConfig.metricas.map((metrica, i) => (
            <div
              key={metrica.etiqueta}
              style={{
                borderRight: i < siteConfig.metricas.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <MetricCard valor={metrica.valor} etiqueta={metrica.etiqueta} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
