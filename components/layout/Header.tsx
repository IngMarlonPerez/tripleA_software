'use client'
// Header / Navegación principal — Equipo 03
// Responsivo con menú mobile, CTA y scroll-aware

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollPosition(20)
  const pathname = usePathname()

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
        transition: 'all 300ms ease',
      }}
    >
      <div className="container-site">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
            aria-label="TRIPLE_A — Inicio"
          >
            <img 
              src="/images/logo-triple-a.png" 
              alt="TRIPLE_A Logo" 
              style={{ height: '38px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>

          {/* Navegación desktop */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: isActive(item.href) ? '#4F46E5' : '#64748B',
                    backgroundColor: isActive(item.href) ? '#EEF2FF' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = '#0F172A'
                      e.currentTarget.style.backgroundColor = '#F8FAFC'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = '#64748B'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '12px' }}>
            <Link
              href="/contacto"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Hablemos
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Botón menú mobile */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              background: 'transparent',
              cursor: 'pointer',
              color: '#0F172A',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Menú mobile */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            padding: '16px 24px 24px',
          }}
          className="md:hidden"
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: isActive(item.href) ? '#4F46E5' : '#0F172A',
                    backgroundColor: isActive(item.href) ? '#EEF2FF' : 'transparent',
                    textDecoration: 'none',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
            <Link href="/contacto" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Hablemos de tu proyecto
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
