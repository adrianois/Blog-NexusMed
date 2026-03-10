'use client';
import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { CATEGORIES, getCategoryHref } from '@/lib/categories';

interface Props {
  post: Post;
  allPosts: Post[];
}

export default function ArticleSidebar({ post, allPosts }: Props) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);
  const recent = allPosts.filter((p) => p.slug !== post.slug).slice(0, 5);
  const sameCat = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 4);

  return (
    <div className="space-y-6 lg:sticky lg:top-24">

      {/* Sobre a categoria */}
      {cat && (
        <div className="nexus-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: cat.bg }}>{cat.icon}</span>
            <h3 className="font-bold text-sm" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{cat.name}</h3>
          </div>
          <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>{cat.description}</p>
          <Link
            href={getCategoryHref(cat)}
            className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
            style={{ color: cat.color }}
          >
            Ver todos os artigos →
          </Link>
        </div>
      )}

      {/* Mais nesta categoria */}
      {sameCat.length > 0 && (
        <div className="nexus-card p-5">
          <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
            📚 Mais em {cat?.name ?? 'Artigos'}
          </h3>
          <ul className="space-y-3">
            {sameCat.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="flex items-start gap-2 group">
                  <span className="text-xl flex-shrink-0 mt-0.5">{p.coverEmoji}</span>
                  <span className="text-xs leading-snug group-hover:underline" style={{ color: 'var(--nexus-gray-700)', fontFamily: 'Inter, sans-serif' }}>
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Artigos recentes */}
      <div className="nexus-card p-5">
        <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
          🕒 Artigos Recentes
        </h3>
        <ul className="space-y-3">
          {recent.map((p) => {
            const c = CATEGORIES.find((c) => c.slug === p.category);
            return (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="flex items-start gap-2 group">
                  <span className="text-xl flex-shrink-0 mt-0.5">{p.coverEmoji}</span>
                  <div>
                    <span className="text-xs leading-snug group-hover:underline block" style={{ color: 'var(--nexus-gray-700)', fontFamily: 'Inter, sans-serif' }}>
                      {p.title}
                    </span>
                    {c && (
                      <span className="text-xs mt-0.5" style={{ color: c.color }}>{c.icon} {c.name}</span>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA NexusMed */}
      <div className="rounded-2xl p-5 text-white" style={{ background: 'linear-gradient(135deg, var(--nexus-navy) 0%, #1A3A6B 100%)' }}>
        <p className="text-2xl mb-2">🚀</p>
        <h3 className="font-bold text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Automatize sua clínica</h3>
        <p className="text-xs mb-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>Agendamento, confirmação e NPS no piloto automático.</p>
        <a
          href="https://www.instagram.com/nexusmed.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs font-semibold py-2 px-4 rounded-xl transition-opacity hover:opacity-90"
          style={{ background: '#00875A', color: '#fff' }}
        >
          Testar Grátis
        </a>
      </div>
    </div>
  );
}
