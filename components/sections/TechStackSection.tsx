'use client'
// TechStack Section — Rediseño Premium
// Sección limpia con tooltips minimalistas
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const techStack = [
  { name: 'Next.js', category: 'Frontend', color: '#000000' },
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'TypeScript', category: 'Lenguaje', color: '#3178C6' },
  { name: 'Tailwind', category: 'Estilos', color: '#06B6D4' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'Supabase', category: 'BaaS', color: '#3ECF8E' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791' },
  { name: 'React Native', category: 'Mobile', color: '#61DAFB' },
  { name: 'Flutter', category: 'Mobile', color: '#0553B1' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'Vercel', category: 'Deploy', color: '#000000' },
  { name: 'Grok API', category: 'AI', color: '#F59E0B' },
]

export default function TechStackSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container-site">
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4"
          >
            Nuestro Stack Tecnológico
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-slate-900"
          >
            Ingeniería de vanguardia para cada desafío
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onMouseEnter={() => setHovered(tech.name)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              <div 
                className={`px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl cursor-default transition-all duration-300 flex items-center gap-3
                  ${hovered === tech.name ? 'border-indigo-600 bg-white shadow-xl shadow-indigo-500/10 -translate-y-1' : ''}`}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className={`text-sm font-bold transition-colors ${hovered === tech.name ? 'text-indigo-600' : 'text-slate-600'}`}>
                  {tech.name}
                </span>
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {hovered === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-md whitespace-nowrap z-20 pointer-events-none"
                  >
                    {tech.category}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 -mt-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
