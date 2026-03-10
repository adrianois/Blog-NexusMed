const FASES = [
  {
    icon: '📢',
    fase: 'Atração',
    titulo: 'Encontrando os Candidatos Certos',
    acoes: [
      'Descrição de vaga clara com valores e cultura da clínica',
      'Divulgação em portais especializados em saúde (Catho, LinkedIn)',
      'Indicações da equipe atual são a melhor fonte de candidatos',
    ],
    alerta: 'Vagas sem descrição de cultura atraem perfis genéricos.',
    cor: '#1E88E5',
    bg: '#E3F2FD',
  },
  {
    icon: '🔍',
    fase: 'Seleção',
    titulo: 'Escolhendo com Critério',
    acoes: [
      'Entrevista estruturada com perguntas comportamentais (STAR)',
      'Teste prático simulando situações reais do cargo',
      'Verificação de referências com perguntas específicas',
    ],
    alerta: 'Contratar rápido por pressão custa 150% do salário em demissões futuras.',
    cor: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '🚀',
    fase: 'Integração (Onboarding)',
    titulo: 'Primeiros 30 Dias Definem Tudo',
    acoes: [
      'Checklist de integração com tarefas, materiais e apresentações',
      'Buddy (colega padrinho) designado para os primeiros 30 dias',
      'Meta clara para o fim do primeiro mês',
    ],
    alerta: '45% da rotatividade acontece nos primeiros 90 dias por onboarding fraco.',
    cor: '#00875A',
    bg: '#E0F5EE',
  },
  {
    icon: '📈',
    fase: 'Desenvolvimento',
    titulo: 'Crescendo Junto com a Clínica',
    acoes: [
      'PDI (Plano de Desenvolvimento Individual) semestral',
      'Treinamentos técnicos e comportamentais com orçamento definido',
      'Trilha de carreira com critérios claros de progressão',
    ],
    alerta: 'Profissional sem perspectiva de crescimento começa a buscar emprego.',
    cor: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: '💬',
    fase: 'Avaliação & Feedback',
    titulo: 'Cultura de Melhoria Contínua',
    acoes: [
      'Avaliação de desempenho semestral com critérios objetivos',
      'Check-ins semanais de 15 minutos com cada liderado',
      'Feedback imediato (positivo e corretivo) sem esperar a avaliação',
    ],
    alerta: 'Feedback apenas na avaliação anual já é tarde demais para corrigir.',
    cor: '#DC2626',
    bg: '#FEE2E2',
  },
  {
    icon: '🤝',
    fase: 'Retenção & Desligamento',
    titulo: 'Cuidando do Ciclo Completo',
    acoes: [
      'Entrevista de permanência com colaboradores-chave (antes de pedirem demissão)',
      'Offboarding estruturado com transferência de conhecimento',
      'Entrevista de desligamento para mapear causas e melhorar',
    ],
    alerta: 'Entrevista de permanência previne demissões que ninguém viu vir.',
    cor: '#0D2B5E',
    bg: '#EFF6FF',
  },
];

export default function CicloRH() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'var(--nexus-gray-200)' }}></div>
      <div className="space-y-5">
        {FASES.map((fase, i) => (
          <div key={fase.fase} className="flex gap-6">
            <div className="relative flex-shrink-0">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 relative"
                style={{ background: fase.bg, border: `2px solid ${fase.cor}` }}
              >
                {fase.icon}
              </div>
            </div>
            <div className="nexus-card p-5 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: fase.cor }}>Fase {i + 1} — {fase.fase}</span>
              </div>
              <h3 className="font-bold text-sm mb-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{fase.titulo}</h3>
              <ul className="space-y-1.5 mb-3">
                {fase.acoes.map((acao) => (
                  <li key={acao} className="flex items-start gap-2 text-xs" style={{ color: 'var(--nexus-gray-700)', fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: fase.cor }}>✓</span> {acao}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg px-3 py-2" style={{ background: fase.bg }}>
                <p className="text-xs" style={{ color: fase.cor, fontFamily: 'Inter, sans-serif' }}>
                  <strong>💡</strong> {fase.alerta}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
