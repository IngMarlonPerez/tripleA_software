// Página de Proyectos — Server Component (Fase 5 — SEO metadata)
import type { Metadata } from 'next'
import { proyectos } from '@/config/projects'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos — TRIPLE_A',
  description: 'Explora nuestros casos de éxito y proyectos reales de desarrollo web, apps móviles y CRM empresarial en Ecuador. Soluciones a medida con impacto medible.',
}

export default function ProyectosPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-site" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '20px', display: 'inline-flex', backgroundColor: 'rgba(6,182,212,0.15)', color: '#06B6D4', borderColor: 'rgba(6,182,212,0.3)' }}>
            Portafolio
          </div>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em', maxWidth: '700px', margin: '0 auto 20px' }}>
            Proyectos que generaron resultados reales
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#64748B', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 40px' }}>
            Cada proyecto es una historia de transformación. Conoce los retos, las soluciones y los resultados medibles.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8FAFC', padding: '40px 0 80px' }}>
        <ProjectsGrid initialProyectos={proyectos} />
      </section>

      <CTASection />
    </>
  )
}
