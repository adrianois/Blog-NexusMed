import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #1A3A6B 50%, #065F46 100%)' }}
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ background: '#1E88E5' }}></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-10" style={{ background: '#00A86B' }}></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ background: 'rgba(0,168,107,0.25)', border: '1px solid rgba(0,168,107,0.4)', fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#6EE7B7' }}></span>
              NexusMed Blog — Gestão Clínica
            </div>

            {/* Título */}
            <h1
              className="mb-5"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.15 }}
            >
              Gestão completa para
              <span className="block" style={{ color: '#6EE7B7' }}>clínicas modernas.</span>
            </h1>

            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)', fontFamily: 'Inter, sans-serif' }}>
              Artigos práticos sobre gestão financeira, experiência do paciente, tecnologia em saúde e regulamentação — para transformar sua clínica.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/blog" className="nexus-btn-primary" style={{ background: '#00875A' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.75 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explorar Artigos
              </Link>
              <Link href="/sobre" className="nexus-btn-outline">Sobre o Blog</Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              {[
                { num: '6+', label: 'Categorias', icon: '📂' },
                { num: '20+', label: 'Artigos', icon: '📝' },
                { num: '100%', label: 'Gratuito', icon: '🌟' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#6EE7B7' }}>{s.num}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards flutuantes lado direito */}
          <div className="hidden md:flex flex-col gap-3 flex-shrink-0">
            {[
              { icon: '💰', title: 'Gestão Financeira', desc: 'Fluxo de caixa & KPIs', color: '#93C5FD', bg: 'rgba(255,255,255,0.08)' },
              { icon: '🤝', title: 'Experiência do Paciente', desc: 'NPS & fidelização', color: '#86EFAC', bg: 'rgba(255,255,255,0.08)' },
              { icon: '📣', title: 'Marketing Médico', desc: 'SEO & redes sociais', color: '#FCD34D', bg: 'rgba(255,255,255,0.08)' },
              { icon: '👥', title: 'Gestão de Equipes', desc: 'Liderança & cultura', color: '#FCA5A5', bg: 'rgba(255,255,255,0.08)' },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{ background: c.bg, border: '1px solid rgba(255,255,255,0.12)', minWidth: '220px' }}
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: c.color, fontFamily: 'Poppins, sans-serif' }}>{c.title}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
