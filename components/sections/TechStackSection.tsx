'use client'
import { useState } from 'react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

const techStack = [
  { name: 'Next.js', category: 'Frontend', color: '#000000', bg: '#F8FAFC' },
  { name: 'React', category: 'Frontend', color: '#61DAFB', bg: '#F0FEFF' },
  { name: 'TypeScript', category: 'Lenguaje', color: '#3178C6', bg: '#EFF6FF' },
  { name: 'Tailwind', category: 'Estilos', color: '#06B6D4', bg: '#F0FEFF' },
  { name: 'Node.js', category: 'Backend', color: '#339933', bg: '#F0FDF4' },
  { name: 'Supabase', category: 'Base de datos', color: '#3ECF8E', bg: '#F0FDF4' },
  { name: 'PostgreSQL', category: 'Base de datos', color: '#336791', bg: '#EFF6FF' },
  { name: 'React Native', category: 'Mobile', color: '#61DAFB', bg: '#F0FEFF' },
  { name: 'Flutter', category: 'Mobile', color: '#0553B1', bg: '#EFF6FF' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900', bg: '#FFFBEB' },
  { name: 'Vercel', category: 'Deploy', color: '#000000', bg: '#F8FAFC' },
  { name: 'Stripe', category: 'Pagos', color: '#635BFF', bg: '#EEF2FF' },
]

export default function TechStackSection() {
  const [tooltip, setTooltip] = useState<string | null>(null)

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0', borderTop: '1px solid #E2E8F0' }}>
      <div className="container-site">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              Stack Tecnológico
            </p>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 600, color: '#0F172A' }}>
              Las mejores herramientas para cada desafío
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <div
                  onMouseEnter={() => setTooltip(tech.name)}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    position: 'relative',
                    padding: '12px 24px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid',
                    borderColor: tooltip === tech.name ? tech.color : '#E2E8F0',
                    borderRadius: '12px',
                    cursor: 'default',
                    transition: 'all 250ms ease',
                    boxShadow: tooltip === tech.name ? `0 4px 20px ${tech.color}30` : 'none',
                  }}
                >
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: tooltip === tech.name ? tech.color : '#374151' }}>
                    {tech.name}
                  </span>
                  {tooltip === tech.name && (
                    <div style={{ position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#0F172A', color: '#FFFFFF', fontSize: '11px', fontFamily: 'Inter, sans-serif', padding: '4px 10px', borderRadius: '6px', whiteSpace: 'nowrap', zIndex: 10 }}>
                      {tech.category}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
