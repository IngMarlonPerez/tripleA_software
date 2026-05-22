'use client'
import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { FadeIn } from '@/components/ui/FadeIn'

export default function CTASection() {
  return (
    <section style={{ backgroundColor: '#0D1117', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(79,70,229,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-site" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <FadeIn>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div className="section-label" style={{ marginBottom: '24px', display: 'inline-flex', backgroundColor: 'rgba(79,70,229,0.15)', color: '#818CF8', borderColor: 'rgba(79,70,229,0.3)' }}>
              ¿Listo para empezar?
            </div>

            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Tu próximo proyecto comienza<br />con una conversación
            </h2>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#64748B', lineHeight: 1.7, marginBottom: '48px' }}>
              Cuéntanos tu idea y te decimos cómo hacerla realidad. Sin compromisos, sin costo. Solo soluciones.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '48px' }}>
              <Link href="/contacto" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
                Hablemos de tu proyecto
                <ArrowRight size={18} />
              </Link>
              <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '16px', padding: '16px 36px', color: '#CBD5E1', borderColor: 'rgba(255,255,255,0.2)' }}>
                <Calendar size={18} />
                Agendar reunión
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
              <a href={`mailto:${siteConfig.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', textDecoration: 'none', transition: 'color 200ms ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#CBD5E1' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B' }}>
                <MessageCircle size={16} color="#4F46E5" />
                {siteConfig.email}
              </a>
              <span style={{ color: '#374151' }}>·</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#475569' }}>
                Respondemos en menos de 24 horas
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
