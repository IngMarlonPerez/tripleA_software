'use client'
// Hero Section — Rediseño Corporativo Minimalista
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-white"
      style={{ minHeight: '90vh', paddingTop: '80px' }}
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.05),transparent_50%)]" />
      </div>

      <div className="container-site relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-slate-50 border border-slate-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Líderes en Desarrollo de Software en Ecuador
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Soluciones de <span className="text-indigo-600">Software</span> a Medida para Empresas que no se Detienen
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Especialistas en desarrollo web, aplicaciones móviles y sistemas ERP personalizados. Transformamos la complejidad técnica en ventaja competitiva para tu negocio.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contacto" className="btn-primary w-full sm:w-auto px-10 py-4 text-base">
              Iniciar mi Proyecto
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link href="/proyectos" className="btn-secondary w-full sm:w-auto px-10 py-4 text-base bg-white">
              Explorar Portafolio
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-20 pt-10 border-t border-slate-100"
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Empresas que confían en nosotros
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-sora text-xl font-bold text-slate-900">TECNOGRAP</span>
              <span className="font-sora text-xl font-bold text-slate-900">FIDEVAL</span>
              <span className="font-sora text-xl font-bold text-slate-900">DISTRIBUIDORA</span>
              <span className="font-sora text-xl font-bold text-slate-900">EDUCAP</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
