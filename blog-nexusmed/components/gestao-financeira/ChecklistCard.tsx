const CHECKLISTS = [
  {
    periodo: 'Diário',
    icon: '📆',
    color: 'var(--nexus-blue)',
    bg: 'var(--nexus-blue-light)',
    items: [
      'Conferir o caixa do dia (entradas e saídas)',
      'Verificar pagamentos recebidos x previstos',
      'Registrar despesas realizadas no dia',
      'Confirmar agendamentos do dia seguinte',
    ],
  },
  {
    periodo: 'Semanal',
    icon: '📋',
    color: 'var(--nexus-green)',
    bg: 'var(--nexus-green-light)',
    items: [
      'Reconciliar extrato bancário com sistema',
      'Acompanhar contas a pagar da semana',
      'Revisar cobranças pendentes de convênios',
      'Analisar taxa de ocupação da semana',
      'Verificar estoque de insumos x custo',
    ],
  },
  {
    periodo: 'Mensal',
    icon: '📊',
    color: '#7C3AED',
    bg: '#F3EFFE',
    items: [
      'Fechar DRE (Demonstrativo de Resultado)',
      'Calcular e analisar todos os KPIs financeiros',
      'Conferir e contestar glosas de convênios',
      'Revisar folha de pagamento e encargos',
      'Pagar guias (INSS, FGTS, ISS, IRPJ)',
      'Comparar receita x meta do mês',
      'Planejar fluxo de caixa do mês seguinte',
    ],
  },
  {
    periodo: 'Anual',
    icon: '🗓️',
    color: '#D97706',
    bg: '#FEF3C7',
    items: [
      'Revisar e reajustar tabela de preços (IPCA-Saúde)',
      'Renegociar contratos com fornecedores',
      'Avaliar mix de convênios x particular',
      'Fazer inventário completo de patrimônio',
      'Revisar planejamento tributário com contador',
      'Definir metas financeiras para o próximo ano',
    ],
  },
];

export default function ChecklistCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {CHECKLISTS.map((list) => (
        <div key={list.periodo} className="nexus-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: list.bg }}>
              {list.icon}
            </div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              Rotina {list.periodo}
            </h3>
          </div>
          <ul className="space-y-2.5">
            {list.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
                <span className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white font-bold" style={{ background: list.color }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
