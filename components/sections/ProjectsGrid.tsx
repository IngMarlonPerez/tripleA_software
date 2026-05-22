'use client'
// Grid de proyectos interactivo con filtros — Equipo 03
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { Proyecto } from '@/types'

interface ProjectsGridProps {
  initialProyectos: Proyecto[]
}

const industryColors: Record<string, string> = {
  'Distribución & Logística': '#06B6D4',
  'Educación & Capacitación': '#4F46E5',
  'Gastronomía & Retail': '#16A34A',
  'Finanzas & Contabilidad': '#F59E0B',
}

export default function ProjectsGrid({ initialProyectos }: ProjectsGridProps) {
  const [industriaFilter, setIndustriaFilter] = useState<string>('')
  const [techFilter, setTechFilter] = useState<string>('')

  const industrias = Array.from(new Set(initialProyectos.map((p) => p.industria)))
  const tecnologias = Array.from(new Set(initialProyectos.flatMap((p) => p.tecnologias)))

  const filtered = initialProyectos.filter((p) => {
    if (industriaFilter && p.industria !== industriaFilter) return false
    if (techFilter && !p.tecnologias.includes(techFilter)) return false
    return true
  })

  return (
    <div className="container-site">
      {/* Filtros */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#64748B' }}>Filtrar por:</span>

        <select
          value={industriaFilter}
          onChange={(e) => setIndustriaFilter(e.target.value)}
          style={{
            padding: '8px 14px', borderRadius: '8px', border: '1.5px solid #E2E8F0',
            fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0F172A',
            backgroundColor: '#FFFFFF', cursor: 'pointer', outline: 'none',
          }}
        >
          <option value="">Todas las industrias</option>
          {industrias.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>

        <select
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          style={{
            padding: '8px 14px', borderRadius: '8px', border: '1.5px solid #E2E8F0',
            fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0F172A',
            backgroundColor: '#FFFFFF', cursor: 'pointer', outline: 'none',
          }}
        >
          <option value="">Todas las tecnologías</option>
          {tecnologias.map((tech) => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>

        {(industriaFilter || techFilter) && (
          <button
            onClick={() => { setIndustriaFilter(''); setTechFilter('') }}
            style={{
              padding: '8px 14px', borderRadius: '8px', border: 'none',
              fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#DC2626',
              backgroundColor: '#FEF2F2', cursor: 'pointer',
            }}
          >
            Limpiar filtros
          </button>
        )}

        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#94A3B8', marginLeft: 'auto' }}>
          {filtered.length} proyecto{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {filtered.map((proyecto, i) => {
          const color = industryColors[proyecto.industria] || '#4F46E5'
          return (
            <article
              key={proyecto.id}
              className="hover-card-indigo-projects"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                transition: 'all 300ms ease',
              }}
            >
              <div style={{ height: '180px', background: `linear-gradient(135deg, ${color}22, ${color}55)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '56px', fontWeight: 700, color: `${color}55` }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span style={{ display: 'inline-flex', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '999px', fontSize: '12px', fontWeight: 500, color, fontFamily: 'Inter, sans-serif' }}>
                    {proyecto.industria}
                  </span>
                </div>
              </div>

              <div style={{ padding: '32px' }}>
                <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                  {proyecto.titulo}
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', lineHeight: 1.75, marginBottom: '20px' }}>
                  {proyecto.descripcion_corta}
                </p>

                {proyecto.resultado && (
                  <div style={{ padding: '10px 14px', backgroundColor: '#F0FDF4', borderRadius: '8px', marginBottom: '20px', borderLeft: '3px solid #16A34A' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#16A34A', fontWeight: 500, margin: 0 }}>✓ {proyecto.resultado}</p>
                  </div>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="badge-tech" style={{ fontSize: '11px', padding: '3px 10px' }}>{tech}</span>
                  ))}
                </div>

                <Link href={`/proyectos/${proyecto.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#4F46E5', textDecoration: 'none' }}>
                  Ver caso completo <ExternalLink size={14} />
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#94A3B8' }}>
            No se encontraron proyectos con los filtros seleccionados.
          </p>
        </div>
      )}
    </div>
  )
}
