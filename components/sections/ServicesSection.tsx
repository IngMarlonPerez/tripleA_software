'use client'
// Services Section — Rediseño Premium
// Cards con headers gradientes y badges circulares
import Link from 'next/link'
import { Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart, ArrowRight } from 'lucide-react'
import { servicios } from '@/config/services'
import { motion } from 'framer-motion'

const iconMap: Record<string, any> = {
  Monitor, Smartphone, BarChart3, GitBranch, Lightbulb, ShoppingCart,
}

const serviceGradients = [
  'from-indigo-600 to-violet-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-600',
  'from-purple-600 to-pink-600',
  'from-blue-600 to-indigo-600',
]

function ServiceCard({ servicio, index }: { servicio: typeof servicios[0]; index: number }) {
  const Icon = iconMap[servicio.icono] || Monitor
  const gradient = serviceGradients[index % serviceGradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-slate-200 rounded-[24px] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
    >
      {/* Gradient Header */}
      <div className={`h-32 bg-gradient-to-br ${gradient} relative flex items-center justify-center overflow-hidden`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        {/* Circular Icon Badge */}
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110">
          <Icon size={28} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {servicio.titulo}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {servicio.descripcion}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {servicio.tecnologias.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
              {tech}
            </span>
          ))}
        </div>

        <Link 
          href={servicio.href}
          className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all"
        >
          Saber más
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Nuestros Servicios
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Soluciones de <span className="text-gradient">Ingeniería</span> para el mundo real
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            Construimos productos digitales escalables, seguros y centrados en el usuario.
          </motion.p>
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
