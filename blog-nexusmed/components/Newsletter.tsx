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
    <section className="my-12 rounded-2xl p-8 md:p-12 text-white nexus-gradient">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-2xl font-bold mb-2">Fique por dentro da gestão clínica</h2>
        <p className="opacity-80 text-sm mb-6">
          Receba os melhores artigos sobre gestão de clínicas diretamente no seu e-mail. Sem spam.
        </p>
        {submitted ? (
          <div className="bg-white/20 rounded-xl px-6 py-4 text-center">
            <span className="text-2xl block mb-1">🎉</span>
            <p className="font-semibold">Ótimo! Você está inscrito.</p>
            <p className="text-sm opacity-75">Em breve você receberá nossos conteúdos.</p>
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
              style={{ color: 'var(--nexus-gray-800)', background: 'white' }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-white hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ color: 'var(--nexus-primary-dark)' }}
            >
              Quero receber
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
