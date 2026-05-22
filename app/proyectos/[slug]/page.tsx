// Página de detalle de proyecto — [slug]
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import { proyectos, testimoniales } from '@/config/projects'
import CTASection from '@/components/sections/CTASection'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const proyecto = proyectos.find((p) => p.slug === params.slug)
  if (!proyecto) return {}
  return {
    title: `${proyecto.titulo} — TripleSoftware`,
    description: proyecto.descripcion_corta,
  }
}

export default function ProyectoDetailPage({ params }: Props) {
  const proyecto = proyectos.find((p) => p.slug === params.slug)
  if (!proyecto) notFound()

  const testimonial = testimoniales.find((t) => t.empresa.toLowerCase().includes(proyecto.industria.split(' ')[0].toLowerCase()))

  const industryColors: Record<string, string> = {
    'Distribución & Logística': '#06B6D4',
    'Educación & Capacitación': '#4F46E5',
    'Gastronomía & Retail': '#16A34A',
    'Finanzas & Contabilidad': '#F59E0B',
  }
  const color = industryColors[proyecto.industria] || '#4F46E5'

  return (
    <>
      {/* Hero del proyecto */}
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 40% 0%, ${color}20 0%, transparent 60%)`, pointerEvents: 'none' }} />
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/proyectos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', textDecoration: 'none', marginBottom: '32px' }}>
            <ArrowLeft size={16} /> Volver a proyectos
          </Link>
          <span style={{ display: 'inline-flex', padding: '4px 14px', backgroundColor: `${color}20`, borderRadius: '999px', fontSize: '13px', fontWeight: 500, color, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
            {proyecto.industria}
          </span>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px', maxWidth: '800px', letterSpacing: '-0.02em' }}>
            {proyecto.titulo}
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#64748B', lineHeight: 1.7, maxWidth: '600px' }}>
            {proyecto.descripcion_corta}
          </p>
          {proyecto.resultado && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '28px', padding: '12px 20px', backgroundColor: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', borderRadius: '12px' }}>
              <CheckCircle2 size={20} color="#4ade80" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500, color: '#4ade80' }}>
                {proyecto.resultado}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Contenido del caso */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '64px', alignItems: 'start' }}>
            {/* Descripción */}
            <div>
              <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '20px' }}>
                Sobre el proyecto
              </h2>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#64748B', lineHeight: 1.85 }}>
                {proyecto.descripcion_larga.split('\n\n').map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: '20px' }}>{paragraph}</p>
                ))}
              </div>

              {/* Testimonial */}
              {testimonial && (
                <div style={{ marginTop: '48px', padding: '32px', backgroundColor: '#F8FAFC', borderRadius: '16px', borderLeft: `4px solid ${color}` }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#374151', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
                    &ldquo;{testimonial.texto}&rdquo;
                  </p>
                  <div>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: '#0F172A', margin: 0 }}>{testimonial.cliente_nombre}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#64748B', margin: 0 }}>{testimonial.cliente_cargo} · {testimonial.empresa}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Tecnologías */}
              <div style={{ padding: '28px', border: '1px solid #E2E8F0', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', fontWeight: 600, color: '#0F172A', marginBottom: '16px' }}>Stack tecnológico</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="badge-tech">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Industria */}
              <div style={{ padding: '28px', border: '1px solid #E2E8F0', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', fontWeight: 600, color: '#0F172A', marginBottom: '12px' }}>Industria</h3>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B' }}>{proyecto.industria}</span>
              </div>

              {/* CTA sidebar */}
              <div style={{ padding: '28px', background: 'linear-gradient(135deg, #4F46E5, #4338CA)', borderRadius: '16px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>¿Quieres algo similar?</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>Cuéntanos tu proyecto y lo hacemos realidad.</p>
                <Link href="/contacto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', backgroundColor: '#FFFFFF', color: '#4F46E5', borderRadius: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                  Iniciar proyecto <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Otros proyectos */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0' }}>
        <div className="container-site">
          <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '32px' }}>Otros proyectos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {proyectos.filter(p => p.slug !== params.slug).slice(0, 3).map(p => (
              <Link key={p.id} href={`/proyectos/${p.slug}`} style={{ padding: '24px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', textDecoration: 'none', display: 'block', transition: 'border-color 200ms ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4F46E5' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0' }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#64748B', display: 'block', marginBottom: '8px' }}>{p.industria}</span>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '15px', fontWeight: 600, color: '#0F172A', margin: 0, lineHeight: 1.3 }}>{p.titulo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
