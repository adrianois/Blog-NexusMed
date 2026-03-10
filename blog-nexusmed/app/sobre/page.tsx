import Link from 'next/link';

export const metadata = {
  title: 'Sobre | Blog NexusMed',
  description: 'Conheça o Blog NexusMed e nossa missão de apoiar gestores de clínicas.',
};

const TOPICS = [
  { icon: '💰', title: 'Gestão Financeira', desc: 'Fluxo de caixa, precificação, glosas e saúde financeira da clínica.' },
  { icon: '🤝', title: 'Experiência do Paciente', desc: 'Jornada, NPS, fidelização e comunicação médico-paciente.' },
  { icon: '⚖️', title: 'Regulamentação', desc: 'CFM, LGPD, ANS, ANVISA e conformidade legal.' },
  { icon: '💻', title: 'Tecnologia em Saúde', desc: 'Prontuário eletrônico, telemedicina e inteligência artificial.' },
  { icon: '📣', title: 'Marketing Médico', desc: 'Captação de pacientes, SEO e presença digital ética.' },
  { icon: '👥', title: 'Gestão de Equipes', desc: 'Liderança, contratação, retenção e cultura organizacional.' },
];

const STATS = [
  { num: '6+', label: 'Categorias' },
  { num: '20+', label: 'Artigos' },
  { num: '100%', label: 'Gratuito' },
  { num: '2026', label: 'Lançamento' },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #1A3A6B 60%, #065F46 100%)' }}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: '#00A86B', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-20">
          <nav className="text-xs mb-6 flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Sobre</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ background: 'rgba(0,168,107,0.25)', border: '1px solid rgba(0,168,107,0.4)', fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: '#6EE7B7' }} />
            Blog NexusMed
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.15 }}>
            Sobre o
            <span className="block" style={{ color: '#6EE7B7' }}>Blog NexusMed</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter, sans-serif' }}>
            A principal referência em conteúdo sobre gestão clínica no Brasil. Artigos práticos para gestores, médicos e equipes administrativas.
          </p>

          <div className="flex flex-wrap gap-8 mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#6EE7B7' }}>{s.num}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>🎯 Nossa Missão</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                Por que criamos este blog?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
                O Blog NexusMed nasceu de uma constatação:{' '}
                <strong>a maioria dos médicos e gestores de clínicas não tem acesso fácil a conteúdo de qualidade sobre gestão</strong>.
                Falta tempo, faltam fontes confiáveis, e sobram informações genéricas que não se aplicam à realidade de uma clínica médica brasileira.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
                Publicamos artigos práticos e aprofundados, escritos por especialistas, para ajudar clínicas a se tornarem mais{' '}
                <strong>eficientes, lucrativas e focadas no paciente</strong>.
              </p>
            </div>

            <div
              className="w-full md:w-72 rounded-2xl p-6 flex-shrink-0"
              style={{ background: 'var(--nexus-gray-50)', border: '1px solid var(--nexus-gray-100)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: '#E0F5EE' }}>🏥</div>
              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>NexusMed — A Plataforma</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
                Plataforma SaaS de gestão clínica que integra agendamento, prontuário eletrônico, faturamento e relacionamento com pacientes em um único sistema.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#00875A', fontFamily: 'Poppins, sans-serif' }}>
                Conhecer o sistema →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tópicos */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>📚 Conteúdo</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              O que você encontra aqui
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOPICS.map((t) => (
              <div key={t.title} className="nexus-card p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: '#E0F5EE' }}>
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{t.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsável */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>👤 Responsável</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Quem está por trás do NexusMed
            </h2>
          </div>
          <div className="flex justify-center">
            <div
              className="nexus-card p-8 flex flex-col md:flex-row items-center md:items-start gap-6"
              style={{ maxWidth: '560px', width: '100%' }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 text-white"
                style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #00875A 100%)', fontFamily: 'Poppins, sans-serif' }}
              >
                AI
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>Adriano Israel</h3>
                <p className="text-sm mb-5" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>Fundador &amp; Responsável pelo Blog NexusMed</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:nexusme.app@gmail.com"
                    className="inline-flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                    style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#E3F2FD' }}>✉️</span>
                    nexusme.app@gmail.com
                  </a>
                  <a
                    href="https://instagram.com/nexusmed.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                    style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#FCE4EC' }}>📸</span>
                    @nexusmed.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>Comece a ler agora</h2>
          <p className="text-base mb-8" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            Explore os artigos e transforme a gestão da sua clínica.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/blog" className="nexus-btn-primary">Ver todos os artigos</Link>
            <Link href="/gestao-financeira" className="nexus-btn-outline">Gestão Financeira</Link>
          </div>
        </div>
      </section>
    </>
  );
}
