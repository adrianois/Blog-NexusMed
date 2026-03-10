import type { Post } from '@/lib/posts';
import { CATEGORIES } from '@/lib/categories';

export default function ArticleBody({ post }: { post: Post }) {
  const cat = CATEGORIES.find((c) => c.slug === post.category);

  return (
    <div>
      {/* Cover emoji banner */}
      <div
        className="w-full rounded-2xl flex items-center justify-center mb-8"
        style={{ background: cat?.bg ?? '#E3F2FD', height: '200px', fontSize: '5rem' }}
      >
        {post.coverEmoji}
      </div>

      {/* Prose content */}
      <div
        className="nexus-prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags footer */}
      {post.tags.length > 0 && (
        <div className="mt-10 pt-6" style={{ borderTop: '1px solid var(--nexus-gray-200)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--nexus-gray-500)', fontFamily: 'Poppins, sans-serif' }}>Tags</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: cat?.bg ?? '#F3F4F6', color: cat?.color ?? '#374151', border: `1px solid ${cat?.color ?? '#D1D5DB'}30` }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Author box */}
      <div className="mt-8 p-5 rounded-2xl flex gap-4 items-start" style={{ background: 'var(--nexus-gray-50)', border: '1px solid var(--nexus-gray-200)' }}>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
          style={{ background: cat?.bg ?? '#E3F2FD', color: cat?.color ?? '#1E88E5' }}
        >
          {post.author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{post.author}</p>
          <p className="text-xs" style={{ color: 'var(--nexus-gray-500)', fontFamily: 'Inter, sans-serif' }}>{post.authorRole} &middot; Blog NexusMed</p>
          <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            Conteúdo especializado em gestão, tecnologia e crescimento para clínicas e consultórios médicos.
          </p>
        </div>
      </div>
    </div>
  );
}
