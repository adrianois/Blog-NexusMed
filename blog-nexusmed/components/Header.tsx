'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIES } from '@/lib/categories';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" style={{ borderBottom: '2px solid var(--nexus-primary)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #0A4F8A, #00C7A3)' }}
            >
              N
            </div>
            <div>
              <span className="font-bold text-lg" style={{ color: 'var(--nexus-primary-dark)' }}>NexusMed</span>
              <span className="text-xs block" style={{ color: 'var(--nexus-gray-600)', marginTop: '-4px' }}>Blog</span>
            </div>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors" style={{ color: 'var(--nexus-gray-600)' }}>
              Artigos
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium flex items-center gap-1 transition-colors" style={{ color: 'var(--nexus-gray-600)' }}>
                Categorias <span className="text-xs">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all" style={{ borderColor: 'var(--nexus-gray-200)' }}>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categorias/${cat.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                    style={{ color: 'var(--nexus-gray-800)' }}
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/sobre" className="text-sm font-medium transition-colors" style={{ color: 'var(--nexus-gray-600)' }}>
              Sobre
            </Link>
            <a
              href="https://nexusmed.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--nexus-primary)' }}
            >
              Conheça o Sistema
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--nexus-gray-200)' }}>
            <div className="flex flex-col gap-3">
              <Link href="/blog" className="text-sm font-medium py-1" style={{ color: 'var(--nexus-gray-800)' }} onClick={() => setMenuOpen(false)}>Artigos</Link>
              {CATEGORIES.map((cat) => (
                <Link key={cat.slug} href={`/categorias/${cat.slug}`} className="text-sm py-1 flex items-center gap-2" style={{ color: 'var(--nexus-gray-600)' }} onClick={() => setMenuOpen(false)}>
                  <span>{cat.icon}</span> {cat.name}
                </Link>
              ))}
              <Link href="/sobre" className="text-sm font-medium py-1" style={{ color: 'var(--nexus-gray-800)' }} onClick={() => setMenuOpen(false)}>Sobre</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
