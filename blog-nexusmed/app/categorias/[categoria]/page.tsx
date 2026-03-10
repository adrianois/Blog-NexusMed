import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { notFound } from 'next/navigation';
import { CATEGORIES } from '@/lib/categories';

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ categoria: cat.slug }));
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.categoria);
  if (!category) notFound();

  const posts = getAllPosts().filter((p) => p.category === params.categoria);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{category.icon}</span>
        <h1 className="text-4xl font-bold" style={{ color: 'var(--nexus-primary-dark)' }}>
          {category.name}
        </h1>
      </div>
      <p className="text-lg mb-10" style={{ color: 'var(--nexus-gray-600)' }}>
        {category.description}
      </p>
      {posts.length === 0 ? (
        <p style={{ color: 'var(--nexus-gray-600)' }}>Nenhum artigo nesta categoria ainda.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
