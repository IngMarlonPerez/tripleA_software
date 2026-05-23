'use client'
import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle, Zap } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Vibrant Animated Background */}
      <div className="absolute inset-0 bg-midnight" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20 pointer-events-none" />
      
      {/* Massive Glows */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Glassmorphism Inner Card */}
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden border-t border-white/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Zap size={14} className="text-cyan-400 fill-cyan-400" />
              <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Escala tu negocio hoy</span>
            </div>

            <h2 className="font-sora text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Convierte tu visión en <br className="hidden md:block" />
              <span className="text-gradient-brand">Software de Alto Nivel</span>
            </h2>

            <p className="font-inter text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Únete a las empresas que ya están transformando su operación. Agenda una llamada estratégica de 15 minutos con nuestros arquitectos de software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="/contacto" 
                className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-slate-900 transition-all duration-300 bg-white rounded-full hover:scale-105 overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Hablemos de tu proyecto
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a 
                href={siteConfig.calendly} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 w-full sm:w-auto"
              >
                <Calendar size={20} className="mr-3 text-cyan-400" />
                Agendar Reunión
              </a>
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MessageCircle size={20} className="text-indigo-400" />
                </div>
                <div className="text-left">
                  <p className="font-inter text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-1">Email Directo</p>
                  <p className="font-sora text-sm font-bold text-white">{siteConfig.email}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-white/10" />
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden relative">
                      <img src={`https://i.pravatar.cc/100?u=cta${i}`} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="font-inter text-sm text-slate-300 font-medium">
                  Respuesta <br className="sm:hidden" />
                  <span className="text-white font-bold">menos de 24h</span>
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
