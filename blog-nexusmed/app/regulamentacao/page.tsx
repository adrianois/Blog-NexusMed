import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import RegHero from '@/components/regulamentacao/RegHero';
import NormasCards from '@/components/regulamentacao/NormasCards';
import OrgaosTable from '@/components/regulamentacao/OrgaosTable';
import ChecklistConformidade from '@/components/regulamentacao/ChecklistConformidade';

export const metadata = {
  title: 'Regulamentação | Blog NexusMed',
  description: 'CFM, LGPD, ANS, ANVISA, CRM e tudo sobre conformidade legal para clínicas e consultórios médicos no Brasil.',
};

export default function RegulamentacaoPage() {
  const posts = getPostsByCategory('regulamentacao');

  return (
    <>
      <RegHero />

      {/* Principais Normas */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#FEF3C7', color: '#B45309' }}>📚 Normas Essenciais</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              As Regulações que Todo Gestor de Clínica Precisa Conhecer
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              As principais normas vigentes em 2026 que impactam diretamente a operação da sua clínica.
            </p>
          </div>
          <NormasCards />
        </div>
      </section>

      {/* Órgãos Reguladores */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="nexus-tag" style={{ background: '#FEF3C7', color: '#B45309' }}>⚖️ Órgãos Reguladores</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Quem Fiscaliza e o Que Pode Acontecer
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--nexus-gray-600)' }}>
              Conheça os principais órgãos reguladores da área da saúde e suas competências.
            </p>
          </div>
          <OrgaosTable />
        </div>
      </section>

      {/* Checklist de Conformidade */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: 'var(--nexus-green-light)', color: 'var(--nexus-green)' }}>✅ Conformidade</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Checklist de Conformidade para Clínicas em 2026
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Verifique o status regulatório da sua clínica nas principais áreas de risco.
            </p>
          </div>
          <ChecklistConformidade />
        </div>
      </section>

      {/* Artigos */}
      {posts.length > 0 && (
        <section id="artigos" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="nexus-tag" style={{ background: '#FEF3C7', color: '#B45309' }}>📝 Artigos</span>
              <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                Artigos sobre Regulamentação em Saúde
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
          <div className="text-5xl mb-4">⚖️</div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Fique sempre em conformidade
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            O NexusMed é desenvolvido em conformidade com CFM, LGPD, ANS e ANVISA. Prontuário eletrônico, assinatura digital e armazenamento seguro de dados — tudo para sua clínica operar com tranquilidade jurídica.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary" style={{ background: '#B45309' }}>
              Conhecer o NexusMed
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
