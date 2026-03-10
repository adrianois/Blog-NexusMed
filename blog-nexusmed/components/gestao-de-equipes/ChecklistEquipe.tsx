const AREAS = [
  {
    area: 'Cultura & Liderança',
    icon: '🎯',
    cor: '#1E88E5',
    bg: '#E3F2FD',
    itens: [
      'Valores da clínica definidos, documentados e comunicados à equipe',
      'Reunião de equipe semanal ou quinzenal realizada de forma consistente',
      'Líderes treinados em comunicação e gestão de pessoas',
      'Ambiente psicologicamente seguro para dar e receber feedback',
      'Missão e propósito da clínica claros para todos os colaboradores',
    ],
  },
  {
    area: 'Contratação & Onboarding',
    icon: '🚀',
    cor: '#7C3AED',
    bg: '#EDE9FE',
    itens: [
      'Descrição de cargo atualizada para cada função da clínica',
      'Processo seletivo com entrevista estruturada e critérios objetivos',
      'Checklist de integração para os primeiros 30 dias',
      'Buddy (colega padrinho) designado para novos colaboradores',
      'Meta e expectativa claras definidas para o fim do primeiro mês',
    ],
  },
  {
    area: 'Desenvolvimento & Feedback',
    icon: '📈',
    cor: '#00875A',
    bg: '#E0F5EE',
    itens: [
      'PDI (Plano de Desenvolvimento Individual) atualizado semestralmente',
      'Orçamento definido para treinamentos e capacitações',
      'Avaliação de desempenho com critérios objetivos e transparentes',
      'Check-ins semanais de 1:1 com cada membro da equipe',
      'Feedback imediato (positivo e corretivo) praticado rotineiramente',
    ],
  },
  {
    area: 'Retenção & Clima',
    icon: '🤝',
    cor: '#D97706',
    bg: '#FEF3C7',
    itens: [
      'Pesquisa de clima organizacional realizada semestralmente',
      'Entrevista de permanência com colaboradores-chave realizada',
      'Plano de cargos e salários documentado e comunicado',
      'Benefícios competitivos com o mercado da saúde regional',
      'Offboarding estruturado com entrevista de desligamento',
    ],
  },
];

export default function ChecklistEquipe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {AREAS.map((area) => (
        <div key={area.area} className="nexus-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: area.bg }}>
              {area.icon}
            </div>
            <h3 className="font-bold text-sm" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
              {area.area}
            </h3>
          </div>
          <ul className="space-y-2.5">
            {area.itens.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--nexus-gray-700)', fontFamily: 'Inter, sans-serif' }}>
                <span
                  className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center text-xs border-2"
                  style={{ borderColor: area.cor, color: area.cor }}
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
