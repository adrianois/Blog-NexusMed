const CHECKLISTS = [
  {
    titulo: '📅 Rotina Diária',
    cor: '#1565C0',
    bg: '#E3F2FD',
    itens: [
      'Conferir o caixa do dia anterior',
      'Checar agendamentos confirmados e cancelamentos',
      'Registrar todas as entradas e saídas no sistema',
      'Emitir NF-e dos atendimentos realizados',
    ],
  },
  {
    titulo: '📆 Rotina Semanal',
    cor: '#00875A',
    bg: '#E0F5EE',
    itens: [
      'Conciliar extratos bancários com o sistema financeiro',
      'Verificar inadimplência e acionar cobranças',
      'Acompanhar prazo de recebimento de convênios',
      'Revisar glosas recebidas na semana',
    ],
  },
  {
    titulo: '📊 Rotina Mensal',
    cor: '#7C3AED',
    bg: '#EDE9FE',
    itens: [
      'Calcular margem operacional do mês',
      'Comparar receita realizada vs. orçado',
      'Pagar guias de ISSQN, IRPJ e contribuições',
      'Revisar contratos de forne cedores e planos',
      'Atualizar fluxo de caixa projetado para próximos 90 dias',
    ],
  },
  {
    titulo: '🎯 Rotina Anual',
    cor: '#D97706',
    bg: '#FEF3C7',
    itens: [
      'Revisão geral da tabela de precos de procedimentos',
      'Renegociação de contratos com convênios',
      'Planejamento orçamentário do ano seguinte',
      'Auditoria de prontuários vs. faturamento',
      'Avaliação de investimentos e expansão',
    ],
  },
];

export default function ChecklistCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {CHECKLISTS.map((c) => (
        <div key={c.titulo} className="nexus-card p-6">
          <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{c.titulo}</h3>
          <ul className="space-y-2.5">
            {c.itens.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--nexus-gray-700)', fontFamily: 'Inter, sans-serif' }}>
                <span
                  className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center text-xs border-2"
                  style={{ borderColor: c.cor, color: c.cor }}
                >
                  ▢
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
