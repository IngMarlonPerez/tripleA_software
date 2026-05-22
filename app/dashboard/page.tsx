'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, LogOut, Loader2, ArrowRight, Mail, Building2, Calendar } from 'lucide-react'
import { getUser, signOut, getSession } from '@/lib/supabase/auth'
import { Button } from '@/components/ui/Button'
import type { User as SupabaseUser } from '@supabase/supabase-js'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [signingOut, setSigningOut] = useState(false)

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push('/auth/login')
        return
      }
      getUser().then((u) => {
        setUser(u)
        setIsLoading(false)
      })
    })
  }, [router])

  const handleSignOut = async () => {
    setSigningOut(true)
    await signOut()
    router.push('/')
  }

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '72px' }}>
        <Loader2 size={24} style={{ animation: 'spin 1s linear infinite', color: '#4F46E5' }} />
      </div>
    )
  }

  return (
    <>
      <section style={{ backgroundColor: '#0D1117', padding: '140px 0 60px' }}>
        <div className="container-site">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                Panel de cliente
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#64748B' }}>
                Bienvenido a tu espacio personal
              </p>
            </div>
            <Button variant="ghost" onClick={handleSignOut} disabled={signingOut} style={{ color: '#CBD5E1' }}>
              {signingOut ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <LogOut size={16} />}
              Cerrar sesión
            </Button>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8FAFC', padding: '60px 0', minHeight: '60vh' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Perfil */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={24} color="#FFFFFF" />
                </div>
                <div>
                  <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#0F172A', marginBottom: '4px' }}>
                    {user?.user_metadata?.nombre || 'Usuario'}
                  </h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mail size={14} /> {user?.email}
                  </p>
                </div>
              </div>
              <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', margin: 0 }}>
                  Miembro desde{' '}
                  <strong style={{ color: '#0F172A' }}>
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' }) : 'hoy'}
                  </strong>
                </p>
              </div>
            </div>

            {/* Próximos pasos */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '32px' }}>
              <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#0F172A', marginBottom: '20px' }}>
                Próximos pasos
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Link href="/contacto" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', border: '1px solid #E2E8F0', borderRadius: '12px', textDecoration: 'none', transition: 'border-color 200ms ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4F46E5' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} color="#4F46E5" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500, color: '#0F172A', margin: '0 0 2px' }}>Contáctanos</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#64748B', margin: 0 }}>Cuéntanos sobre tu proyecto</p>
                  </div>
                  <ArrowRight size={16} color="#94A3B8" />
                </Link>
                <Link href="/proyectos" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', border: '1px solid #E2E8F0', borderRadius: '12px', textDecoration: 'none', transition: 'border-color 200ms ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4F46E5' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={18} color="#16A34A" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500, color: '#0F172A', margin: '0 0 2px' }}>Ver proyectos</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#64748B', margin: 0 }}>Explora nuestro portafolio</p>
                  </div>
                  <ArrowRight size={16} color="#94A3B8" />
                </Link>
              </div>
            </div>

            {/* Estado de cuenta */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '32px' }}>
              <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#0F172A', marginBottom: '20px' }}>
                Estado de cuenta
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#15803D', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16A34A', display: 'inline-block' }} />
                    Cuenta activa
                  </p>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#64748B' }}>Verificación email</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: user?.email_confirmed_at ? '#16A34A' : '#F59E0B' }}>
                      {user?.email_confirmed_at ? '✓ Verificado' : 'Pendiente'}
                    </span>
                  </div>
                  {!user?.email_confirmed_at && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#94A3B8', margin: 0 }}>
                      Revisa tu bandeja de entrada para verificar tu email.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  )
}
