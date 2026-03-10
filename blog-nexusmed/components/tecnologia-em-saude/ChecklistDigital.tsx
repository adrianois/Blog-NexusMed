const NIVEIS = [
  {
    nivel: 'Nível 1 — Iniciante',
    icon: '👶',
    cor: '#DC2626',
    bg: '#FEE2E2',
    descricao: 'Clínica ainda usa processos manuais na maior parte das operações.',
    itens: [
      { feito: false, texto: 'Possui prontuário eletrônico (PEP) ativo' },
      { feito: false, texto: 'Agenda é digital (não usa caderno ou papel)' },
      { feito: false, texto: 'Tem e-mail corporativo e presença no Google Meu Negócio' },
      { feito: false, texto: 'Usa WhatsApp Business para contato com pacientes' },
    ],
    proximo: 'Implante PEP e digitalize a agenda. Esses são os alicerces da transformação digital.',
  },
  {
    nivel: 'Nível 2 — Em Desenvolvimento',
    icon: '👧',
    cor: '#D97706',
    bg: '#FEF3C7',
    descricao: 'Já possui o básico digital, mas operações ainda são fragmentadas.',
    itens: [
      { feito: false, texto: 'Agendamento online disponível para pacientes 24/7' },
      { feito: false, texto: 'Confirmação automática de consultas (WhatsApp/SMS)' },
      { feito: false, texto: 'Faturamento de convênios via TISS integrado ao PEP' },
      { feito: false, texto: 'Backup automático de dados na nuvem' },
      { feito: false, texto: 'Equipe treinada em LGPD e proteção de dados' },
    ],
    proximo: 'Integre os sistemas e automatize confirmações. Isso já gera ROI mensurável.',
  },
  {
    nivel: 'Nível 3 — Avançado',
    icon: '👨‍💼',
    cor: '#1E88E5',
    bg: '#E3F2FD',
    descricao: 'Operações digitais e integradas. Usando dados para tomar decisões.',
    itens: [
      { feito: false, texto: 'Telemedicina ativa e regularizada (CFM 2.314/22)' },
      { feito: false, texto: 'Dashboard de KPIs financeiros e operacionais em tempo real' },
      { feito: false, texto: 'NPS automatizado enviado após cada consulta' },
      { feito: false, texto: 'Portal do paciente com histórico e documentos online' },
      { feito: false, texto: 'Receita e atestado digital com assinatura ICP-Brasil' },
    ],
    proximo: 'Explore BI avançado e integrações com wearables e monitoramento contínuo.',
  },
  {
    nivel: 'Nível 4 — Referência',
    icon: '🏆',
    cor: '#00A86B',
    bg: '#E0F5EE',
    descricao: 'Clínica totalmente digital, orientada a dados e com IA integrada.',
    itens: [
      { feito: false, texto: 'IA aplicada em triagem, agendamento ou apoio diagnóstico' },
      { feito: false, texto: 'Integração com wearables e IoMT para pacientes crônicos' },
      { feito: false, texto: 'Plano de resposta a incidentes de segurança documentado' },
      { feito: false, texto: 'Processos administrativos >80% automatizados' },
      { feito: false, texto: 'Experiência do paciente 100% digital do agendamento ao pós-consulta' },
    ],
    proximo: 'Compartilhe sua experiência! Clínicas neste nível são referência no mercado.',
  },
];

export default function ChecklistDigital() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {NIVEIS.map((nivel) => (
        <div key={nivel.nivel} className="nexus-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: nivel.bg }}>
              {nivel.icon}
            </div>
            <h3 className="font-bold text-base" style={{ color: nivel.cor, fontFamily: 'Poppins, sans-serif' }}>
              {nivel.nivel}
            </h3>
          </div>
          <p className="text-xs mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            {nivel.descricao}
          </p>
          <ul className="space-y-2.5 mb-5">
            {nivel.itens.map((item) => (
              <li key={item.texto} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--nexus-gray-700)', fontFamily: 'Inter, sans-serif' }}>
                <span className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center text-xs border-2" style={{ borderColor: nivel.cor, color: nivel.cor }}>?</span>
                {item.texto}
              </li>
            ))}
          </ul>
          <div className="rounded-xl px-4 py-3" style={{ background: nivel.bg }}>
            <p className="text-xs" style={{ color: nivel.cor, fontFamily: 'Inter, sans-serif' }}>
              <strong>💡 Próximo passo:</strong> {nivel.proximo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
