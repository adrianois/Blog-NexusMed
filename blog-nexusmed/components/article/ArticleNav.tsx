import Link from 'next/link';
import type { Post } from '@/lib/posts';

interface Props {
  prevPost: Post | null;
  nextPost: Post | null;
}

export default function ArticleNav({ prevPost, nextPost }: Props) {
  if (!prevPost && !nextPost) return null;

  return (
    <nav
      className="mt-12 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
      style={{ borderTop: '1px solid var(--nexus-gray-200)' }}
    >
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="nexus-card p-4 flex flex-col gap-1 hover:border-current transition-all group"
        >
          <span className="text-xs font-semibold" style={{ color: 'var(--nexus-gray-400)', fontFamily: 'Inter, sans-serif' }}>
            ← Artigo anterior
          </span>
          <span className="text-sm font-semibold leading-snug group-hover:underline" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
            {prevPost.coverEmoji} {prevPost.title}
          </span>
        </Link>
      ) : <div />}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="nexus-card p-4 flex flex-col gap-1 text-right hover:border-current transition-all group"
        >
          <span className="text-xs font-semibold" style={{ color: 'var(--nexus-gray-400)', fontFamily: 'Inter, sans-serif' }}>
            Próximo artigo →
          </span>
          <span className="text-sm font-semibold leading-snug group-hover:underline" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
            {nextPost.coverEmoji} {nextPost.title}
          </span>
        </Link>
      ) : <div />}
    </nav>
  );
}
