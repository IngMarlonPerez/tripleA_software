// Loading skeleton — Dashboard
export default function DashboardLoading() {
  return (
    <>
      <section style={{ backgroundColor: '#0D1117', padding: '140px 0 60px' }}>
        <div className="container-site">
          <div style={{ width: '200px', height: '36px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '10px', marginBottom: '8px', animation: 'pulse 2s infinite' }} />
          <div style={{ width: '280px', height: '18px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '6px', animation: 'pulse 2s infinite' }} />
        </div>
      </section>
      <section style={{ backgroundColor: '#F8FAFC', padding: '60px 0', minHeight: '60vh' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '32px', height: '240px', animation: 'pulse 2s infinite' }} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
