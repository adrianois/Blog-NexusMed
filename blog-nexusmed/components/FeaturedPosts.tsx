import PostCard from './PostCard';
import type { Post } from '@/lib/posts';

interface Props {
  title: string;
  posts: Post[];
  variant?: 'grid' | 'default';
}

export default function FeaturedPosts({ title, posts, variant = 'default' }: Props) {
  return (
    <section className={`py-14 ${variant === 'default' ? '' : ''}`} style={{ background: variant === 'default' ? 'var(--nexus-primary-light)' : 'transparent' }}>
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--nexus-primary-dark)' }}>
            {title}
          </h2>
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
