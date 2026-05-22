'use client'
// Metrics Section — Rediseño estilo FIDEVAL Premium
// Fondo gradiente oscuro (indigo/blue) y números enormes
import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/config/site'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 40, damping: 20 })
  const displayValue = useTransform(spring, (current) => Math.floor(current))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  )
}

function MetricCard({ valor, etiqueta, index }: { valor: string; etiqueta: string; index: number }) {
  const match = valor.match(/^(\d+)(.*)$/)
  const numericValue = match ? parseInt(match[1]) : 0
  const suffix = match ? match[2] : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-8 relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-indigo-500/5 opacity-0 hover:opacity-100 transition-opacity rounded-3xl" />
      
      <div className="text-[clamp(60px,8vw,100px)] font-bold text-white leading-none tracking-tighter mb-4 flex items-center">
        <span className="text-indigo-500 mr-2 text-[0.6em]">+</span>
        <Counter value={numericValue} suffix={suffix} />
      </div>
      
      <div className="h-1 w-12 bg-gradient-to-right from-indigo-600 to-cyan-500 mb-4 rounded-full" />
      
      <p className="text-slate-400 font-semibold uppercase tracking-[0.2em] text-xs text-center">
        {etiqueta}
      </p>
    </motion.div>
  )
}

export default function MetricsSection() {
  return (
    <section className="bg-midnight relative py-24 overflow-hidden">
      {/* Background Gradient Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
