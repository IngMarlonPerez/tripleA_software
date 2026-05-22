'use client'
// Hero Section — Rediseño Premium v2
// Layout asimétrico, partículas flotantes y mockup de terminal Quantum
import Link from 'next/link'
import { ArrowRight, Play, ChevronDown, Terminal, Cpu, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const terminalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 } },
}

const floatingParticles = [
  { size: 10, top: '10%', left: '5%', color: 'rgba(79, 70, 229, 0.2)', delay: 0 },
  { size: 15, top: '20%', right: '10%', color: 'rgba(6, 182, 212, 0.15)', delay: 1 },
  { size: 8, bottom: '15%', left: '12%', color: 'rgba(79, 70, 229, 0.1)', delay: 2 },
  { size: 20, bottom: '25%', right: '15%', color: 'rgba(6, 182, 212, 0.1)', delay: 0.5 },
]

const codeLines = [
  { text: 'system.init()', color: '#94A3B8' },
  { text: 'loading core modules...', color: '#64748B' },
  { text: 'database.connect("supabase")', color: '#3ECF8E' },
  { text: 'auth.initialize("google", "github")', color: '#4F46E5' },
  { text: 'ui.render("nextjs-v14")', color: '#06B6D4' },
  { text: '>> TRIPLE_A SYSTEM READY', color: '#FFFFFF' },
]

export default function HeroSection() {
  return (
    <section className="bg-mesh min-h-screen relative flex items-center overflow-hidden pt-20">
      {/* Grid decorativo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Partículas flotantes */}
      {floatingParticles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl pointer-events-none"
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: p.delay,
          }}
          style={{
            width: p.size * 10,
            height: p.size * 10,
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            background: p.color,
          }}
        />
      ))}

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Contenido Izquierdo (Col 7) */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/10 border border-indigo-600/20 rounded-full mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse-premium" />
              <span className="text-xs font-semibold text-cyan-500 uppercase tracking-widest">
                Software Factory Premium
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-white mb-6 leading-[1.1]"
            >
              Arquitectura Digital <br />
              <span className="text-gradient animate-gradient"> de Alto Impacto</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            >
              Diseñamos y construimos ecosistemas digitales que escalan. 
              Desde aplicaciones móviles hasta sistemas ERP a medida, 
              potenciados por IA y la nube.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contacto" className="btn-primary shine-effect group">
                Iniciar Proyecto
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/proyectos" className="btn-secondary !text-slate-300 !border-slate-700 hover:!border-indigo-600">
                <Play size={18} className="fill-current" />
                Explorar Portafolio
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-8 border-t border-white/5 pt-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-midnight bg-slate-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">+50 Proyectos Exitosos</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                  <span className="text-slate-500 text-xs ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contenido Derecho (Col 5) - Terminal Quantum */}
          <motion.div 
            className="lg:col-span-5 relative"
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glow effect */}
            <div className="absolute -inset-10 bg-indigo-600/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />
            
            <div className="relative bg-[#0D1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3 bg-white/[0.03] border-bottom border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                  <Terminal size={12} />
                  Quantum Console
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm space-y-3">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + i * 0.2 }}
                    className="flex gap-3"
                  >
                    <span className="text-slate-600">{i + 1}</span>
                    <span style={{ color: line.color }}>{line.text}</span>
                  </motion.div>
                ))}
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-5 bg-indigo-500 mt-2"
                />
              </div>

              {/* Decorative components */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 flex flex-col gap-4">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
                >
                  <Cpu className="text-cyan-500 mb-2" size={24} />
                  <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ['20%', '80%', '40%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-full bg-cyan-500" 
                    />
                  </div>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
                >
                  <Globe className="text-indigo-500 mb-2" size={24} />
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-2 h-2 rounded-full bg-indigo-500/50 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">Saber Más</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-slate-600" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
