// Middleware de autenticación y seguridad — Equipo 05
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rutas que requieren autenticación
const PROTECTED_ROUTES = ['/dashboard', '/perfil', '/admin']
// Rutas solo para no autenticados
const AUTH_ROUTES = ['/auth/login', '/auth/registro']

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          request.cookies.set({ name, value, ...options })
          response.cookies.set({ name, value, ...options })
        },
        remove(name, options) {
          request.cookies.set({ name, value: '', ...options })
          response.cookies.delete({ name, ...options })
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()
  const path = request.nextUrl.pathname

  // Proteger rutas privadas
  if (PROTECTED_ROUTES.some(r => path.startsWith(r)) && !session) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Redirigir si ya está autenticado
  if (AUTH_ROUTES.includes(path) && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Headers de seguridad adicionales
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
