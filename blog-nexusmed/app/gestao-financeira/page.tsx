import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import GestaoFinanceiraHero from '@/components/gestao-financeira/Hero';
import KpiCards from '@/components/gestao-financeira/KpiCards';
import ChecklistCard from '@/components/gestao-financeira/ChecklistCard';
import IndicadoresTable from '@/components/gestao-financeira/IndicadoresTable';

export const metadata = {
  title: 'Gestão Financeira para Clínicas | Blog NexusMed',
  description: 'Guias completos sobre controle financeiro, fluxo de caixa, faturamento de convênios, precificação e saúde financeira para clínicas e consultórios.',
};

export default function GestaoFinanceiraPage() {
  const posts = getPostsByCategory('gestao-financeira');

  return (
    <>
      <GestaoFinanceiraHero />

      {/* KPIs Section */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#E3F2FD', color: '#1565C0' }}>📊 Indicadores</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              KPIs Financeiros Essenciais para Clínicas
            </h2>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
              Monitore estes indicadores mensalmente para garantir a saúde financeira da sua clínica.
            </p>
          </div>
          <KpiCards />
        </div>
      </section>

      {/* Tabela de Indicadores */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>📈 Benchmarks</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Benchmarks do Setor de Saúde
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--nexus-gray-600)' }}>
              Referenciais médios do mercado para clínicas brasileiras de pequeno e médio porte.
            </p>
          </div>
          <IndicadoresTable />
        </div>
      </section>

      {/* Checklists */}
      <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="nexus-tag" style={{ background: '#E3F2FD', color: '#1565C0' }}>✅ Checklists</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Rotinas Financeiras da Clínica
            </h2>
          </div>
          <ChecklistCard />
        </div>
      </section>

      {/* Artigos */}
      {posts.length > 0 && (
        <section id="artigos" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="nexus-tag" style={{ background: '#E3F2FD', color: '#1565C0' }}>📝 Artigos</span>
              <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                Artigos sobre Gestão Financeira
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
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Automatize a gestão financeira da sua clínica
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
            O NexusMed integra faturamento, fluxo de caixa, controle de convênios e relatórios financeiros em um único painel. Experimente grátis por 14 dias.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary" style={{ background: '#1565C0' }}>
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
