// Datos estáticos de servicios — Equipo 01
import type { Servicio } from '@/types'

export const servicios: Servicio[] = [
  {
    id: 'web',
    titulo: 'Desarrollo Web a Medida',
    descripcion:
      'Aplicaciones web modernas, escalables y de alto rendimiento. Desde portales corporativos hasta plataformas SaaS complejas con tecnología de vanguardia.',
    icono: 'Monitor',
    tecnologias: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Supabase'],
    beneficios: [
      'Rendimiento optimizado (Core Web Vitals)',
      'Diseño responsivo para todos los dispositivos',
      'Integración con APIs y sistemas existentes',
      'Panel de administración incluido',
    ],
    href: '/servicios#web',
  },
  {
    id: 'movil',
    titulo: 'Aplicaciones Móviles',
    descripcion:
      'Apps nativas y multiplataforma para iOS y Android. Experiencias de usuario fluidas con sincronización en tiempo real y notificaciones push.',
    icono: 'Smartphone',
    tecnologias: ['React Native', 'Flutter', 'Expo', 'Firebase'],
    beneficios: [
      'Una sola base de código para iOS y Android',
      'Publicación en App Store y Google Play',
      'Modo offline y sincronización en tiempo real',
      'Push notifications integradas',
    ],
    href: '/servicios#movil',
  },
  {
    id: 'crm',
    titulo: 'CRM & Sistemas Internos',
    descripcion:
      'Sistemas de gestión empresarial a medida: CRM, ERP, facturación electrónica y automatización de procesos adaptados a tu flujo de trabajo.',
    icono: 'BarChart3',
    tecnologias: ['Next.js', 'Supabase', 'PostgreSQL', 'Node.js', 'Zapier'],
    beneficios: [
      'Gestión de clientes y ventas centralizada',
      'Automatización de procesos repetitivos',
      'Reportes e informes en tiempo real',
      'Integración con herramientas existentes',
    ],
    href: '/servicios#crm',
  },
  {
    id: 'integracion',
    titulo: 'Integración de Sistemas',
    descripcion:
      'Conectamos tus sistemas y aplicaciones existentes a través de APIs robustas. Elimina silos de información y automatiza flujos de datos entre plataformas.',
    icono: 'GitBranch',
    tecnologias: ['REST API', 'GraphQL', 'Webhooks', 'n8n', 'Zapier'],
    beneficios: [
      'Eliminación de trabajo manual duplicado',
      'Flujos de datos en tiempo real',
      'Documentación técnica completa',
      'Monitoreo y alertas de errores',
    ],
    href: '/servicios#integracion',
  },
  {
    id: 'consultoria',
    titulo: 'Consultoría Tecnológica',
    descripcion:
      'Asesoría estratégica para tomar las mejores decisiones tecnológicas. Auditorías de código, roadmap técnico y arquitectura de sistemas para tu empresa.',
    icono: 'Lightbulb',
    tecnologias: ['Arquitectura Cloud', 'AWS', 'GCP', 'Azure', 'DevOps'],
    beneficios: [
      'Diagnóstico tecnológico de tu empresa',
      'Roadmap técnico a 12-24 meses',
      'Selección del stack tecnológico ideal',
      'Acompañamiento en la implementación',
    ],
    href: '/servicios#consultoria',
  },
  {
    id: 'ecommerce',
    titulo: 'E-Commerce & Marketplaces',
    descripcion:
      'Tiendas en línea y marketplaces de alto rendimiento con gestión de inventario, pagos seguros y experiencia de compra optimizada para conversión.',
    icono: 'ShoppingCart',
    tecnologias: ['Next.js', 'Stripe', 'PayPal', 'Supabase', 'Algolia'],
    beneficios: [
      'Checkout optimizado para conversión',
      'Múltiples métodos de pago',
      'Gestión de inventario en tiempo real',
      'SEO para e-commerce incluido',
    ],
    href: '/servicios#ecommerce',
  },
]
