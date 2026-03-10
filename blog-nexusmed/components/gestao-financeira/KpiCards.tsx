const KPIS = [
  {
    icon: '💵',
    title: 'Ticket Médio',
    description: 'Receita total dividida pelo número de atendimentos no período.',
    formula: 'Receita ÷ Nº de consultas',
    meta: 'Aumentar progressivamente',
    tip: 'Revise a precificação anualmente considerando inflação e IPCA-Saúde.',
    color: 'var(--nexus-blue)',
    bg: 'var(--nexus-blue-light)',
  },
  {
    icon: '📊',
    title: 'Margem Operacional',
    description: 'Percentual de lucro após deduzir todos os custos operacionais.',
    formula: '(Lucro ÷ Receita) × 100',
    meta: 'Ideal: acima de 15%',
    tip: 'Clínicas bem geridas atingem margens entre 20% e 35%.',
    color: 'var(--nexus-green)',
    bg: 'var(--nexus-green-light)',
  },
  {
    icon: '🔄',
    title: 'Taxa de Ocupação',
    description: 'Percentual de horários disponíveis efetivamente realizados.',
    formula: '(Consultas realizadas ÷ Horários disponíveis) × 100',
    meta: 'Ideal: acima de 80%',
    tip: 'Abaixo de 70% indica necessidade de revisar a captação ou agenda.',
    color: '#7C3AED',
    bg: '#F3EFFE',
  },
  {
    icon: '⚠️',
    title: 'Taxa de Glosa',
    description: 'Percentual de cobranças negadas pelos planos de saúde.',
    formula: '(Valor glosado ÷ Valor faturado) × 100',
    meta: 'Ideal: abaixo de 5%',
    tip: 'Acima de 10% exige revisão urgente do processo de faturamento.',
    color: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: '🏦',
    title: 'Capital de Giro',
    description: 'Capacidade de honrar compromissos de curto prazo com recursos disponíveis.',
    formula: 'Ativo Circulante - Passivo Circulante',
    meta: 'Manter reserva de 3 meses de custos fixos',
    tip: 'Separe uma conta exclusiva para reserva de emergência da clínica.',
    color: 'var(--nexus-blue-dark)',
    bg: 'var(--nexus-blue-light)',
  },
  {
    icon: '📅',
    title: 'Prazo Médio de Recebimento',
    description: 'Tempo médio entre a prestação do serviço e o recebimento efetivo.',
    formula: '(Contas a receber ÷ Receita mensal) × 30',
    meta: 'Ideal: abaixo de 30 dias',
    tip: 'Convênios costumam pagar em 30-60 dias. Negocie antecipação de recebíveis.',
    color: 'var(--nexus-green-dark)',
    bg: 'var(--nexus-green-light)',
  },
];

export default function KpiCards() {
  return (
    <div id="kpis" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {KPIS.map((kpi) => (
        <div key={kpi.title} className="nexus-card p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: kpi.bg }}>
              {kpi.icon}
            </div>
            <div>
              <h3 className="font-bold text-base" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{kpi.title}</h3>
              <p className="text-xs mt-0.5 leading-snug" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>{kpi.description}</p>
            </div>
          </div>

          {/* Fórmula */}
          <div className="rounded-xl px-3 py-2 mb-3 text-xs font-mono" style={{ background: 'var(--nexus-gray-100)', color: 'var(--nexus-gray-800)' }}>
            {kpi.formula}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: kpi.bg, color: kpi.color, fontFamily: 'Poppins, sans-serif' }}>
              🎯 {kpi.meta}
            </span>
          </div>

          {/* Dica */}
          <p className="text-xs leading-relaxed" style={{ color: 'var(--nexus-gray-600)', borderLeft: `3px solid ${kpi.color}`, paddingLeft: '10px', fontFamily: 'Inter, sans-serif' }}>
            💡 {kpi.tip}
          </p>
        </div>
      ))}
    </div>
  );
}
