// Loading skeleton — Página de Contacto
export default function ContactoLoading() {
  return (
    <>
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <div style={{ width: '100px', height: '28px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '999px', margin: '0 auto 20px', animation: 'pulse 2s infinite' }} />
          <div style={{ width: '50%', height: '44px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', margin: '0 auto 16px', animation: 'pulse 2s infinite' }} />
          <div style={{ width: '40%', height: '18px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '8px', margin: '0 auto', animation: 'pulse 2s infinite' }} />
        </div>
      </section>
      <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '64px' }}>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '48px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '60%', height: '24px', backgroundColor: '#F1F5F9', borderRadius: '8px', marginBottom: '32px', animation: 'pulse 2s infinite' }} />
              <div style={{ width: '100%', height: '44px', backgroundColor: '#F8FAFC', borderRadius: '10px', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
              <div style={{ width: '100%', height: '44px', backgroundColor: '#F8FAFC', borderRadius: '10px', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
              <div style={{ width: '100%', height: '120px', backgroundColor: '#F8FAFC', borderRadius: '10px', marginBottom: '28px', animation: 'pulse 2s infinite' }} />
              <div style={{ width: '100%', height: '48px', backgroundColor: '#EEF2FF', borderRadius: '10px', animation: 'pulse 2s infinite' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ padding: '24px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', height: '80px', animation: 'pulse 2s infinite' }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
