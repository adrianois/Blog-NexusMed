import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { CATEGORIES, getCategoryHref } from '@/lib/categories';

export default function ArticleHero({ post }: { post: Post }) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);
  const formattedDate = new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, var(--nexus-navy) 0%, #1A3A6B 60%, ${cat?.color ?? '#1E88E5'}33 100%)` }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      {/* Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: cat?.color ?? '#1E88E5', filter: 'blur(80px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="text-xs mb-5 flex flex-wrap items-center gap-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          {cat && (
            <>
              <span>/</span>
              <Link href={getCategoryHref(cat)} className="hover:text-white transition-colors">{cat.name}</Link>
            </>
          )}
        </nav>

        {/* Badge categoria */}
        {cat && (
          <Link href={getCategoryHref(cat)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 transition-opacity hover:opacity-80"
            style={{ background: `${cat.color}30`, border: `1px solid ${cat.color}60`, color: '#fff', fontFamily: 'Poppins, sans-serif' }}
          >
            {cat.icon} {cat.name}
          </Link>
        )}

        {/* Título */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-sm md:text-base mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)', fontFamily: 'Inter, sans-serif' }}>
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
          <span className="flex items-center gap-1.5">
            <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: cat?.bg ?? '#E3F2FD', color: cat?.color ?? '#1E88E5' }}>
              {post.author.charAt(0)}
            </span>
            <strong className="text-white">{post.author}</strong> &middot; {post.authorRole}
          </span>
          <span>📅 {formattedDate}</span>
          <span>⏱ {post.readTime} min de leitura</span>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
