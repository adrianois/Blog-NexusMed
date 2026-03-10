import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ArticleHero from '@/components/article/ArticleHero';
import ArticleBody from '@/components/article/ArticleBody';
import ArticleSidebar from '@/components/article/ArticleSidebar';
import ArticleNav from '@/components/article/ArticleNav';
import RelatedPosts from '@/components/article/RelatedPosts';
import Newsletter from '@/components/Newsletter';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog NexusMed`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <ArticleHero post={post} />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Conteúdo principal */}
          <main className="flex-1 min-w-0">
            <ArticleBody post={post} />
            <ArticleNav prevPost={prevPost} nextPost={nextPost} />
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <ArticleSidebar post={post} allPosts={allPosts} />
          </aside>
        </div>
      </div>

      {/* Artigos relacionados */}
      {related.length > 0 && (
        <section className="py-14" style={{ background: 'var(--nexus-gray-50)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <RelatedPosts posts={related} currentCategory={post.categoryName} />
          </div>
        </section>
      )}

      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Newsletter />
      </div>
    </>
  );
}
