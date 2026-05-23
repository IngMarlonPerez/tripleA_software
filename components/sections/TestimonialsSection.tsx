'use client'
// Testimonios — Rediseño Corporativo Limpio
import { testimoniales } from '@/config/projects'
import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimoniales[0]; index: number }) {
  const initials = testimonial.cliente_nombre.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col shadow-sm"
    >
      <div className="flex gap-1 mb-6">
        {[1,2,3,4,5].map(i => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      <Quote size={32} className="text-slate-100 mb-2" />

      <p className="text-slate-600 italic leading-relaxed mb-8 flex-grow">
        &ldquo;{testimonial.texto}&rdquo;
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold font-sora">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 font-sora">
            {testimonial.cliente_nombre}
          </p>
          <p className="text-xs text-slate-400">
            {testimonial.cliente_cargo} · {testimonial.empresa}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-site">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Testimonios
          </div>
          <h2 className="text-4xl font-bold text-slate-900 font-sora tracking-tight">
            Confianza depositada en <span className="text-indigo-600">Resultados</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimoniales.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
