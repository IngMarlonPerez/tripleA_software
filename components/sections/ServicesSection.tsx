'use client'
import Link from 'next/link'
import { Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart, ArrowRight } from 'lucide-react'
import { servicios } from '@/config/services'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart,
}

function ServiceCard({ servicio, index }: { servicio: typeof servicios[0]; index: number }) {
  const Icon = iconMap[servicio.icono] || Monitor

  return (
    <StaggerItem>
      <div className="group"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #E2E8F0',
          borderRadius: '16px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transition: 'all 300ms ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#4F46E5'
          e.currentTarget.style.boxShadow = '0 10px 40px rgba(79,70,229,0.12)'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#E2E8F0'
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <div style={{ width: '52px', height: '52px', borderRadius: '12px', backgroundColor: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 300ms ease', flexShrink: 0 }}
          className="group-hover:bg-indigo-600">
          <Icon size={24} color="#4F46E5" strokeWidth={1.8} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#0F172A', marginBottom: '10px', lineHeight: 1.3 }}>
            {servicio.titulo}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', lineHeight: 1.7, margin: 0 }}>
            {servicio.descripcion}
          </p>
        </div>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
