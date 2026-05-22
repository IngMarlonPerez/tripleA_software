'use client'
// Servicios — Rediseño con cards visuales premium
import Link from 'next/link'
import { Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart, ArrowRight } from 'lucide-react'
import { servicios } from '@/config/services'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart,
}

// Gradiente visual por cada servicio
const serviceGradients = [
  'linear-gradient(135deg, #4F46E5, #7C3AED)',
  'linear-gradient(135deg, #06B6D4, #0EA5E9)',
  'linear-gradient(135deg, #16A34A, #059669)',
  'linear-gradient(135deg, #F59E0B, #EF4444)',
  'linear-gradient(135deg, #8B5CF6, #EC4899)',
  'linear-gradient(135deg, #0EA5E9, #4F46E5)',
]

function ServiceCard({ servicio, index }: { servicio: typeof servicios[0]; index: number }) {
  const Icon = iconMap[servicio.icono] || Monitor
  const gradient = serviceGradients[index % serviceGradients.length]

  return (
    <StaggerItem>
      <div
        className="service-card-glow"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        }}
      >
        {/* Header visual con gradiente */}
        <div style={{
          height: '120px',
          background: gradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Patrón decorativo */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px, 30px 30px' }} />
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.3)',
          }}>
            <Icon size={30} color="#FFFFFF" strokeWidth={1.8} />
          </div>
        </div>

        {/* Contenido */}
        <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
          <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '19px', fontWeight: 600, color: '#0F172A', lineHeight: 1.3, margin: 0 }}>
            {servicio.titulo}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', lineHeight: 1.75, margin: 0 }}>
            {servicio.descripcion}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {servicio.tecnologias.slice(0, 3).map((tech) => (
              <span key={tech} className="badge-tech" style={{ fontSize: '11px', padding: '3px 10px' }}>{tech}</span>
            ))}
            {servicio.tecnologias.length > 3 && (
              <span className="badge-tech" style={{ fontSize: '11px', padding: '3px 10px' }}>+{servicio.tecnologias.length - 3}</span>
            )}
          </div>
          <Link href={servicio.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#4F46E5', textDecoration: 'none', marginTop: 'auto' }}>
            Más información <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </StaggerItem>
  )
}

export default function ServicesSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }} id="servicios">
      <div className="container-site">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>Nuestros Servicios</div>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#0F172A', marginBottom: '16px', lineHeight: 1.2 }}>
              Todo lo que tu empresa necesita<br />para digitalizar y crecer
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Desde la primera línea de código hasta el lanzamiento. Soluciones sólidas, escalables y adaptadas a tu negocio.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {servicios.map((servicio, i) => (
              <ServiceCard key={servicio.id} servicio={servicio} index={i} />
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link href="/servicios" className="btn-secondary" style={{ fontSize: '15px' }}>
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
