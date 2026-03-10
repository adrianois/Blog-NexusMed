import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';

export default function CategoryGrid() {
  return (
    <section className="py-14" style={{ background: 'var(--nexus-gray-50)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: 'var(--nexus-primary-dark)' }}>
          Explore por Categoria
        </h2>
        <p className="text-center text-sm mb-8" style={{ color: 'var(--nexus-gray-600)' }}>
          Conteúdo organizado por área de gestão clínica
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="nexus-card flex flex-col items-center text-center p-4 gap-2 cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: cat.bg }}
              >
                {cat.icon}
              </div>
              <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--nexus-gray-800)' }}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
