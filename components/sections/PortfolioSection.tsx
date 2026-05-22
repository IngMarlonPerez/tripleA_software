'use client'
// Portfolio — Rediseño con mesh gradient y zoom hover
import Link from 'next/link'
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react'
import { proyectos } from '@/config/projects'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

const industryColors: Record<string, string> = {
  'Distribución & Logística': '#06B6D4',
  'Educación & Capacitación': '#4F46E5',
  'Gastronomía & Retail': '#16A34A',
  'Finanzas & Contabilidad': '#F59E0B',
}

const meshPatterns = [
  'radial-gradient(circle at 20% 30%, rgba(79,70,229,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.5) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(139,92,246,0.3) 0%, transparent 60%)',
  'radial-gradient(circle at 70% 20%, rgba(6,182,212,0.6) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(79,70,229,0.5) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(16,163,163,0.3) 0%, transparent 60%)',
  'radial-gradient(circle at 80% 80%, rgba(22,163,74,0.6) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(6,182,212,0.5) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(79,70,229,0.2) 0%, transparent 60%)',
]

function ProjectCard({ proyecto, index }: { proyecto: typeof proyectos[0]; index: number }) {
  const color = industryColors[proyecto.industria] || '#4F46E5'
  const mesh = meshPatterns[index % meshPatterns.length]

  return (
    <StaggerItem>
      <div
        className="project-card-zoom"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          overflow: 'hidden',
          transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 25px 80px rgba(0,0,0,0.15)'
          e.currentTarget.style.transform = 'translateY(-8px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Visual header con mesh gradient */}
        <div style={{ overflow: 'hidden' }}>
          <div
            className="project-card-visual"
            style={{
              height: '200px',
              background: `${mesh}, linear-gradient(135deg, #0D1117, #1E1B4B)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Número de proyecto */}
            <span style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '80px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.08)',
              position: 'absolute',
              bottom: '-10px',
              right: '20px',
              lineHeight: 1,
            }}>
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Badge de industria */}
            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 500,
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: color, display: 'inline-block' }} />
                {proyecto.industria}
              </span>
            </div>

            {/* Icono central */}
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
              <TrendingUp size={28} color="rgba(255,255,255,0.8)" />
            </div>
          </div>
        </div>

        <div style={{ padding: '28px 32px 32px' }}>
          <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#0F172A', marginBottom: '10px', lineHeight: 1.3 }}>
            {proyecto.titulo}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', lineHeight: 1.75, marginBottom: '20px' }}>
            {proyecto.descripcion_corta}
          </p>

          {proyecto.resultado && (
            <div style={{ padding: '12px 16px', background: 'linear-gradient(135deg, #F0FDF4, #ECFDF5)', borderRadius: '10px', marginBottom: '20px', borderLeft: '3px solid #16A34A', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#16A34A', fontWeight: 600, margin: 0 }}>
                {proyecto.resultado}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {proyecto.tecnologias.slice(0, 4).map((tech) => (
              <span key={tech} className="badge-tech" style={{ fontSize: '11px', padding: '4px 12px' }}>{tech}</span>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
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
