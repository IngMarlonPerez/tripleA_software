'use client'
// Formulario de contacto — Equipo 07
// Componente reutilizable con React Hook Form + Zod

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'
import { siteConfig } from '@/config/site'
import { trackFormSubmit } from '@/components/analytics/GoogleAnalytics'

const inputStyle = (hasError: boolean) => ({
  width: '100%',
  padding: '12px 16px',
  border: `1.5px solid ${hasError ? '#DC2626' : '#E2E8F0'}`,
  borderRadius: '10px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  color: '#0F172A',
  backgroundColor: '#FFFFFF',
  outline: 'none',
  transition: 'border-color 200ms ease',
  boxSizing: 'border-box' as const,
})

const labelStyle = {
  display: 'block',
  fontFamily: 'Inter, sans-serif',
  fontSize: '13px',
  fontWeight: 500,
  color: '#374151',
  marginBottom: '6px',
}

const errorStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  color: '#DC2626',
  marginTop: '4px',
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Error al enviar')
      setSubmitted(true)
      trackFormSubmit()
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Error al enviar el formulario')
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <CheckCircle2 size={36} color="#16A34A" />
        </div>
        <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '12px' }}>¡Mensaje enviado!</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#64748B', lineHeight: 1.7 }}>
          Gracias por contactarnos. Te responderemos en menos de 24 horas con una propuesta personalizada.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '22px', fontWeight: 600, color: '#0F172A', marginBottom: '32px' }}>Formulario de contacto</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div>
          <label style={labelStyle} htmlFor="nombre">Nombre *</label>
          <input id="nombre" type="text" {...register('nombre')} style={inputStyle(!!errors.nombre)} placeholder="Tu nombre" />
          {errors.nombre && <p style={errorStyle}>{errors.nombre.message}</p>}
        </div>
        <div>
          <label style={labelStyle} htmlFor="empresa">Empresa</label>
          <input id="empresa" type="text" {...register('empresa')} style={inputStyle(!!errors.empresa)} placeholder="Tu empresa" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div>
          <label style={labelStyle} htmlFor="email">Email *</label>
          <input id="email" type="email" {...register('email')} style={inputStyle(!!errors.email)} placeholder="tu@email.com" />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>
        <div>
          <label style={labelStyle} htmlFor="telefono">Teléfono</label>
          <input id="telefono" type="tel" {...register('telefono')} style={inputStyle(!!errors.telefono)} placeholder="+593 99 999 9999" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div>
          <label style={labelStyle} htmlFor="tipo_proyecto">Tipo de proyecto *</label>
          <select id="tipo_proyecto" {...register('tipo_proyecto')} style={{ ...inputStyle(!!errors.tipo_proyecto), cursor: 'pointer' }}>
            <option value="">Seleccionar...</option>
            <option value="web">Aplicación Web</option>
            <option value="movil">App Móvil</option>
            <option value="crm">CRM / Sistema Interno</option>
            <option value="consultoria">Consultoría</option>
            <option value="otro">Otro</option>
          </select>
          {errors.tipo_proyecto && <p style={errorStyle}>{errors.tipo_proyecto.message}</p>}
        </div>
        <div>
          <label style={labelStyle} htmlFor="presupuesto">Presupuesto estimado *</label>
          <select id="presupuesto" {...register('presupuesto')} style={{ ...inputStyle(!!errors.presupuesto), cursor: 'pointer' }}>
            <option value="">Seleccionar...</option>
            <option value="1000-5000">$1,000 – $5,000</option>
            <option value="5000-15000">$5,000 – $15,000</option>
            <option value="15000-50000">$15,000 – $50,000</option>
            <option value="50000+">$50,000+</option>
          </select>
          {errors.presupuesto && <p style={errorStyle}>{errors.presupuesto.message}</p>}
        </div>
      </div>

      <div style={{ marginBottom: '28px' }}>
        <label style={labelStyle} htmlFor="descripcion">Descripción del proyecto *</label>
        <textarea id="descripcion" {...register('descripcion')} rows={5} style={{ ...inputStyle(!!errors.descripcion), resize: 'vertical' }} placeholder="Cuéntanos qué necesitas construir, cuál es el problema que quieres resolver y cualquier detalle relevante..." />
        {errors.descripcion && <p style={errorStyle}>{errors.descripcion.message}</p>}
      </div>

      {serverError && (
        <div style={{ padding: '12px 16px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', marginBottom: '20px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#DC2626', margin: 0 }}>{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '14px', opacity: isSubmitting ? 0.7 : 1 }}
      >
        {isSubmitting ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Enviando...</> : <><Send size={18} /> Enviar mensaje</>}
      </button>

      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#94A3B8', textAlign: 'center', marginTop: '16px' }}>
        Al enviar aceptas que te contactemos para responder tu consulta. Sin spam.
      </p>
    </form>
  )
}
