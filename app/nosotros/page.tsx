// Página Nosotros — Server Component (Fase 5 — SEO metadata)
import type { Metadata } from 'next'
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Sobre Nosotros — TRIPLE_A',
  description: 'Conoce al equipo detrás de TRIPLE_A y Tecnograp tecnología y sistemas. Especialistas en desarrollo de software a medida, apps móviles y CRM en Ecuador.',
}

const valores = [
  { icon: Target, titulo: 'Orientados a resultados', texto: 'Cada línea de código que escribimos tiene un propósito: generar valor medible para tu negocio.' },
  { icon: Heart, titulo: 'Compromiso total', texto: 'Tratamos cada proyecto como si fuera nuestro propio negocio. Tu éxito es nuestro éxito.' },
  { icon: Globe, titulo: 'Visión latinoamericana', texto: 'Entendemos el contexto empresarial de Ecuador y Latinoamérica. Hablamos tu idioma.' },
  { icon: Award, titulo: 'Excelencia técnica', texto: 'Código limpio, arquitecturas sólidas y mejores prácticas de la industria en cada entrega.' },
]

const equipo = [
  { nombre: 'Marlon', cargo: 'CEO & Product Owner', especialidad: 'Estrategia & Negocios', inicial: 'M', color: '#4F46E5' },
  { nombre: 'Victor', cargo: 'CTO & Lead Developer', especialidad: 'Arquitectura & Backend', inicial: 'V', color: '#06B6D4' },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 0%, rgba(79,70,229,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <div className="section-label" style={{ marginBottom: '20px', display: 'inline-flex', backgroundColor: 'rgba(79,70,229,0.15)', color: '#818CF8', borderColor: 'rgba(79,70,229,0.3)' }}>
              Sobre nosotros
            </div>
            <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Construimos software que transforma negocios en Ecuador
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#64748B', lineHeight: 1.7 }}>
              Somos un equipo apasionado por la tecnología, comprometido con entregar soluciones de software que realmente funcionen y generen impacto en tu organización.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            <div style={{ padding: '40px', background: 'linear-gradient(135deg, #EEF2FF, #F0FEFF)', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={26} color="#FFFFFF" />
              </div>
              <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '22px', fontWeight: 600, color: '#0F172A', marginBottom: '14px' }}>Nuestra Misión</h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B', lineHeight: 1.8, margin: 0 }}>
                Ayudar a las empresas ecuatorianas y latinoamericanas a crecer a través de soluciones de software a medida que resuelven problemas reales, con calidad de nivel internacional y precios accesibles para el mercado local.
              </p>
            </div>
            <div style={{ padding: '40px', background: 'linear-gradient(135deg, #F0FEFF, #EEF2FF)', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#06B6D4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Eye size={26} color="#FFFFFF" />
              </div>
              <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '22px', fontWeight: 600, color: '#0F172A', marginBottom: '14px' }}>Nuestra Visión</h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B', lineHeight: 1.8, margin: 0 }}>
                Convertirnos en el socio tecnológico de referencia para PYMES y empresas en crecimiento de Ecuador y Latinoamérica, siendo reconocidos por la calidad de nuestro código, la transparencia en nuestros procesos y los resultados que generamos.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 600, color: '#0F172A', marginBottom: '12px' }}>Nuestros valores</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#64748B' }}>Los principios que guían cada decisión que tomamos</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {valores.map((v) => (
              <div
                key={v.titulo}
                className="hover-card-indigo"
                style={{
                  padding: '28px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  transition: 'all 300ms ease',
                }}
              >
                <v.icon size={28} color="#4F46E5" strokeWidth={1.8} style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', fontWeight: 600, color: '#0F172A', marginBottom: '10px' }}>{v.titulo}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', lineHeight: 1.75, margin: 0 }}>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0', borderTop: '1px solid #E2E8F0' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '16px', display: 'inline-flex' }}><Users size={14} /> Equipo</div>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 600, color: '#0F172A', marginBottom: '12px' }}>Las personas detrás del código</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
            {equipo.map((persona) => (
              <div key={persona.nombre} style={{ textAlign: 'center', maxWidth: '280px' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: `linear-gradient(135deg, ${persona.color}, #0D1117)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 8px 32px ${persona.color}40` }}>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '36px', fontWeight: 700, color: '#FFFFFF' }}>{persona.inicial}</span>
                </div>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#0F172A', marginBottom: '6px' }}>{persona.nombre}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: persona.color, marginBottom: '6px' }}>{persona.cargo}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#64748B' }}>{persona.especialidad}</p>
              </div>
            ))}
          </div>

          {/* Tecnograpp */}
          <div style={{ marginTop: '64px', padding: '40px', backgroundColor: '#0D1117', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
            <Globe size={32} color="#4F46E5" />
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#FFFFFF' }}>
              Somos parte de <span style={{ color: '#4F46E5' }}>Tecnograp tecnología y sistemas</span>
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B', maxWidth: '560px', lineHeight: 1.75 }}>
              TRIPLE_A es la unidad de desarrollo de software a medida de Tecnograp tecnología y sistemas, empresa ecuatoriana de tecnología con más de 5 años de experiencia en el mercado nacional.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
