import Link from 'next/link';

export default function EquipeHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #0D2B5E 55%, #1565C0 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ background: '#3B82F6' }}></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: '#93C5FD' }}></div>
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
              <span className="text-white">Gestão de Equipes</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ background: 'rgba(30,136,229,0.25)', border: '1px solid rgba(30,136,229,0.4)', fontFamily: 'Poppins, sans-serif' }}
            >
              👥 Gestão de Equipes
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Equipe engajada,
              <span className="block" style={{ color: '#93C5FD' }}>clínica que cresce.</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter, sans-serif' }}>
              Liderança, contratação, cultura e desempenho — conteúdo prático para construir e liderar uma equipe clínica de alta performance que entrega resultado e retém talentos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#artigos" className="nexus-btn-primary" style={{ background: '#1E88E5' }}>Ver Artigos</a>
              <a href="#checklist" className="nexus-btn-outline">Diagnóstico da Equipe</a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:min-w-[280px]">
            {[
              { icon: '💸', value: '150%', label: 'do salário anual é o custo de uma demissão', color: '#FCA5A5' },
              { icon: '📈', value: '14%', label: 'mais produtividade com cultura de feedback', color: '#93C5FD' },
              { icon: '🚪', value: '45%', label: 'da rotatividade ocorre nos primeiros 90 dias', color: '#FCD34D' },
              { icon: '🤝', value: '3x', label: 'mais engajamento com onboarding estruturado', color: '#86EFAC' },
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
