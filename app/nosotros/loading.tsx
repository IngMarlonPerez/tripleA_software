// Loading skeleton — Página Nosotros
export default function NosotrosLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section style={{ backgroundColor: '#0D1117', padding: '160px 0 80px' }}>
        <div className="container-site">
          <div style={{ maxWidth: '700px' }}>
            <div style={{ width: '140px', height: '28px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '999px', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
            <div style={{ width: '90%', height: '48px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', marginBottom: '16px', animation: 'pulse 2s infinite' }} />
            <div style={{ width: '70%', height: '48px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
            <div style={{ width: '100%', height: '20px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '8px', animation: 'pulse 2s infinite' }} />
          </div>
        </div>
      </section>
      {/* Misión / Visión skeleton */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '80px' }}>
            {[1, 2].map((i) => (
              <div key={i} style={{ padding: '40px', backgroundColor: '#F8FAFC', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#EEF2FF', marginBottom: '20px', animation: 'pulse 2s infinite' }} />
                <div style={{ width: '50%', height: '24px', backgroundColor: '#F1F5F9', borderRadius: '8px', marginBottom: '14px', animation: 'pulse 2s infinite' }} />
                <div style={{ width: '100%', height: '14px', backgroundColor: '#F1F5F9', borderRadius: '6px', marginBottom: '8px', animation: 'pulse 2s infinite' }} />
                <div style={{ width: '90%', height: '14px', backgroundColor: '#F1F5F9', borderRadius: '6px', animation: 'pulse 2s infinite' }} />
              </div>
            ))}
          </div>
          {/* Valores skeleton */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '200px', height: '32px', backgroundColor: '#F1F5F9', borderRadius: '10px', margin: '0 auto 12px', animation: 'pulse 2s infinite' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ padding: '28px', border: '1px solid #E2E8F0', borderRadius: '16px' }}>
                <div style={{ width: '28px', height: '28px', backgroundColor: '#EEF2FF', borderRadius: '6px', marginBottom: '16px', animation: 'pulse 2s infinite' }} />
                <div style={{ width: '70%', height: '18px', backgroundColor: '#F1F5F9', borderRadius: '6px', marginBottom: '10px', animation: 'pulse 2s infinite' }} />
                <div style={{ width: '100%', height: '14px', backgroundColor: '#F8FAFC', borderRadius: '6px', animation: 'pulse 2s infinite' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
