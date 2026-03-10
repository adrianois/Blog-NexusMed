import Link from 'next/link';

export default function Hero() {
  return (
    <section className="nexus-gradient text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            NexusMed Blog — Gestão Clínica
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Gestão completa para
            <span className="block" style={{ color: '#7DFFE8' }}>clínicas modernas.</span>
          </h1>
          <p className="text-lg opacity-85 mb-8 leading-relaxed">
            Artigos práticos sobre gestão financeira, experiência do paciente, tecnologia em saúde e muito mais para transformar sua clínica.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-white transition-opacity hover:opacity-90"
              style={{ color: 'var(--nexus-primary-dark)' }}
            >
              Explorar Artigos
            </Link>
            <Link
              href="/sobre"
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors"
            >
              Sobre o Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
