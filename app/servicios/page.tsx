// Página de Servicios
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart } from 'lucide-react'
import { servicios } from '@/config/services'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Servicios — TRIPLE_A',
  description: 'Desarrollo web, apps móviles, CRM, integración de sistemas y consultoría tecnológica para empresas en Ecuador. Conoce todos nuestros servicios.',
}

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart,
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero de página */}
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            <div className="section-label" style={{ marginBottom: '20px', display: 'inline-flex', backgroundColor: 'rgba(79,70,229,0.15)', color: '#818CF8', borderColor: 'rgba(79,70,229,0.3)' }}>
              Servicios
            </div>
            <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Soluciones tecnológicas para cada etapa de tu negocio
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#64748B', lineHeight: 1.7, marginBottom: '36px' }}>
              Diseñamos, desarrollamos y mantenemos software que resuelve problemas reales. Sin templates genéricos, sin código de terceros que no entiendes.
            </p>
            <Link href="/contacto" className="btn-primary" style={{ fontSize: '16px' }}>
              Hablar con un experto <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios detallados */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {servicios.map((servicio, i) => {
              const Icon = iconMap[servicio.icono] || Monitor
              const isEven = i % 2 === 0
              return (
                <div
                  key={servicio.id}
                  id={servicio.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '64px',
                    alignItems: 'center',
                    paddingBottom: '80px',
                    borderBottom: i < servicios.length - 1 ? '1px solid #E2E8F0' : 'none',
                  }}
                >
                  {/* Info */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                      <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={26} color="#FFFFFF" strokeWidth={1.8} />
                      </div>
                      <span className="badge-tech" style={{ fontSize: '12px' }}>Servicio {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: '#0F172A', marginBottom: '16px', lineHeight: 1.25 }}>
                      {servicio.titulo}
                    </h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#64748B', lineHeight: 1.8, marginBottom: '28px' }}>
                      {servicio.descripcion}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {servicio.beneficios.map((b) => (
                        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151' }}>
                          <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contacto" className="btn-primary" style={{ fontSize: '15px' }}>
                      Cotizar este servicio <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #F0FEFF)', borderRadius: '20px', padding: '48px', display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                        {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
                          <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: c }} />
                        ))}
                      </div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#4F46E5', lineHeight: 1.8 }}>
                        <div style={{ color: '#94A3B8' }}>// Stack tecnológico</div>
                        {servicio.tecnologias.map((tech) => (
                          <div key={tech}>
                            <span style={{ color: '#06B6D4' }}>import</span>
                            <span style={{ color: '#64748B' }}> {`{ `}</span>
                            <span style={{ color: '#0F172A', fontWeight: 600 }}>{tech}</span>
                            <span style={{ color: '#64748B' }}>{` }`}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
