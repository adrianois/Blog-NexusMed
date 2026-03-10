import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import MktHero from '@/components/marketing-medico/MktHero';
import EstrategiasCards from '@/components/marketing-medico/EstrategiasCards';
import CanaisTable from '@/components/marketing-medico/CanaisTable';
import ChecklistMkt from '@/components/marketing-medico/ChecklistMkt';

export const metadata = {
  title: 'Marketing Médico | Blog NexusMed',
  description: 'Estratégias éticas de captação de pacientes, presença digital e crescimento sustentável para clínicas e consultórios.',
};

export default function MarketingMedicoPage() {
  const posts = getPostsByCategory('marketing-medico');

  return (
    <>
      <MktHero />

      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>🚀 Estratégias</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              As 6 Estratégias de Marketing que Funcionam para Clínicas
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Marketing médico eficaz é ético, consistente e focado em educar — não em vender.
            </p>
          </div>
          <EstrategiasCards />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>📡 Canais</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Quais Canais Priorizar em 2026
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--nexus-gray-600)' }}>
              Comparativo de esforço, custo e retorno de cada canal para clínicas médicas.
            </p>
          </div>
          <CanaisTable />
        </div>
      </section>

      <section id="checklist" className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>✅ Diagnóstico</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Como Está o Marketing da Sua Clínica?
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Avalie cada área e descubra onde há mais oportunidade de crescimento.
            </p>
          </div>
          <ChecklistMkt />
        </div>
      </section>

      {posts.length > 0 && (
        <section id="artigos" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>📝 Artigos</span>
              <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                Artigos sobre Marketing Médico
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

      <section className="py-16" style={{ background: 'var(--nexus-navy)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">📣</div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cresça com consistência e ética
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            O NexusMed ajuda sua clínica a automatizar a confirmação de consultas, coletar NPS e transformar pacientes satisfeitos em promotores — tudo dentro das normas do CFM.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://www.instagram.com/nexusmed.app" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary" style={{ background: '#00875A' }}>
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
