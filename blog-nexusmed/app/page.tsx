import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import CategoryGrid from '@/components/CategoryGrid';
import Newsletter from '@/components/Newsletter';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 3);
  const latest = posts.slice(0, 6);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedPosts title="Artigos em Destaque" posts={featured} />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--nexus-primary-dark)' }}>
            Publicações Recentes
          </h2>
          <FeaturedPosts title="" posts={latest} variant="grid" />
        </div>
      </section>
      <Newsletter />
    </>
  );
}
