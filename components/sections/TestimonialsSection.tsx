'use client'
import { testimoniales } from '@/config/projects'
import { Quote, Star } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimoniales[0]; index: number }) {
  const initials = testimonial.cliente_nombre.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <StaggerItem>
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'all 400ms ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />
          ))}
        </div>

        <Quote size={32} color="#EEF2FF" style={{ marginBottom: '-8px' }} />

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#374151', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
          &ldquo;{testimonial.texto}&rdquo;
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>{initials}</span>
          </div>
          <div>
            <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: '#0F172A', margin: 0 }}>
              {testimonial.cliente_nombre}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#64748B', margin: 0 }}>
              {testimonial.cliente_cargo} · {testimonial.empresa}
            </p>
          </div>
        </div>
      </div>
    </StaggerItem>
  )
}

export default function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
      <div className="container-site">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>Testimonios</div>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#0F172A', marginBottom: '16px', lineHeight: 1.2 }}>
              Lo que dicen nuestros clientes
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#64748B', maxWidth: '480px', margin: '0 auto' }}>
              Empresas ecuatorianas que confiaron en nosotros y transformaron su negocio con tecnología.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {testimoniales.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
