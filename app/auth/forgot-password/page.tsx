'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, Loader2, ArrowLeft } from 'lucide-react'
import { resetPassword } from '@/lib/supabase/auth'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const { error } = await resetPassword(email)
    if (error) {
      setError(error.message)
      setIsLoading(false)
    } else {
      setSent(true)
      setIsLoading(false)
    }
  }

  if (sent) {
    return (
      <section style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 40px' }}>
        <div style={{ width: '100%', maxWidth: '440px', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '48px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <Mail size={28} color="#4F46E5" />
            </div>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '12px' }}>Email enviado</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B', lineHeight: 1.7, marginBottom: '24px' }}>
              Si existe una cuenta con {email}, recibirás un enlace para restablecer tu contraseña.
            </p>
            <Link href="/auth/login">
              <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>Volver a iniciar sesión</Button>
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
            <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#0F172A' }}>Triple<span style={{ color: '#4F46E5' }}>Software</span></span>
          </Link>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: '28px', fontWeight: 600, color: '#0F172A', marginBottom: '8px' }}>Recuperar contraseña</h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#64748B' }}>Te enviaremos un enlace para restablecer tu contraseña</p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '40px' }}>
          {error && (
            <div style={{ padding: '12px 16px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#DC2626', margin: 0 }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <Label htmlFor="email">Email</Label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" required style={{ paddingLeft: '42px' }} />
              </div>
            </div>

            <Button type="submit" disabled={isLoading} style={{ width: '100%', justifyContent: 'center' }}>
              {isLoading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : null}
              {isLoading ? 'Enviando...' : 'Enviar enlace'}
            </Button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link href="/auth/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4F46E5', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Volver a iniciar sesión
          </Link>
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
