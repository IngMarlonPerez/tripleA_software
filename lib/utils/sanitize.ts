// Utilidades de sanitización de inputs — prevención XSS e inyección
// Equipo 05 — Seguridad

/**
 * Sanitiza texto de entrada del usuario para prevenir XSS básico
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/[<>]/g, '')          // Prevenir XSS básico
    .replace(/javascript:/gi, '')  // Prevenir javascript: URIs
    .replace(/on\w+\s*=/gi, '')    // Prevenir event handlers inline
    .trim()
    .slice(0, 5000)                // Límite de longitud
}

/**
 * Sanitiza un objeto de mensajes de chat
 */
export function sanitizeChatMessage(message: string): string {
  return sanitizeText(message).slice(0, 2000)
}

/**
 * Sanitiza un email
 */
export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, 254)
}
