// Página 404 personalizada
import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0D1117', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '100px', fontWeight: 700, color: '#4F46E5', lineHeight: 1, marginBottom: '8px', opacity: 0.8 }}>
          404
        </div>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#475569', marginBottom: '32px' }}>
          // página no encontrada
        </p>
        <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: '28px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>
          Esta página no existe
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#64748B', lineHeight: 1.7, marginBottom: '40px' }}>
          La página que buscas fue movida o no existe. Vuelve al inicio o explora nuestros servicios.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <Link href="/" className="btn-primary">
            Volver al inicio <ArrowRight size={16} />
          </Link>
          <Link href="/contacto" className="btn-secondary" style={{ color: '#CBD5E1', borderColor: 'rgba(255,255,255,0.2)' }}>
            Contactarnos
          </Link>
        </div>
      </div>
    </div>
  )
}
