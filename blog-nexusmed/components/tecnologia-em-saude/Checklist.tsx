const NIVEIS = [
  {
    nivel: 'Nível 1',
    titulo: 'Iniciante Digital',
    emoji: '🐣',
    color: '#D97706',
    bg: '#FEF3C7',
    descricao: 'Sua clínica ainda usa processos manuais na maioria das áreas.',
    itens: [
      { texto: 'Usar e-mail para comunicar resultados de exames', ok: true },
      { texto: 'Agenda em papel ou planilha Excel', ok: false },
      { texto: 'Prontuário eletrônico básico', ok: false },
      { texto: 'Cobrança integrada ao sistema', ok: false },
    ],
    proximo: 'Implante um PEP e sistema de agendamento online.',
  },
  {
    nivel: 'Nível 2',
    titulo: 'Em Transição',
    emoji: '📦',
    color: 'var(--nexus-blue)',
    bg: 'var(--nexus-blue-light)',
    descricao: 'Você já usa algumas ferramentas digitais, mas de forma isolada.',
    itens: [
      { texto: 'Prontuário eletrônico ativo', ok: true },
      { texto: 'Agendamento online para pacientes', ok: true },
      { texto: 'Faturamento integrado com PEP', ok: false },
      { texto: 'Confirmação automática de consultas', ok: false },
    ],
    proximo: 'Integre faturamento e automatize comunicações com pacientes.',
  },
  {
    nivel: 'Nível 3',
    titulo: 'Clínica Conectada',
    emoji: '📱',
    color: 'var(--nexus-green)',
    bg: 'var(--nexus-green-light)',
    descricao: 'Sistemas integrados e automações básicas funcionando.',
    itens: [
      { texto: 'PEP + agendamento + faturamento integrados', ok: true },
      { texto: 'Lembretes automáticos via WhatsApp', ok: true },
      { texto: 'Telemedicina disponível para pacientes', ok: true },
      { texto: 'Dashboard financeiro com KPIs', ok: false },
    ],
    proximo: 'Adicione BI para tomada de decisão baseada em dados.',
  },
  {
    nivel: 'Nível 4',
    titulo: 'Clínica Inteligente',
    emoji: '🚀',
    color: '#7C3AED',
    bg: '#F3EFFE',
    descricao: 'Tecnologia como vantagem competitiva real.',
    itens: [
      { texto: 'BI com KPIs em tempo real', ok: true },
      { texto: 'IA para apoio ao diagnóstico e triagem', ok: true },
      { texto: 'Análise preditiva de no-shows e demanda', ok: true },
      { texto: 'Interoperabilidade com outros sistemas de saúde', ok: true },
    ],
    proximo: 'Parabéns! Continue inovando e compartilhe boas práticas.',
  },
];

export default function TechChecklist() {
  return (
    <div id="diagnostico" className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {NIVEIS.map((nivel) => (
        <div key={nivel.nivel} className="nexus-card p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: nivel.bg }}>
              {nivel.emoji}
            </div>
            <div>
              <span className="text-xs font-bold" style={{ color: nivel.color, fontFamily: 'Poppins, sans-serif' }}>{nivel.nivel}</span>
              <h3 className="font-bold text-base leading-tight" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{nivel.titulo}</h3>
            </div>
          </div>

          <p className="text-sm mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>{nivel.descricao}</p>

          {/* Itens */}
          <ul className="space-y-2 mb-4">
            {nivel.itens.map((item) => (
              <li key={item.texto} className="flex items-start gap-2 text-sm" style={{ color: item.ok ? 'var(--nexus-gray-800)' : 'var(--nexus-gray-400)', fontFamily: 'Inter, sans-serif' }}>
                <span className={`mt-0.5 flex-shrink-0 text-base`}>{item.ok ? '✅' : '□'}</span>
                <span style={{ textDecoration: item.ok ? 'none' : 'none' }}>{item.texto}</span>
              </li>
            ))}
          </ul>

          {/* Próximo passo */}
          <div className="rounded-xl px-4 py-3 text-xs" style={{ background: nivel.bg, color: nivel.color, fontFamily: 'Inter, sans-serif' }}>
            <strong>Próximo passo:</strong> {nivel.proximo}
          </div>
        </div>
      ))}
    </div>
  );
}
