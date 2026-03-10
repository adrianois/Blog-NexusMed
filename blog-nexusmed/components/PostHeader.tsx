import type { Post } from '@/lib/posts';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';

export default function PostHeader({ post }: { post: Post }) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);
  const formattedDate = new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header>
      {/* Breadcrumb */}
      <nav className="text-sm mb-6" style={{ color: 'var(--nexus-gray-600)' }}>
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <span className="mx-2">/</span>
        {cat && (
          <><Link href={`/categorias/${cat.slug}`} className="hover:underline">{cat.name}</Link><span className="mx-2">/</span></>
        )}
        <span style={{ color: 'var(--nexus-gray-800)' }}>{post.title}</span>
      </nav>

      {/* Category */}
      {cat && (
        <span
          className="nexus-tag mb-4"
          style={{ background: cat.bg, color: cat.color }}
        >
          {cat.icon} {cat.name}
        </span>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3 mb-4" style={{ color: 'var(--nexus-gray-900)' }}>
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm pb-6 border-b" style={{ color: 'var(--nexus-gray-600)', borderColor: 'var(--nexus-gray-200)' }}>
        <span>✍️ <strong>{post.author}</strong> · {post.authorRole}</span>
        <span>📅 {formattedDate}</span>
        <span>⏱ {post.readTime} min de leitura</span>
      </div>

      {/* Cover */}
      <div
        className="mt-6 rounded-2xl h-52 md:h-64 flex items-center justify-center text-8xl"
        style={{ background: cat ? cat.bg : 'var(--nexus-primary-light)' }}
      >
        {post.coverEmoji}
      </div>
    </header>
  );
}
