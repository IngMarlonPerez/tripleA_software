import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  // Autenticación con API key
  const apiKey = request.headers.get('x-api-key')
  if (apiKey !== process.env.ERP_API_KEY) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'))
    const limit = Math.min(Math.max(1, parseInt(searchParams.get('limit') ?? '50')), 100)
    const desde = searchParams.get('desde')
    const estado = searchParams.get('estado')

    const supabase = await createServerClient()
    let query = supabase
      .from('leads')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range((page - 1) * limit, page * limit - 1)

    if (desde) query = query.gte('created_at', desde)
    if (estado) query = query.eq('estado', estado)

    const { data, count, error } = await query

    if (error) {
      console.error('[ERP API] Error:', error)
      return NextResponse.json({ error: 'Error al obtener leads' }, { status: 500 })
    }

    return NextResponse.json({
      leads: data ?? [],
      total: count ?? 0,
      page,
      totalPages: Math.ceil((count ?? 0) / limit),
    })
  } catch (error) {
    console.error('[ERP API] Error:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
