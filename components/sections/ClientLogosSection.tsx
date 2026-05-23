'use client'
import { siteConfig } from '@/config/site'

const logos = [
  'Pronaca',
  'Banco del Pacífico',
  'Corporación Favorita',
  'Banco Pichincha',
  'Holcim',
  'Fybeca',
  'Tia',
  'Banco Guayaquil'
]

export default function ClientLogosSection() {
  return (
    <section 
      style={{ backgroundColor: '#FFFFFF', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', overflow: 'hidden' }}
    >
      <div className="container-site" style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Empresas que confían en nosotros
        </h3>
      </div>
      
      <div style={{ position: 'relative', display: 'flex', maxWidth: '100vw', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '128px', height: '100%', background: 'linear-gradient(to right, #FFFFFF, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '128px', height: '100%', background: 'linear-gradient(to left, #FFFFFF, transparent)', zIndex: 10, pointerEvents: 'none' }} />

        <div className="marquee-track">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              style={{ margin: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '150px' }}
              className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.02em' }}>
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
