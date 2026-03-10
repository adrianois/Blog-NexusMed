import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--nexus-gray-900)', color: 'var(--nexus-gray-200)' }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ background: 'linear-gradient(135deg, #0A4F8A, #00C7A3)' }}
              >
                N
              </div>
              <span className="font-bold text-xl text-white">NexusMed</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--nexus-gray-600)', maxWidth: '280px', lineHeight: '1.7' }}>
              Gestão completa para clínicas modernas. Conteúdo especializado para profissionais de saúde que buscam excelência.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-gray-800 hover:bg-blue-600 transition-colors">in</a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-gray-800 hover:bg-pink-600 transition-colors">ig</a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-gray-800 hover:bg-blue-400 transition-colors">tw</a>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Categorias</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/categorias/${cat.slug}`} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--nexus-gray-600)' }}>
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Blog</h3>
            <ul className="space-y-2">
              {[{ href: '/blog', label: 'Todos os Artigos' }, { href: '/sobre', label: 'Sobre o Blog' }, { href: 'https://nexusmed.com.br', label: 'Site NexusMed' }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--nexus-gray-600)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid #1E293B' }}>
          <p className="text-xs" style={{ color: 'var(--nexus-gray-600)' }}>
            © {new Date().getFullYear()} NexusMed. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'var(--nexus-gray-600)' }}>
            Gestão completa para clínicas modernas.
          </p>
        </div>
      </div>
    </footer>
  );
}
