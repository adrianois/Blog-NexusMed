'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIES } from '@/lib/categories';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ background: 'var(--nexus-navy)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <path d="M10 13h16v10H10z" fill="#1E88E5"/>
                <path d="M13 10h10v16H13z" fill="#1E88E5"/>
                <path d="M16 10h4v16h-4z" fill="#00A86B"/>
                <path d="M10 16h16v4H10z" fill="#00A86B"/>
                <circle cx="18" cy="18" r="2.5" fill="white"/>
              </svg>
            </div>
            <div className="leading-none">
              <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>
                Nexus<span style={{ color: 'var(--nexus-green)' }}>Med</span>
              </span>
              <span className="text-xs block mt-0.5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>Blog</span>
            </div>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>Artigos</Link>
            <Link href="/gestao-financeira" className="text-sm font-medium transition-colors hover:text-white flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
              💰 Gestão Financeira
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
                Categorias
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ borderColor: 'var(--nexus-gray-200)' }}>
                {CATEGORIES.map((cat) => (
                  <Link key={cat.slug} href={`/categorias/${cat.slug}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors"
                    style={{ color: 'var(--nexus-gray-800)', fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/sobre" className="text-sm font-medium transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>Sobre</Link>
            <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="nexus-btn-primary">Conheça o Sistema</a>
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex flex-col gap-1">
              <Link href="/blog" className="px-3 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/10" onClick={() => setMenuOpen(false)}>Artigos</Link>
              <Link href="/gestao-financeira" className="px-3 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/10" onClick={() => setMenuOpen(false)}>💰 Gestão Financeira</Link>
              {CATEGORIES.map((cat) => (
                <Link key={cat.slug} href={`/categorias/${cat.slug}`} className="px-3 py-2.5 rounded-xl text-sm flex items-center gap-2 hover:bg-white/10" style={{ color: 'rgba(255,255,255,0.8)' }} onClick={() => setMenuOpen(false)}>
                  <span>{cat.icon}</span> {cat.name}
                </Link>
              ))}
              <Link href="/sobre" className="px-3 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/10" onClick={() => setMenuOpen(false)}>Sobre</Link>
              <a href="https://nexusmed.com.br" target="_blank" rel="noopener noreferrer" className="mt-2 nexus-btn-primary justify-center">Conheça o Sistema</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
