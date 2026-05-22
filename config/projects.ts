// Datos de proyectos del portafolio — Equipo 01
import type { Proyecto } from '@/types'

export const proyectos: Proyecto[] = [
  {
    id: '1',
    titulo: 'Sistema ERP para Distribuidora Nacional',
    slug: 'erp-distribuidora-nacional',
    industria: 'Distribución & Logística',
    descripcion_corta: 'ERP personalizado que unificó la gestión de 500+ clientes y automatizó el proceso de ventas de punta a punta.',
    descripcion_larga: `La empresa enfrentaba una gestión de clientes fragmentada entre hojas de cálculo y correos electrónicos, lo que resultaba en pérdida de oportunidades de venta y falta de visibilidad del pipeline comercial.

Desarrollamos un ERP a medida integrado con su sistema de facturación existente, con seguimiento de oportunidades en tiempo real, automatización de seguimientos y dashboard de métricas comerciales.

El resultado fue un aumento del 40% en la tasa de cierre de ventas en los primeros 3 meses, con el equipo comercial ahorrando 2 horas diarias en tareas administrativas.`,
    tecnologias: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    resultado: 'Aumentó tasa de cierre de ventas 40% en 3 meses',
    activo: true,
    orden: 1,
  },
  {
    id: '2',
    titulo: 'Plataforma E-Learning Corporativa',
    slug: 'plataforma-elearning-corporativa',
    industria: 'Educación & Capacitación',
    descripcion_corta: 'Plataforma de capacitación online para 200+ empleados con seguimiento de progreso, evaluaciones y certificaciones automáticas.',
    descripcion_larga: `Una empresa de consultoría con presencia en 3 países necesitaba capacitar a su equipo de forma uniforme y con trazabilidad del aprendizaje.

Construimos una plataforma LMS a medida con creación de cursos, evaluaciones gamificadas, seguimiento de progreso individual y emisión automática de certificados.

La plataforma redujo el costo por capacitación en un 60% y permitió certificar a 180 colaboradores en el primer trimestre de operación.`,
    tecnologias: ['Next.js', 'React', 'Supabase', 'Framer Motion', 'AWS S3'],
    resultado: 'Redujo costo de capacitación 60% — 180 certificados en el primer trimestre',
    activo: true,
    orden: 2,
  },
  {
    id: '3',
    titulo: 'App Móvil de Delivery para Restaurante',
    slug: 'app-delivery-restaurante',
    industria: 'Gastronomía & Retail',
    descripcion_corta: 'Aplicación iOS y Android para pedidos en línea con seguimiento en tiempo real, pagos integrados y panel de cocina.',
    descripcion_larga: `Una cadena de restaurantes quería reducir su dependencia de plataformas de delivery de terceros (con comisiones del 30%) y tener control total de la experiencia del cliente.

Desarrollamos una app móvil completa para clientes finales con menú interactivo, carrito, múltiples métodos de pago (tarjeta, transferencia, efectivo) y seguimiento GPS del pedido. Incluimos un panel web para cocina y panel de administración para reportes.

La cadena recuperó la inversión en 4 meses y eliminó $8,000 mensuales en comisiones a terceros.`,
    tecnologias: ['React Native', 'Expo', 'Node.js', 'Stripe', 'Google Maps API'],
    resultado: 'ROI en 4 meses — Ahorro de $8,000/mes en comisiones',
    activo: true,
    orden: 3,
  },
  {
    id: '4',
    titulo: 'Sistema de Facturación Electrónica SRI',
    slug: 'facturacion-electronica-sri',
    industria: 'Finanzas & Contabilidad',
    descripcion_corta: 'Sistema de facturación electrónica integrado con el SRI Ecuador para PYMES, con gestión de inventario y reportes contables.',
    descripcion_larga: `Múltiples PYMES ecuatorianas necesitaban cumplir con la obligatoriedad de facturación electrónica del SRI sin los altos costos de las soluciones del mercado.

Desarrollamos un sistema multi-empresa de facturación electrónica que se integra directamente con el webservice del SRI, genera facturas en formato XML, las firma digitalmente y gestiona las respuestas de autorización en tiempo real.

El sistema procesa 500+ facturas mensuales para 15 empresas con 99.9% de disponibilidad.`,
    tecnologias: ['Next.js', 'Node.js', 'PostgreSQL', 'XML Firma Digital', 'SRI API'],
    resultado: '500+ facturas/mes procesadas con 99.9% de disponibilidad',
    activo: true,
    orden: 4,
  },
]

export const testimoniales = [
  {
    id: '1',
    cliente_nombre: 'Carlos Mendoza',
    cliente_cargo: 'Gerente Comercial',
    empresa: 'Distribuidora del Pacífico',
    avatar_url: '',
    texto: 'El equipo de TripleSoftware transformó completamente nuestra gestión comercial. El ERP que desarrollaron se adaptó perfectamente a nuestros procesos y el soporte post-lanzamiento ha sido excelente. Aumentamos nuestras ventas un 40% en 3 meses.',
    activo: true,
  },
  {
    id: '2',
    cliente_nombre: 'María José Castillo',
    cliente_cargo: 'Directora de RRHH',
    empresa: 'ConsultGroup Ecuador',
    avatar_url: '',
    texto: 'La plataforma de e-learning superó todas nuestras expectativas. Logramos capacitar a todo nuestro equipo de forma simultánea, con seguimiento individual y certificados automáticos. El ahorro en costos de capacitación fue inmediato y significativo.',
    activo: true,
  },
  {
    id: '3',
    cliente_nombre: 'Andrés Villacrés',
    cliente_cargo: 'Propietario',
    empresa: 'Restaurantes La Brasa Guayaquil',
    avatar_url: '',
    texto: 'La app de delivery nos cambió el negocio. Ya no dependemos de plataformas que se quedan con el 30% de nuestras ventas. En 4 meses recuperamos la inversión y ahora el margen por pedido es nuestro. El seguimiento en tiempo real que ven los clientes aumentó la satisfacción notablemente.',
    activo: true,
  },
]
