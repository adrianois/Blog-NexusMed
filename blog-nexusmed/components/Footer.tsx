import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--nexus-navy)' }}>
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <path d="M10 13h16v10H10z" fill="#1E88E5"/>
                <path d="M13 10h10v16H13z" fill="#1E88E5"/>
                <path d="M16 10h4v16h-4z" fill="#00A86B"/>
                <path d="M10 16h16v4H10z" fill="#00A86B"/>
                <circle cx="18" cy="18" r="2.5" fill="white"/>
              </svg>
              <span className="font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>
                Nexus<span style={{ color: 'var(--nexus-green)' }}>Med</span>
              </span>
            </div>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '280px', fontFamily: 'Inter, sans-serif' }}>
              Gestão completa para clínicas modernas. Conteúdo especializado para profissionais de saúde.
            </p>
            <div className="flex gap-2">
              {[{ label: 'in', hover: '#0A66C2' }, { label: 'ig', hover: '#E1306C' }, { label: 'yt', hover: '#FF0000' }].map((s) => (
                <a key={s.label} href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.1)', fontFamily: 'Poppins, sans-serif' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--nexus-green)', fontFamily: 'Poppins, sans-serif' }}>Categorias</h3>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/categorias/${cat.slug}`} className="text-sm transition-colors hover:text-white flex items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--nexus-green)', fontFamily: 'Poppins, sans-serif' }}>Blog</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/blog', label: 'Todos os Artigos' },
                { href: '/sobre', label: 'Sobre o Blog' },
                { href: 'https://nexusmed.com.br', label: 'Site NexusMed ↗' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} NexusMed. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            Gestão completa para clínicas modernas.
          </p>
        </div>
      </div>
    </footer>
  );
}
