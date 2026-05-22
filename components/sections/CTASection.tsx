'use client'
// CTA Section — Rediseño Premium
// Gradiente diagonal vibrante y formas decorativas
import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle, Zap } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Vibrant Diagonal Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-cyan-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
      
      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="300" cy="100" r="150" fill="white" />
          <rect x="100" y="200" width="200" height="200" fill="white" transform="rotate(45 200 300)" />
        </svg>
      </div>
      
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <Zap size={14} className="text-yellow-300 fill-yellow-300" />
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Empieza Hoy Mismo</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            ¿Tienes un desafío técnico? <br />
            <span className="text-indigo-200">Nosotros la solución.</span>
          </h2>

          <p className="text-indigo-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Únete a las empresas que ya están transformando su operación con software de alto nivel. 
            Tu visión, nuestra ejecución.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <Link 
              href="/contacto" 
              className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl hover:bg-indigo-50 transition-all group flex items-center gap-3"
            >
              Hablemos de tu proyecto
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <a 
              href={siteConfig.calendly} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-indigo-800/30 backdrop-blur-md border border-indigo-400/30 text-white rounded-2xl font-bold text-lg hover:bg-indigo-800/40 transition-all flex items-center gap-3"
            >
              <Calendar size={20} />
              Agendar Reunión
            </a>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-center pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email Directo</p>
                <p className="text-sm font-bold">{siteConfig.email}</p>
              </div>
            </div>
            
            <div className="h-8 w-px bg-white/10 hidden md:block" />
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-600 bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=cta${i}`} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-sm font-medium">
                Respuesta en <span className="text-white font-bold">menos de 24h</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
