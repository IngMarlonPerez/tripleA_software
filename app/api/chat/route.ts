// API Route: Chat con Grok — Equipo 06
import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { sanitizeText } from '@/lib/utils/sanitize'

const SYSTEM_PROMPT = `Eres el asistente virtual de TRIPLE_A (Tecnograp software ERP TRIPLE_A), empresa ecuatoriana especializada en desarrollo de software a medida, aplicaciones web y móviles, integración de sistemas y consultoría tecnológica.

PERSONALIDAD:
- Profesional pero cercano, como un experto que quiere ayudarte genuinamente
- Respuestas concisas (máximo 3 párrafos)
- Siempre enfocado en entender la necesidad del cliente antes de proponer soluciones

SERVICIOS QUE OFRECEMOS:
1. Desarrollo de software a medida (CRM, ERP, sistemas internos)
2. Aplicaciones web con Next.js, React, Node.js
3. Aplicaciones móviles (React Native, Flutter)
4. Integración de sistemas y APIs
5. Consultoría tecnológica y arquitectura
6. E-Commerce y Marketplaces

INSTRUCCIONES:
- Responde siempre en español. Si el usuario escribe en inglés, responde en inglés.
- Si detectas intención de contratar o pedir cotización, pide: nombre, empresa, email y descripción del proyecto.
- Si no puedes responder algo específico, ofrece agendar una reunión vía Calendly.
- Nunca inventes precios exactos. Di que los precios dependen del alcance del proyecto.
- Para contacto humano: contacto@triplesoftware.com
- Siempre sé amable y orientado a soluciones.

EMPRESA MATRIZ: Tecnograp tecnología y sistemas (Ecuador)
WEBSITE: triplesoftware.com`

export async function POST(request: NextRequest) {
  // Rate limiting: 20 mensajes por minuto por IP
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'
  if (!rateLimit(ip, 20, 60000)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Espera un momento.' },
      { status: 429 }
    )
  }

  try {
    const { messages, sessionId } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Formato inválido' }, { status: 400 })
    }

    // Sanitizar mensajes del usuario
    const sanitizedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role,
      content: msg.role === 'user' ? sanitizeText(msg.content) : msg.content,
    }))

    // Limitar historial a los últimos 20 mensajes
    const recentMessages = sanitizedMessages.slice(-20)

    // Llamada a Groq API
    const grokResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...recentMessages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!grokResponse.ok) {
      const errText = await grokResponse.text()
      console.error('[Chat API] Grok error:', errText)
      throw new Error('Error en Grok API')
    }

    const data = await grokResponse.json()
    const assistantMessage = data.choices?.[0]?.message?.content

    if (!assistantMessage) throw new Error('Respuesta vacía de Grok')

    // Guardar sesión en Supabase si la key está configurada
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && sessionId) {
      try {
        const { createServerClient } = await import('@/lib/supabase/server')
        const supabase = await createServerClient()
        await supabase.from('chat_sessions').upsert({
          session_id: sessionId,
          messages: [...recentMessages, { role: 'assistant', content: assistantMessage }],
          updated_at: new Date().toISOString(),
        })
      } catch (dbError) {
        // No bloquear la respuesta si falla el guardado
        console.error('[Chat API] DB save error:', dbError)
      }
    }

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('[Chat API] Error:', error)
    return NextResponse.json(
      { error: 'Error al procesar tu mensaje. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}
