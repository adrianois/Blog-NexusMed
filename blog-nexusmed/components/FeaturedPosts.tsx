import PostCard from './PostCard';
import type { Post } from '@/lib/posts';

interface Props {
  title: string;
  posts: Post[];
  variant?: 'grid' | 'default';
}

export default function FeaturedPosts({ title, posts, variant = 'default' }: Props) {
  return (
    <section
      className="py-14"
      style={{ background: variant === 'default' ? 'var(--nexus-gray-50)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <div className="mb-8">
            <span className="nexus-tag" style={{ background: '#E0F5EE', color: '#00875A' }}>⭐ Destaque</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
