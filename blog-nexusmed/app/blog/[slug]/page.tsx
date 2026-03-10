import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import PostHeader from '@/components/PostHeader';
import Newsletter from '@/components/Newsletter';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog NexusMed`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <PostHeader post={post} />
      <div
        className="prose mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--nexus-gray-200)' }}>
        <Newsletter />
      </div>
    </article>
  );
}
