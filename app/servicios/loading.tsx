// Loading skeleton — Página de Servicios
export default function ServiciosLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px' }}>
        <div className="container-site">
          <div style={{ maxWidth: '680px' }}>
            <div style={{ width: '100px', height: '28px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '999px', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
            <div style={{ width: '90%', height: '48px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', marginBottom: '16px', animation: 'pulse 2s infinite' }} />
            <div style={{ width: '70%', height: '48px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
            <div style={{ width: '80%', height: '20px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '8px', marginBottom: '12px', animation: 'pulse 2s infinite' }} />
            <div style={{ width: '60%', height: '20px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '8px', animation: 'pulse 2s infinite' }} />
          </div>
        </div>
      </section>
      {/* Cards skeleton */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                <div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#EEF2FF', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
                  <div style={{ width: '70%', height: '32px', backgroundColor: '#F1F5F9', borderRadius: '10px', marginBottom: '16px', animation: 'pulse 2s infinite' }} />
                  <div style={{ width: '100%', height: '16px', backgroundColor: '#F1F5F9', borderRadius: '6px', marginBottom: '8px', animation: 'pulse 2s infinite' }} />
                  <div style={{ width: '90%', height: '16px', backgroundColor: '#F1F5F9', borderRadius: '6px', animation: 'pulse 2s infinite' }} />
                </div>
                <div style={{ height: '280px', backgroundColor: '#F8FAFC', borderRadius: '20px', border: '1px solid #E2E8F0', animation: 'pulse 2s infinite' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
