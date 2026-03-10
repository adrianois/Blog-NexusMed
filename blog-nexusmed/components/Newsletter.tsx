'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="my-12 rounded-2xl overflow-hidden" style={{ background: 'var(--nexus-navy)' }}>
      <div className="relative p-8 md:p-12">
        {/* Decoração */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ background: 'var(--nexus-green)' }}></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2" style={{ background: 'var(--nexus-blue)' }}></div>

        <div className="max-w-xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-3xl mb-5"
            style={{ background: 'rgba(0, 168, 107, 0.15)' }}
          >
            📬
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Fique por dentro da gestão clínica
          </h2>
          <p className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
            Receba os melhores artigos sobre gestão de clínicas diretamente no seu e-mail. Sem spam, apenas conteúdo relevante.
          </p>

          {submitted ? (
            <div className="rounded-xl px-6 py-5 text-center" style={{ background: 'rgba(0,168,107,0.15)', border: '1px solid rgba(0,168,107,0.3)' }}>
              <span className="text-3xl block mb-2">🎉</span>
              <p className="font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Ótimo! Você está inscrito.</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Em breve você receberá nossos conteúdos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  color: 'var(--nexus-gray-800)',
                  background: 'rgba(255,255,255,0.95)',
                  fontFamily: 'Inter, sans-serif',
                  border: '2px solid transparent'
                }}
              />
              <button type="submit" className="nexus-btn-primary whitespace-nowrap" style={{ background: 'var(--nexus-green)' }}>
                Quero receber
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
