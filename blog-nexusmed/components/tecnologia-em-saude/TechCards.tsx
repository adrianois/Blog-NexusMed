const TECHS = [
  {
    icon: '📄',
    title: 'Prontuário Eletrônico (PEP)',
    badge: 'Essencial',
    badgeColor: 'var(--nexus-blue)',
    badgeBg: 'var(--nexus-blue-light)',
    description: 'Substitui o papel por registros digitais seguros, acessíveis e integrados. Obrigatório pelo CFM 1.821/07 e base de toda a gestão clínica moderna.',
    beneficios: ['Acesso remoto ao histórico do paciente', 'Redução de erros de prescrição', 'Integração com TISS para convênios', 'Backup automático em nuvem'],
    color: 'var(--nexus-blue)',
    bg: 'var(--nexus-blue-light)',
  },
  {
    icon: '📹',
    title: 'Telemedicina',
    badge: 'Em alta',
    badgeColor: 'var(--nexus-green)',
    badgeBg: 'var(--nexus-green-light)',
    description: 'Consultas por vídeo regulamentadas pelo CFM 2.314/22. Amplia o alcance da clínica, reduz custos operacionais e melhora o acesso do paciente.',
    beneficios: ['Atendimento sem deslocamento', 'Menor custo por consulta', 'Maior taxa de retenção de pacientes', 'Conformidade com CFM 2.314/22'],
    color: 'var(--nexus-green)',
    bg: 'var(--nexus-green-light)',
  },
  {
    icon: '🤖',
    title: 'Inteligência Artificial',
    badge: 'Tendência',
    badgeColor: '#7C3AED',
    badgeBg: '#F3EFFE',
    description: 'IA aplicada à saúde: análise de imagens, apoio ao diagnóstico, chatbots de triagem e automação de tarefas administrativas repetitivas.',
    beneficios: ['Apoio ao diagnóstico por imagem', 'Triagem automática de pacientes', 'Análise preditiva de cancelamentos', 'Automação de relatórios'],
    color: '#7C3AED',
    bg: '#F3EFFE',
  },
  {
    icon: '📊',
    title: 'Business Intelligence (BI)',
    badge: 'Estratégico',
    badgeColor: '#D97706',
    badgeBg: '#FEF3C7',
    description: 'Dashboards e relatórios que transformam dados da clínica em decisões estratégicas: ocupação, receita, perfil de pacientes e performance da equipe.',
    beneficios: ['Decisões baseadas em dados reais', 'Identificação de gargalos operacionais', 'Previsão de demanda por especialidade', 'Relatórios automáticos para gestão'],
    color: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: '📱',
    title: 'Agendamento Online',
    badge: 'Alta adesão',
    badgeColor: 'var(--nexus-blue-dark)',
    badgeBg: 'var(--nexus-blue-light)',
    description: 'Portal de agendamento 24/7 pelo celular ou computador. Reduz ligações para a recepção, diminui faltas e melhora a experiência do paciente.',
    beneficios: ['Agendamento fora do horário comercial', 'Confirmação automática via WhatsApp', 'Lista de espera inteligente', 'Redução de no-shows em até 40%'],
    color: 'var(--nexus-blue-dark)',
    bg: 'var(--nexus-blue-light)',
  },
  {
    icon: '🔐',
    title: 'Segurança & LGPD',
    badge: 'Obrigatório',
    badgeColor: '#DC2626',
    badgeBg: '#FEE2E2',
    description: 'Proteção de dados sensíveis de saúde com criptografia, controle de acesso por perfil, auditoria de acessos e conformidade total com a LGPD.',
    beneficios: ['Criptografia em repouso e trânsito', 'Controle de acesso por função', 'Log completo de acessos ao prontuário', 'Conformidade LGPD e CFM'],
    color: '#DC2626',
    bg: '#FEE2E2',
  },
];

export default function TechCards() {
  return (
    <div id="ferramentas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {TECHS.map((tech) => (
        <div key={tech.title} className="nexus-card p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-13 h-13 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: tech.bg, width: '52px', height: '52px' }}>
              {tech.icon}
            </div>
            <span className="nexus-tag" style={{ background: tech.badgeBg, color: tech.badgeColor }}>
              {tech.badge}
            </span>
          </div>

          <h3 className="font-bold text-base mb-2" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
            {tech.title}
          </h3>
          <p className="text-sm mb-4 flex-1" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
            {tech.description}
          </p>

          {/* Benefícios */}
          <ul className="space-y-1.5 mt-auto pt-4" style={{ borderTop: '1px solid var(--nexus-gray-100)' }}>
            {tech.beneficios.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
                <span className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: tech.color, minWidth: '16px' }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
