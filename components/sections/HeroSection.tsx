'use client'
import Link from 'next/link'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

const techBadges = ['Next.js', 'React', 'Supabase', 'Node.js', 'React Native', 'Flutter', 'PostgreSQL', 'AWS']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#0D1117',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
      }}
      aria-label="Hero — Propuesta de valor principal"
    >
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(79,70,229,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '100px' }}>
        <motion.div
          style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', backgroundColor: 'rgba(79,70,229,0.15)', border: '1px solid rgba(79,70,229,0.3)', borderRadius: '999px', marginBottom: '32px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06B6D4', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#06B6D4', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Empresa ecuatoriana de software
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants}
            style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Convertimos tus ideas en{' '}
            <span style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              software que impulsa
            </span>{' '}
            tu negocio
          </motion.h1>

          <motion.p variants={itemVariants}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#64748B', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto 48px' }}>
            Desarrollo de software a medida, aplicaciones web y móviles, CRM e integración de sistemas para empresas que quieren crecer en Ecuador y Latinoamérica.
          </motion.p>

          <motion.div variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '64px' }}>
            <Link href="/contacto" className="btn-primary" style={{ fontSize: '16px', padding: '14px 32px' }}>
              Hablemos de tu proyecto
              <ArrowRight size={18} />
            </Link>
            <Link href="/proyectos" className="btn-secondary" style={{ fontSize: '16px', padding: '14px 32px', color: '#CBD5E1', borderColor: 'rgba(255,255,255,0.2)' }}>
              <Play size={16} />
              Ver proyectos
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {techBadges.map((tech) => (
              <span key={tech} className="badge-tech" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#94A3B8', borderColor: 'rgba(255,255,255,0.1)' }}>
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#475569', animation: 'bounce 2s infinite' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}
