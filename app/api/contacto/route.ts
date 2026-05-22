// API Route: Formulario de contacto — Equipo 07
import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { sanitizeText, sanitizeEmail } from '@/lib/utils/sanitize'
import { contactFormSchema } from '@/lib/validations/contact'
import { sendLeadNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  // Rate limiting: 5 envíos por minuto por IP
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'
  if (!rateLimit(ip, 5, 60000)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Espera un momento antes de intentar de nuevo.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()

    // Validación server-side con Zod
    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const data = result.data

    // Sanitizar inputs
    const lead = {
      nombre:        sanitizeText(data.nombre),
      empresa:       data.empresa ? sanitizeText(data.empresa) : undefined,
      email:         sanitizeEmail(data.email),
      telefono:      data.telefono ? sanitizeText(data.telefono) : undefined,
      tipo_proyecto: data.tipo_proyecto,
      presupuesto:   data.presupuesto,
      descripcion:   sanitizeText(data.descripcion),
      estado:        'nuevo' as const,
      fuente:        'formulario' as const,
    }

    // Guardar en Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createServerClient } = await import('@/lib/supabase/server')
      const supabase = await createServerClient()

      const { error: dbError } = await supabase.from('leads').insert(lead)

      if (dbError) {
        console.error('[Contacto API] Supabase error:', dbError)
      }
    }

    // Enviar email de notificación al equipo
    await sendLeadNotification(lead)

    return NextResponse.json({
      success: true,
      message: 'Tu mensaje fue enviado. Te contactaremos en menos de 24 horas. 🚀',
    })
  } catch (error) {
    console.error('[Contacto API] Error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}
