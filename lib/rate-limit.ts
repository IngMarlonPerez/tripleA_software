// Rate limiting para API routes — protección contra abuso
// Equipo 05 — Seguridad

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

/**
 * Verifica si una IP puede hacer una solicitud
 * @param ip - Dirección IP del cliente
 * @param maxRequests - Máximo de solicitudes permitidas en la ventana
 * @param windowMs - Tamaño de la ventana en milisegundos
 * @returns true si la solicitud está permitida, false si está bloqueada
 */
export function rateLimit(
  ip: string,
  maxRequests = 5,
  windowMs = 60000
): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true // Permitido
  }

  if (record.count >= maxRequests) return false // Bloqueado

  record.count++
  return true // Permitido
}
