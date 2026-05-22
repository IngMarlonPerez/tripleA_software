'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { proyectos } from '@/config/projects'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

const industryColors: Record<string, string> = {
  'Distribución & Logística': '#06B6D4',
  'Educación & Capacitación': '#4F46E5',
  'Gastronomía & Retail': '#16A34A',
  'Finanzas & Contabilidad': '#F59E0B',
}

function ProjectCard({ proyecto, index }: { proyecto: typeof proyectos[0]; index: number }) {
  const color = industryColors[proyecto.industria] || '#4F46E5'

  return (
    <StaggerItem>
      <div className="group"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'all 300ms ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)'
          e.currentTarget.style.transform = 'translateY(-6px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <div style={{ height: '200px', background: `linear-gradient(135deg, ${color}22, ${color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '48px', fontWeight: 700, color: `${color}66` }}>
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>
          <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '999px', fontSize: '12px', fontWeight: 500, color, fontFamily: 'Inter, sans-serif' }}>
              {proyecto.industria}
            </span>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#0F172A', marginBottom: '10px', lineHeight: 1.3 }}>
            {proyecto.titulo}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', lineHeight: 1.7, marginBottom: '20px' }}>
            {proyecto.descripcion_corta}
          </p>

          {proyecto.resultado && (
            <div style={{ padding: '10px 14px', backgroundColor: '#F0FDF4', borderRadius: '8px', marginBottom: '20px', borderLeft: '3px solid #16A34A' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#16A34A', fontWeight: 500, margin: 0 }}>
                ✓ {proyecto.resultado}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {proyecto.tecnologias.slice(0, 4).map((tech) => (
              <span key={tech} className="badge-tech" style={{ fontSize: '11px', padding: '3px 10px' }}>{tech}</span>
            ))}
          </div>

          <Link href={`/proyectos/${proyecto.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#4F46E5', textDecoration: 'none' }}>
            Ver caso completo <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </StaggerItem>
  )
}

export default function PortfolioSection() {
  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '96px 0' }} id="proyectos">
      <div className="container-site">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>Casos de Éxito</div>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#0F172A', marginBottom: '16px', lineHeight: 1.2 }}>
              Proyectos que generaron<br />resultados reales
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#64748B', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Cada proyecto es una historia de transformación. Conoce cómo ayudamos a nuestros clientes a crecer.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {proyectos.slice(0, 3).map((proyecto, i) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} index={i} />
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link href="/proyectos" className="btn-primary">
              Ver todos los proyectos <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
