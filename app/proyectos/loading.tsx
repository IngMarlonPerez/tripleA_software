// Loading skeleton — Página de Proyectos
export default function ProyectosLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <div style={{ width: '100px', height: '28px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '999px', margin: '0 auto 20px', animation: 'pulse 2s infinite' }} />
          <div style={{ width: '60%', height: '48px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', margin: '0 auto 16px', animation: 'pulse 2s infinite' }} />
          <div style={{ width: '40%', height: '20px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '8px', margin: '0 auto', animation: 'pulse 2s infinite' }} />
        </div>
      </section>
      {/* Grid skeleton */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '40px 0 80px' }}>
        <div className="container-site">
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ width: '140px', height: '36px', backgroundColor: '#E2E8F0', borderRadius: '8px', animation: 'pulse 2s infinite' }} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden' }}>
                <div style={{ height: '180px', backgroundColor: '#F1F5F9', animation: 'pulse 2s infinite' }} />
                <div style={{ padding: '32px' }}>
                  <div style={{ width: '80%', height: '24px', backgroundColor: '#F1F5F9', borderRadius: '8px', marginBottom: '12px', animation: 'pulse 2s infinite' }} />
                  <div style={{ width: '100%', height: '14px', backgroundColor: '#F8FAFC', borderRadius: '6px', marginBottom: '8px', animation: 'pulse 2s infinite' }} />
                  <div style={{ width: '70%', height: '14px', backgroundColor: '#F8FAFC', borderRadius: '6px', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[1, 2, 3].map((j) => (
                      <div key={j} style={{ width: '60px', height: '22px', backgroundColor: '#EEF2FF', borderRadius: '999px', animation: 'pulse 2s infinite' }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
