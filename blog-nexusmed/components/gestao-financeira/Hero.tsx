import Link from 'next/link';

export default function GestaoFinanceiraHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #1A3A6B 55%, #1565C0 100%)' }}
    >
      {/* Decoração */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ background: '#1E88E5' }}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full opacity-10" style={{ background: '#93C5FD' }}></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            {/* Breadcrumb */}
            <nav className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Gestão Financeira</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ background: 'rgba(30,136,229,0.25)', border: '1px solid rgba(30,136,229,0.4)', fontFamily: 'Poppins, sans-serif' }}
            >
              💰 Gestão Financeira
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Saúde financeira começa
              <span className="block" style={{ color: '#93C5FD' }}>com informação certa.</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter, sans-serif' }}>
              Controle de custos, faturamento de convênios, fluxo de caixa e precificação de procedimentos — tudo que você precisa para sua clínica ser financeiramente sustentável.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#artigos" className="nexus-btn-primary" style={{ background: '#1565C0' }}>Ver Artigos</a>
              <a href="#kpis" className="nexus-btn-outline">Ver KPIs</a>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:min-w-[280px]">
            {[
              { icon: '📉', value: '18%', label: 'das consultas são no-show', color: '#FCA5A5' },
              { icon: '💸', value: '30%', label: 'da receita vai para custos fixos', color: '#FCD34D' },
              { icon: '📋', value: '40%', label: 'dos conv. têm glosas evitáveis', color: '#86EFAC' },
              { icon: '📈', value: '3x', label: 'ROI com gestão automatizada', color: '#93C5FD' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: stat.color }}>{stat.value}</div>
                <div className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
