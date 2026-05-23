'use client'
// Métricas — Rediseño Corporativo Equilibrado
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
  const count = useCounter(numericValue, 1500, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center p-8"
    >
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-sora">
        {isVisible ? count : 0}{suffix}
      </div>
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-center">
        {etiqueta}
      </p>
    </motion.div>
  )
}

export default function MetricsSection() {
  return (
    <section className="bg-slate-50 py-16 border-y border-slate-100">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.metricas.map((metrica, i) => (
            <MetricCard 
              key={metrica.etiqueta} 
              valor={metrica.valor} 
              etiqueta={metrica.etiqueta} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
