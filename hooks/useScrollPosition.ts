// Hook reutilizable para detectar la posición del scroll
// Equipo 01 — Arquitectura (custom hooks)

import { useState, useEffect } from 'react'

/**
 * Retorna true cuando el usuario ha hecho scroll más allá del threshold indicado.
 * Útil para cambiar el estilo del header al hacer scroll.
 */
export function useScrollPosition(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
