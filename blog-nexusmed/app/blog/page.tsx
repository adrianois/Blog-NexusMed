import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Todos os Artigos | Blog NexusMed',
  description: 'Explore todos os artigos sobre gestão clínica, tecnologia em saúde e boas práticas.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--nexus-primary-dark)' }}>
          Todos os Artigos
        </h1>
        <p className="text-lg" style={{ color: 'var(--nexus-gray-600)' }}>
          Conteúdo especializado em gestão clínica para profissionais de saúde.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <Newsletter />
    </div>
  );
}
