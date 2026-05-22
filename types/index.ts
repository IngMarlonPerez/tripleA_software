// Tipos globales de TypeScript — TripleSoftware
// Equipo 01 — Arquitectura & Sistema

export interface Proyecto {
  id: string
  titulo: string
  slug: string
  industria: string
  descripcion_corta: string
  descripcion_larga: string
  imagen_portada?: string
  tecnologias: string[]
  resultado?: string
  activo: boolean
  orden: number
}

export interface Testimonial {
  id: string
  cliente_nombre: string
  cliente_cargo?: string
  empresa: string
  avatar_url?: string
  texto: string
  proyecto_id?: string
  activo: boolean
}

export interface Lead {
  id?: string
  nombre: string
  empresa?: string
  email: string
  telefono?: string
  tipo_proyecto: 'web' | 'movil' | 'crm' | 'consultoria' | 'otro'
  presupuesto: '1000-5000' | '5000-15000' | '15000-50000' | '50000+'
  descripcion: string
  estado?: 'nuevo' | 'contactado' | 'en_proceso' | 'cerrado' | 'descartado'
  fuente?: 'formulario' | 'chatbot' | 'calendly'
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatSession {
  id?: string
  session_id: string
  user_email?: string
  messages: ChatMessage[]
  intent_detected?: 'consulta' | 'cotizacion' | 'soporte' | 'otro'
  converted?: boolean
}

export interface Servicio {
  id: string
  titulo: string
  descripcion: string
  icono: string
  tecnologias: string[]
  beneficios: string[]
  href: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
