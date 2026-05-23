'use client'
// Portfolio Section — Rediseño Corporativo Sobrio
import Link from 'next/link'
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react'
import { proyectos } from '@/config/projects'
import { motion } from 'framer-motion'

function ProjectCard({ proyecto, index }: { proyecto: typeof proyectos[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
    >
      <div className="relative h-64 bg-slate-100 overflow-hidden">
        {/* Placeholder para imagen con overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 flex items-center justify-center">
          <TrendingUp size={48} className="text-slate-400 opacity-50" />
        </div>
        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-widest border border-slate-200">
            {proyecto.industria}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-sora">
          {proyecto.titulo}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {proyecto.descripcion_corta}
        </p>

        {proyecto.resultado && (
          <div className="mb-6 p-4 bg-slate-50 rounded-xl border-l-2 border-indigo-600 flex items-center gap-3">
            <span className="text-indigo-600 font-bold text-xs">{proyecto.resultado}</span>
          </div>
        )}

        <Link 
          href={`/proyectos/${proyecto.slug}`}
          className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
        >
          Explorar Caso <ExternalLink size={16} className="ml-2" />
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
            <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Nuestro Impacto
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-sora tracking-tight">
              Casos de Éxito que <span className="text-indigo-600">Inspiran</span>
            </h2>
          </div>
          <Link href="/proyectos" className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors">
            Ver todos los proyectos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.slice(0, 3).map((proyecto, i) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
