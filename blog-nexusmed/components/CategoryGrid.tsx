import Link from 'next/link';
import { CATEGORIES, getCategoryHref } from '@/lib/categories';

export default function CategoryGrid() {
  return (
    <section className="py-16" style={{ background: 'var(--nexus-gray-50)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
            Explore por Categoria
          </h2>
          <p className="text-sm" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            Conteúdo organizado por área de gestão clínica
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={getCategoryHref(cat)}
              className="nexus-card flex flex-col items-center text-center p-5 gap-3 cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: cat.bg }}
              >
                {cat.icon}
              </div>
              <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                {cat.name}
              </span>
              {cat.href && (
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: cat.bg, color: cat.color, fontFamily: 'Inter, sans-serif' }}>
                  Ver tudo →
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
