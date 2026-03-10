import Link from 'next/link';

export default function ExpHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #1A3A6B 50%, #065F46 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ background: '#00A86B' }}></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: '#86EFAC' }}></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-xl">
            <nav className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Experiência do Paciente</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ background: 'rgba(0,168,107,0.25)', border: '1px solid rgba(0,168,107,0.4)', fontFamily: 'Poppins, sans-serif' }}
            >
              🤝 Experiência do Paciente
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Paciente satisfeito
              <span className="block" style={{ color: '#6EE7B7' }}>é o melhor marketing.</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter, sans-serif' }}>
              Da recepção ao pós-consulta: estratégias práticas para criar uma jornada memorável que gera fidelização, indicações e crescimento sustentável para sua clínica.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#artigos" className="nexus-btn-primary" style={{ background: '#00875A' }}>Ver Artigos</a>
              <a href="#checklist" className="nexus-btn-outline">Diagnóstico da Clínica</a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:min-w-[280px]">
            {[
              { icon: '💰', value: '5x', label: 'mais caro captar do que reter um paciente', color: '#FCD34D' },
              { icon: '📣', value: '72%', label: 'dos pacientes indicam após ótima experiência', color: '#6EE7B7' },
              { icon: '⭐', value: '+4.8', label: 'nota no Google é possível com bom NPS', color: '#FCA5A5' },
              { icon: '📉', value: '30%', label: 'menos cancelamentos com comunicação ativa', color: '#93C5FD' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: s.color }}>{s.value}</div>
                <div className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
