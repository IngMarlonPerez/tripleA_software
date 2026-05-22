'use client'
// Portfolio Section — Rediseño Premium
// Mesh gradients y efecto zoom hover
import Link from 'next/link'
import { ArrowRight, ExternalLink, TrendingUp, ChevronRight } from 'lucide-react'
import { proyectos } from '@/config/projects'
import { motion } from 'framer-motion'

const industryColors: Record<string, string> = {
  'Distribución & Logística': 'from-cyan-500 to-blue-600',
  'Educación & Capacitación': 'from-indigo-600 to-violet-600',
  'Gastronomía & Retail': 'from-emerald-500 to-teal-600',
  'Finanzas & Contabilidad': 'from-orange-500 to-amber-600',
}

function ProjectCard({ proyecto, index }: { proyecto: typeof proyectos[0]; index: number }) {
  const gradient = industryColors[proyecto.industria] || 'from-slate-700 to-slate-900'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image / Visual Area with Zoom Hover */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:scale-110 transition-transform duration-700`} />
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-mesh opacity-30 mix-blend-overlay" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
              {proyecto.industria}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink size={18} />
            </div>
          </div>
          
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <TrendingUp className="text-white/60 mb-2" size={32} />
            <h3 className="text-2xl font-bold text-white leading-tight">
              {proyecto.titulo}
            </h3>
          </div>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-8">
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {proyecto.descripcion_corta}
        </p>

        {proyecto.resultado && (
          <div className="mb-6 p-4 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <ChevronRight size={14} className="text-white" />
            </div>
            <span className="text-emerald-700 text-xs font-bold">{proyecto.resultado}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {proyecto.tecnologias.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              #{tech}
            </span>
          ))}
        </div>

        <Link 
          href={`/proyectos/${proyecto.slug}`}
          className="flex items-center justify-center w-full py-4 bg-slate-50 rounded-xl text-slate-900 font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300 group/btn"
        >
          Ver Caso de Estudio
          <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-slate-50/50" id="proyectos">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4"
            >
              Casos de Éxito
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              Proyectos que marcan la <span className="text-gradient">Diferencia</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/proyectos" className="group flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 transition-colors">
              Ver todos los proyectos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {proyectos.slice(0, 3).map((proyecto, i) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
