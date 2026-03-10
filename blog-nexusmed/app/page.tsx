import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import CategoryGrid from '@/components/CategoryGrid';
import Newsletter from '@/components/Newsletter';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 3);
  const latest = posts.slice(3, 9);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedPosts title="Artigos em Destaque" posts={featured} />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="nexus-tag" style={{ background: '#EFF6FF', color: '#0D2B5E' }}>🕒 Publicações Recentes</span>
            <h2 className="text-2xl font-bold mt-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Últimos Artigos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((post) => {
              const { default: PostCard } = require('@/components/PostCard');
              return <PostCard key={post.slug} post={post} />;
            })}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
