// Paleta oficial TripleSoftware — FUENTE ÚNICA DE VERDAD
// Equipo 02 — Sistema Visual

export const colors = {
  // Fondos
  white:     '#FFFFFF',
  slate50:   '#F8FAFC',
  midnight:  '#0D1117',
  // Texto
  charcoal:  '#0F172A',
  slate500:  '#64748B',
  slate300:  '#CBD5E1',
  // Acento principal
  indigo600: '#4F46E5',
  indigo700: '#4338CA',
  indigo50:  '#EEF2FF',
  // Acento secundario
  cyan500:   '#06B6D4',
  // Bordes
  slate200:  '#E2E8F0',
  // Semánticos
  green600:  '#16A34A',
  red600:    '#DC2626',
} as const

export type ColorKey = keyof typeof colors
