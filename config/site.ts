// Configuración centralizada del sitio — TripleSoftware
// Equipo 01 — Arquitectura & Sistema

export const siteConfig = {
  name: 'TRIPLE_A',
  fullName: 'Tecnograp software ERP TRIPLE_A',
  tagline: 'Desarrollo de software a medida para empresas que quieren crecer',
  description:
    'TRIPLE_A es una empresa ecuatoriana especializada en desarrollo de software a medida, aplicaciones web y móviles, integración de sistemas y consultoría tecnológica. Filial de Tecnograp tecnología y sistemas.',
  url: 'https://triplesoftware.com',
  email: 'contacto@triplesoftware.com',
  phone: '+593 99 999 9999',
  address: 'Ecuador',
  empresa_matriz: 'Tecnograp tecnología y sistemas',

  // Redes sociales
  social: {
    linkedin: 'https://linkedin.com/company/triplesoftware',
    github:   'https://github.com/IngMarlonPerez/tripleA_software',
    twitter:  'https://twitter.com/triplesoftware',
    instagram: 'https://instagram.com/triplesoftware',
  },

  // Calendly para agendar reuniones
  calendly: 'https://calendly.com/triplesoftware',

  // Métricas clave para la sección Hero
  metricas: [
    { valor: '50+',  etiqueta: 'Proyectos entregados' },
    { valor: '30+',  etiqueta: 'Clientes satisfechos' },
    { valor: '5+',   etiqueta: 'Años de experiencia' },
    { valor: '98%',  etiqueta: 'Tasa de satisfacción' },
  ],

  // Navegación principal
  nav: [
    { label: 'Inicio',     href: '/' },
    { label: 'Servicios',  href: '/servicios' },
    { label: 'Proyectos',  href: '/proyectos' },
    { label: 'Nosotros',   href: '/nosotros' },
    { label: 'Contacto',   href: '/contacto' },
  ],

  // Keywords para SEO
  keywords: [
    'desarrollo de software Ecuador',
    'software a medida Ecuador',
    'aplicaciones web Ecuador',
    'desarrollo móvil Ecuador',
    'CRM Ecuador',
    'consultoría tecnológica Ecuador',
    'TRIPLE_A',
    'Tecnograp',
  ],
} as const

export type SiteConfig = typeof siteConfig
