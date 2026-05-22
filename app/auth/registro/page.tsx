'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react'
import { signUpWithEmail, signInWithOAuth } from '@/lib/supabase/auth'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

export default function RegistroPage() {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [oauthLoading, setOauthLoading] = useState<string | null>(null)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }
    if (nombre.trim().length < 2) {
      setError('El nombre debe tener al menos 2 caracteres')
      return
    }

    setIsLoading(true)
    const { error } = await signUpWithEmail(email, password, nombre)
    if (error) {
      setError(error.message)
      setIsLoading(false)
    } else {
      setSuccess(true)
      setIsLoading(false)
    }
  }

  const handleOAuthRegister = async (provider: 'google' | 'github' | 'facebook') => {
    setOauthLoading(provider)
    setError('')
    const { error } = await signInWithOAuth(provider)
    if (error) {
      setError(error.message)
      setOauthLoading(null)
    }
  }

  if (success) {
    return (
      <section style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 40px' }}>
        <div style={{ width: '100%', maxWidth: '440px', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '48px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '12px' }}>Cuenta creada</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B', lineHeight: 1.7, marginBottom: '24px' }}>
              Te hemos enviado un email de verificación. Revisa tu bandeja de entrada para activar tu cuenta.
            </p>
            <Link href="/auth/login">
              <Button style={{ width: '100%', justifyContent: 'center' }}>Ir a iniciar sesión</Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 40px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '32px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '16px', color: '#FFFFFF', fontWeight: 700 }}>&lt;/&gt;</span>
            </div>
            <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#0F172A' }}>
              Triple<span style={{ color: '#4F46E5' }}>Software</span>
            </span>
          </Link>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: '28px', fontWeight: 600, color: '#0F172A', marginBottom: '8px' }}>Crear cuenta</h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B' }}>
            Regístrate para acceder a tu panel de cliente
          </p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '40px' }}>
          {error && (
            <div style={{ padding: '12px 16px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#DC2626', margin: 0 }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div style={{ marginBottom: '20px' }}>
              <Label htmlFor="nombre">Nombre completo</Label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                <Input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" required style={{ paddingLeft: '42px' }} />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Label htmlFor="email">Email</Label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" required style={{ paddingLeft: '42px' }} />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Label htmlFor="password">Contraseña</Label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                <Input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" required style={{ paddingLeft: '42px', paddingRight: '42px' }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8', padding: '4px' }} aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repite tu contraseña" required style={{ paddingLeft: '42px' }} />
              </div>
            </div>

            <Button type="submit" disabled={isLoading} style={{ width: '100%', justifyContent: 'center' }}>
              {isLoading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : null}
              {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
            </Button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '24px 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#94A3B8' }}>O regístrate con</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Button type="button" variant="secondary" onClick={() => handleOAuthRegister('google')} disabled={oauthLoading !== null} style={{ width: '100%', justifyContent: 'center' }}>
              {oauthLoading === 'google' ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : (
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              )}
              Google
            </Button>
            <Button type="button" variant="secondary" onClick={() => handleOAuthRegister('github')} disabled={oauthLoading !== null} style={{ width: '100%', justifyContent: 'center' }}>
              {oauthLoading === 'github' ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )}
              GitHub
            </Button>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#64748B', marginTop: '24px' }}>
          ¿Ya tienes cuenta?{' '}
          <Link href="/auth/login" style={{ color: '#4F46E5', fontWeight: 500, textDecoration: 'none' }}>
            Iniciar sesión
          </Link>
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
