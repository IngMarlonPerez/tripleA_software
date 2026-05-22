'use client'
// Hero Section — Rediseño Premium
// Inspirado en Quantum Computing Data + FIDEVAL
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

// Partículas decorativas flotantes
const particles = [
  { size: 6, top: '15%', left: '8%', delay: '0s', dur: '6s' },
  { size: 4, top: '25%', right: '12%', delay: '1s', dur: '8s' },
  { size: 8, top: '60%', left: '5%', delay: '2s', dur: '7s' },
  { size: 5, top: '70%', right: '8%', delay: '0.5s', dur: '9s' },
  { size: 3, top: '40%', left: '15%', delay: '3s', dur: '5s' },
  { size: 7, top: '80%', right: '20%', delay: '1.5s', dur: '6s' },
]

// Terminal mockup animado para el lado derecho
const codeLines = [
  { text: 'npx create-next-app@latest triple-a', color: '#06B6D4', prefix: '$ ' },
  { text: '✓ Configurando TypeScript...', color: '#16A34A', prefix: '  ' },
  { text: '✓ Integrando Supabase Auth...', color: '#16A34A', prefix: '  ' },
  { text: '✓ Desplegando en Vercel...', color: '#16A34A', prefix: '  ' },
  { text: '→ Tu app está lista en 3 minutos', color: '#F59E0B', prefix: '  ' },
]

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0D1117 0%, #111827 50%, #0D1117 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 8s ease infinite',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
      }}
      aria-label="Hero — Propuesta de valor principal"
    >
      {/* Gradiente radial principal */}
      <div style={{ position: 'absolute', top: '0%', left: '30%', width: '900px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(79,70,229,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0%', right: '10%', width: '600px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Grid de fondo */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '64px 64px', pointerEvents: 'none' }} />

      {/* Partículas flotantes */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            right: (p as { right?: string }).right,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: i % 2 === 0
              ? 'linear-gradient(135deg, #4F46E5, #06B6D4)'
              : 'rgba(79,70,229,0.4)',
            animation: `${i % 2 === 0 ? 'float' : 'float-reverse'} ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
            pointerEvents: 'none',
            filter: 'blur(1px)',
          }}
        />
      ))}

      <div className="container-site" style={{ position: 'relative', zIndex: 1, paddingTop: '60px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* Columna izquierda — Texto */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', backgroundColor: 'rgba(79,70,229,0.15)', border: '1px solid rgba(79,70,229,0.3)', borderRadius: '999px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06B6D4', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#06B6D4', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Empresa ecuatoriana de software
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants}
              style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.08, marginBottom: '24px', letterSpacing: '-0.03em' }}>
              Convertimos tus ideas en{' '}
              <span style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                software que impulsa
              </span>{' '}
              tu negocio
            </motion.h1>

            <motion.p variants={itemVariants}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#94A3B8', lineHeight: 1.75, marginBottom: '40px', maxWidth: '500px' }}>
              Desarrollo de software a medida, aplicaciones web y móviles, CRM e integración de sistemas para empresas que quieren crecer en Ecuador.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <Link href="/contacto" className="btn-primary btn-shine" style={{ fontSize: '16px', padding: '16px 36px' }}>
                Hablemos de tu proyecto
                <ArrowRight size={18} />
              </Link>
              <Link href="/proyectos" className="btn-secondary" style={{ fontSize: '16px', padding: '16px 32px', color: '#CBD5E1', borderColor: 'rgba(255,255,255,0.2)' }}>
                <Play size={16} />
                Ver proyectos
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex' }}>
                  {['M', 'V', 'C'].map((letter, i) => (
                    <div key={letter} style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #0D1117', marginLeft: i > 0 ? '-8px' : '0', fontSize: '12px', fontWeight: 700, color: '#FFF', fontFamily: 'Sora, sans-serif' }}>
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#64748B' }}>
                    <strong style={{ color: '#FFFFFF' }}>+30</strong> clientes satisfechos
                  </span>
                </div>
              </div>
              <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#64748B' }}>4.9/5</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha — Terminal mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ position: 'relative' }}
          >
            {/* Glow detrás del terminal */}
            <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at center, rgba(79,70,229,0.2) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

            <div style={{ position: 'relative', backgroundColor: '#161B22', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 80px rgba(0,0,0,0.5)' }}>
              {/* Barra de título del terminal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#475569', marginLeft: '12px' }}>terminal — triple-a</span>
              </div>

              {/* Código del terminal */}
              <div style={{ padding: '24px 20px' }}>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.4, duration: 0.4 }}
                    style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', lineHeight: 2.2, color: line.color }}
                  >
                    <span style={{ color: '#475569' }}>{line.prefix}</span>{line.text}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 3.5, duration: 1, repeat: Infinity }}
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#06B6D4', marginTop: '4px' }}
                >
                  █
                </motion.div>
              </div>
            </div>

            {/* Badge flotante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              style={{ position: 'absolute', bottom: '-20px', left: '-20px', backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '14px 20px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #16A34A, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: '#0F172A', margin: 0 }}>Deploy exitoso</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#64748B', margin: 0 }}>hace 2 minutos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#475569', animation: 'bounce 2s infinite' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}
