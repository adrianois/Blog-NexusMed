import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { CATEGORIES } from '@/lib/categories';

export default function PostCard({ post }: { post: Post }) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);

  return (
    <Link href={`/blog/${post.slug}`} className="nexus-card block overflow-hidden">
      {/* Cover */}
      <div
        className="h-40 flex items-center justify-center text-6xl"
        style={{ background: cat ? cat.bg : 'var(--nexus-primary-light)' }}
      >
        {post.coverEmoji}
      </div>
      <div className="p-5">
        {/* Category Tag */}
        <span
          className="nexus-tag mb-3"
          style={{ background: cat?.bg || 'var(--nexus-primary-light)', color: cat?.color || 'var(--nexus-primary)' }}
        >
          {post.categoryName}
        </span>
        <h3 className="font-bold text-base leading-snug mb-2" style={{ color: 'var(--nexus-gray-900)' }}>
          {post.title}
        </h3>
        <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--nexus-gray-600)' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs" style={{ color: 'var(--nexus-gray-600)' }}>
          <span>✍️ {post.author}</span>
          <span>⏱ {post.readTime} min</span>
        </div>
      </div>
    </Link>
  );
}
