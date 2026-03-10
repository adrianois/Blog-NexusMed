import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import TecHero from '@/components/tecnologia-em-saude/TecHero';
import TendenciasCards from '@/components/tecnologia-em-saude/TendenciasCards';
import FerramentasTable from '@/components/tecnologia-em-saude/FerramentasTable';
import ChecklistDigital from '@/components/tecnologia-em-saude/ChecklistDigital';

export const metadata = {
  title: 'Tecnologia em Saúde | Blog NexusMed',
  description: 'Prontuário eletrônico, telemedicina, inteligência artificial, LGPD e transformação digital para clínicas e consultórios modernos.',
};

export default function TecnologiaEmSaudePage() {
  const posts = getPostsByCategory('tecnologia-em-saude');

  return (
    <>
      <TecHero />

      {/* Tendências */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#EDE9FE', color: '#6D28D9' }}>🚀 Tendências 2026</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Tecnologias que Estão Transformando as Clínicas
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              As inovações que os gestores de clínicas precisam conhecer e adotar em 2026.
            </p>
          </div>
          <TendenciasCards />
        </div>
      </section>

      {/* Comparativo de Ferramentas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="nexus-tag" style={{ background: 'var(--nexus-blue-light)', color: 'var(--nexus-blue)' }}>🛠️ Ferramentas</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Comparativo de Ferramentas Digitais para Clínicas
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--nexus-gray-600)' }}>
              Quais soluções tecnológicas sua clínica deve priorizar e por quê.
            </p>
          </div>
          <FerramentasTable />
        </div>
      </section>

      {/* Checklist de Maturidade Digital */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: 'var(--nexus-green-light)', color: 'var(--nexus-green)' }}>✅ Diagnóstico</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Qual o Nível de Maturidade Digital da Sua Clínica?
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Avalie em qual estágio de transformação digital sua clínica se encontra e saiba os próximos passos.
            </p>
          </div>
          <ChecklistDigital />
        </div>
      </section>

      {/* Artigos */}
      {posts.length > 0 && (
        <section id="artigos" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="nexus-tag" style={{ background: 'var(--nexus-blue-light)', color: 'var(--nexus-blue)' }}>📝 Artigos</span>
              <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                Artigos sobre Tecnologia em Saúde
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{ background: 'var(--nexus-navy)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">💻</div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tecnologia integrada para sua clínica
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            O NexusMed reúne prontuário eletrônico, telemedicina, agendamento online e inteligência de dados em uma única plataforma. Experimente grátis por 14 dias.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary" style={{ background: 'var(--nexus-green)' }}>
              Experimentar Grátis
            </a>
            <Link href="/blog" className="nexus-btn-outline">
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <Newsletter />
      </div>
    </>
  );
}
