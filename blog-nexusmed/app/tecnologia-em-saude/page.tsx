import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import TechHero from '@/components/tecnologia-em-saude/Hero';
import TechCards from '@/components/tecnologia-em-saude/TechCards';
import TechTimeline from '@/components/tecnologia-em-saude/Timeline';
import TechChecklist from '@/components/tecnologia-em-saude/Checklist';

export const metadata = {
  title: 'Tecnologia em Saúde | Blog NexusMed',
  description: 'Guias sobre prontuário eletrônico, telemedicina, inteligência artificial, saúde digital e inovações tecnológicas para clínicas modernas.',
};

export default function TecnologiaEmSaudePage() {
  const posts = getPostsByCategory('tecnologia-em-saude');

  return (
    <>
      <TechHero />

      {/* Tecnologias essenciais */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: 'var(--nexus-blue-light)', color: 'var(--nexus-blue)' }}>🛠️ Ferramentas</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Tecnologias Essenciais para Clínicas Modernas
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Conheça as principais soluções digitais que estão transformando a gestão clínica no Brasil.
            </p>
          </div>
          <TechCards />
        </div>
      </section>

      {/* Timeline de adоção */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <span className="nexus-tag" style={{ background: 'var(--nexus-green-light)', color: 'var(--nexus-green)' }}>📈 Tendências</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Evolução da Saúde Digital no Brasil
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Como a tecnologia vem transformando clínicas e consultórios nos últimos anos.
            </p>
          </div>
          <TechTimeline />
        </div>
      </section>

      {/* Checklist de maturidade digital */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#F3EFFE', color: '#7C3AED' }}>✅ Diagnóstico</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Nível de Maturidade Digital da Sua Clínica
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Avalie em qual estágio sua clínica se encontra e saiba o que implementar a seguir.
            </p>
          </div>
          <TechChecklist />
        </div>
      </section>

      {/* Artigos */}
      {posts.length > 0 && (
        <section className="py-16 bg-white">
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

      {/* CTA NexusMed */}
      <section className="py-16" style={{ background: 'var(--nexus-navy)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">💻</div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tecnologia integrada na prática
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            O NexusMed reúne prontuário eletrônico, agendamento online, telemedicina e gestão financeira em uma única plataforma. Sem complexidade, sem vários sistemas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary" style={{ background: 'var(--nexus-green)' }}>
              Experimentar Grátis
            </a>
            <a href="/blog" className="nexus-btn-outline">Ver Todos os Artigos</a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <Newsletter />
      </div>
    </>
  );
}
