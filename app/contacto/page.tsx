// Página de Contacto — Server Component (Fase 5 — SEO metadata)
import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto — TRIPLE_A',
  description: 'Contáctanos para iniciar el desarrollo de tu aplicación web, app móvil, CRM o consultoría tecnológica en Ecuador. Te responderemos en menos de 24 horas.',
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 0%, rgba(6,182,212,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-site" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '20px', display: 'inline-flex', backgroundColor: 'rgba(6,182,212,0.15)', color: '#06B6D4', borderColor: 'rgba(6,182,212,0.3)' }}>
            Contacto
          </div>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em', maxWidth: '640px', margin: '0 auto 16px' }}>
            Cuéntanos tu proyecto
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            Te respondemos en menos de 24 horas con una propuesta personalizada. Sin compromiso.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '64px', alignItems: 'start' }}>

            {/* Formulario */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '48px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <ContactForm />
            </div>

            {/* Info lateral */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: Mail, titulo: 'Email', valor: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, titulo: 'Teléfono', valor: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { icon: MapPin, titulo: 'Ubicación', valor: 'Ecuador, Latinoamérica', href: '#' },
              ].map(({ icon: Icon, titulo, valor, href }) => (
                <a key={titulo} href={href} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', textDecoration: 'none', transition: 'border-color 200ms ease' }}
                  // inline hover triggers are simple or css class based, let's keep inline values
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color="#4F46E5" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: '#0F172A', margin: '0 0 4px' }}>{titulo}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', margin: 0 }}>{valor}</p>
                  </div>
                </a>
              ))}

              {/* Calendly */}
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', background: 'linear-gradient(135deg, #4F46E5, #4338CA)', borderRadius: '14px', textDecoration: 'none' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Calendar size={20} color="#FFFFFF" />
                </div>
                <div>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: '0 0 4px' }}>Agenda una reunión</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Elige el horario que más te convenga vía Calendly</p>
                </div>
              </a>

              {/* Tiempo de respuesta */}
              <div style={{ padding: '20px 24px', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0 }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#15803D', margin: 0 }}>
                  Respondemos en <strong>menos de 24 horas</strong> en días hábiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
