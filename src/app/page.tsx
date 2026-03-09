export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>

        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
          toPrompt
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="loading loading-spinner loading-md" style={{ color: '#6b7280' }} />
        </div>

        <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
          Building your application
        </h1>
      </div>
    </div>
  );
}
