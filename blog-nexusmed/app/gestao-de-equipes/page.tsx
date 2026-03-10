import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import EquipeHero from '@/components/gestao-de-equipes/EquipeHero';
import PilaresEquipe from '@/components/gestao-de-equipes/PilaresEquipe';
import CicloRH from '@/components/gestao-de-equipes/CicloRH';
import ChecklistEquipe from '@/components/gestao-de-equipes/ChecklistEquipe';

export const metadata = {
  title: 'Gestão de Equipes | Blog NexusMed',
  description: 'Liderança, contratação, cultura e desempenho de equipes para clínicas e consultórios médicos de alta performance.',
};

export default function GestaoDeEquipesPage() {
  const posts = getPostsByCategory('gestao-de-equipes');

  return (
    <>
      <EquipeHero />

      {/* Pilares */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>🏆 Pilares</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Os 6 Pilares de uma Equipe Clínica de Alta Performance
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              O que diferencia clínicas com equipes engajadas daquelas com alta rotatividade e baixo desempenho.
            </p>
          </div>
          <PilaresEquipe />
        </div>
      </section>

      {/* Ciclo de RH */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>🔄 Ciclo de RH</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              O Ciclo Completo de Gestão de Pessoas na Clínica
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Da atração ao desligamento: cada fase impacta a cultura e o resultado da sua clínica.
            </p>
          </div>
          <CicloRH />
        </div>
      </section>

      {/* Checklist */}
      <section id="checklist" className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>✅ Diagnóstico</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Como Está a Gestão de Pessoas na Sua Clínica?
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Avalie cada área e identifique onde há mais oportunidade de melhoria.
            </p>
          </div>
          <ChecklistEquipe />
        </div>
      </section>

      {/* Artigos */}
      {posts.length > 0 && (
        <section id="artigos" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>📝 Artigos</span>
              <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                Artigos sobre Gestão de Equipes
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
          <div className="text-5xl mb-4">👥</div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Sua equipe é o maior ativo da clínica
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            O NexusMed centraliza a operação da clínica para que sua equipe passe menos tempo em processos manuais e mais tempo cuidando de pacientes — com mais qualidade e menos estresse.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary" style={{ background: '#1E88E5' }}>
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
