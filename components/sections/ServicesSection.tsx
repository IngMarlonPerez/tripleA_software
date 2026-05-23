'use client'
// Servicios — Rediseño Corporativo Limpio
import Link from 'next/link'
import { Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart, ArrowRight } from 'lucide-react'
import { servicios } from '@/config/services'
import { motion } from 'framer-motion'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart,
}

function ServiceCard({ servicio, index }: { servicio: typeof servicios[0]; index: number }) {
  const Icon = iconMap[servicio.icono] || Monitor

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white p-10 rounded-[32px] border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 flex flex-col"
    >
      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-500">
        <Icon size={28} className="text-indigo-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4 font-sora">
        {servicio.titulo}
      </h3>
      
      <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
        {servicio.descripcion}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {servicio.tecnologias.slice(0, 3).map((tech) => (
          <span key={tech} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {tech}
          </span>
        ))}
      </div>

      <Link 
        href={servicio.href} 
        className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        Saber más <ArrowRight size={16} className="ml-2" />
      </Link>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="container-site">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Nuestras Capacidades
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sora tracking-tight">
            Desarrollamos soluciones que <span className="text-indigo-600">escalan</span> con tu negocio
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Desde la arquitectura inicial hasta el despliegue final, aportamos valor en cada etapa del ciclo de vida del software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, i) => (
            <ServiceCard key={servicio.id} servicio={servicio} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
