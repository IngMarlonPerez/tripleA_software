// Loading skeleton global — Equipo 03
export default function Loading() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '72px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '3px solid #EEF2FF', borderTopColor: '#4F46E5', animation: 'spin 0.8s linear infinite' }} />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#94A3B8' }}>Cargando...</p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
