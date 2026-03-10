import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { CATEGORIES } from '@/lib/categories';

export default function PostCard({ post }: { post: Post }) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);

  const defaultBg = '#E3F2FD';
  const defaultColor = '#1565C0';

  return (
    <Link href={`/blog/${post.slug}`} className="nexus-card block overflow-hidden group">
      {/* Cover */}
      <div
        className="h-40 flex items-center justify-center text-6xl relative overflow-hidden"
        style={{ background: cat ? cat.bg : defaultBg }}
      >
        <span className="transition-transform duration-300 group-hover:scale-110">{post.coverEmoji}</span>
        {/* Linha decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: cat ? cat.color : defaultColor }}></div>
      </div>

      <div className="p-5">
        {/* Tag */}
        <span
          className="nexus-tag mb-3"
          style={{ background: cat?.bg || defaultBg, color: cat?.color || defaultColor }}
        >
          {cat?.icon} {post.categoryName}
        </span>

        <h3 className="font-bold text-base leading-snug mb-2" style={{ color: 'var(--nexus-gray-900)', fontFamily: 'Poppins, sans-serif' }}>
          {post.title}
        </h3>
        <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs pt-3" style={{ borderTop: '1px solid var(--nexus-gray-100)', color: 'var(--nexus-gray-400)', fontFamily: 'Inter, sans-serif' }}>
          <span style={{ color: defaultColor, fontWeight: 600 }}>{post.author}</span>
          <span>⏱ {post.readTime} min</span>
        </div>
      </div>
    </Link>
  );
}
