import Link from 'next/link';

export default function TechHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #1a3a6b 55%, #1E88E5 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ background: '#7C3AED' }}></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-8" style={{ background: 'var(--nexus-green)' }}></div>
        {/* grid decorativo */}
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
              <span className="text-white">Tecnologia em Saúde</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ background: 'rgba(124,58,237,0.25)', border: '1px solid rgba(124,58,237,0.4)', fontFamily: 'Poppins, sans-serif' }}
            >
              💻 Tecnologia em Saúde
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Inove sua clínica com
              <span className="block" style={{ color: '#A78BFA' }}>tecnologia que funciona.</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
              Prontuário eletrônico, telemedicina, inteligência artificial e saúde digital — tudo que você precisa saber para modernizar sua clínica com segurança.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#ferramentas" className="nexus-btn-primary" style={{ background: '#7C3AED' }}>Ver Ferramentas</a>
              <a href="#diagnostico" className="nexus-btn-outline">Diagnóstico Digital</a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:min-w-[280px]">
            {[
              { icon: '📱', value: '78%', label: 'das clínicas já usam PEP', color: '#A78BFA' },
              { icon: '📹', value: '3x', label: 'crescimento da telemedicina pós-2020', color: '#6BFFCC' },
              { icon: '🤖', value: '40%', label: 'redução de erros com IA clínica', color: '#FFD93D' },
              { icon: '⚡', value: '2h', label: 'economizadas por dia com automação', color: '#FF6B6B' },
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
