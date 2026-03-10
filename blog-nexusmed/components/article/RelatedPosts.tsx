import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { CATEGORIES } from '@/lib/categories';

interface Props {
  posts: Post[];
  currentCategory: string;
}

export default function RelatedPosts({ posts, currentCategory }: Props) {
  return (
    <>
      <div className="mb-8">
        <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>📚 Leia Também</span>
        <h2 className="text-xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
          Mais artigos sobre {currentCategory}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post) => {
          const cat = CATEGORIES.find((c) => c.slug === post.category);
          const formattedDate = new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', {
            day: '2-digit', month: 'short', year: 'numeric',
          });
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="nexus-card p-5 flex flex-col gap-3 group">
              <div
                className="w-full rounded-xl flex items-center justify-center text-4xl"
                style={{ background: cat?.bg ?? '#F3F4F6', height: '90px' }}
              >
                {post.coverEmoji}
              </div>
              {cat && (
                <span className="nexus-tag" style={{ background: cat.bg, color: cat.color }}>
                  {cat.icon} {cat.name}
                </span>
              )}
              <h3 className="font-bold text-sm leading-snug group-hover:underline" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                {post.title}
              </h3>
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs" style={{ color: 'var(--nexus-gray-500)' }}>
                <span>📅 {formattedDate}</span>
                <span>⏱ {post.readTime} min</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
