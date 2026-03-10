import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import ExpHero from '@/components/experiencia-do-paciente/ExpHero';
import PilaresCards from '@/components/experiencia-do-paciente/PilaresCards';
import JornadaTimeline from '@/components/experiencia-do-paciente/JornadaTimeline';
import ChecklistExp from '@/components/experiencia-do-paciente/ChecklistExp';

export const metadata = {
  title: 'Experiência do Paciente | Blog NexusMed',
  description: 'Estratégias práticas para encantar, fidelizar e engajar pacientes — da recepção ao pós-consulta.',
};

export default function ExperienciaDoPackientePage() {
  const posts = getPostsByCategory('experiencia-do-paciente');

  return (
    <>
      <ExpHero />

      {/* Pilares */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>🏆 Pilares</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Os 6 Pilares de uma Experiência Excepcional
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              O que separa clínicas que apenas atendem daquelas que encantam e fidelizam pacientes.
            </p>
          </div>
          <PilaresCards />
        </div>
      </section>

      {/* Jornada do Paciente */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>🗺️ Jornada</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              A Jornada Completa do Paciente
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Cada ponto de contato é uma oportunidade de encantar — ou de perder o paciente para sempre.
            </p>
          </div>
          <JornadaTimeline />
        </div>
      </section>

      {/* Checklist */}
      <section id="checklist" className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>✅ Diagnóstico</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Como Está a Experiência na Sua Clínica?
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Avalie cada área e identifique onde há mais oportunidade de melhoria.
            </p>
          </div>
          <ChecklistExp />
        </div>
      </section>

      {/* Artigos */}
      {posts.length > 0 && (
        <section id="artigos" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>📝 Artigos</span>
              <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                Artigos sobre Experiência do Paciente
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
          <div className="text-5xl mb-4">🤝</div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Transforme cada consulta em uma experiência memorável
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            O NexusMed integra agendamento online, confirmações automáticas, pesquisa de NPS e portal do paciente em uma única plataforma — tudo para criar uma jornada excepcional.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary" style={{ background: '#00875A' }}>
              Experimentar Grátis
            </a>
            <Link href="/blog" className="nexus-btn-outline">Ver Todos os Artigos</Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <Newsletter />
      </div>
    </>
  );
}
