const AREAS = [
  {
    area: 'Presença Local & Google',
    icon: '🗺️',
    cor: '#1E88E5',
    bg: '#E3F2FD',
    itens: [
      'Google Meu Negócio preenchido com fotos e horários atualizados',
      'Categoria principal correta (ex: Clínica Médica, Cardiologista)',
      'Site com agendamento online linkado no perfil',
      'Processo automático para coletar avaliações pós-consulta',
      'Todas as avaliações respondidas (positivas e negativas)',
    ],
  },
  {
    area: 'Redes Sociais & Conteúdo',
    icon: '📸',
    cor: '#7C3AED',
    bg: '#EDE9FE',
    itens: [
      'Perfil profissional com bio completa e link de agendamento',
      'Calendário de conteúdo com pelo menos 3 posts/semana',
      'Conteúdo revisado conforme CFM 2.336/23 (sem antes/depois, sem preços)',
      'Mix de formatos: carrossel educativo, Reels, stories',
      'Engajamento respondido em menos de 24h',
    ],
  },
  {
    area: 'E-mail & WhatsApp',
    icon: '💬',
    cor: '#00875A',
    bg: '#E0F5EE',
    itens: [
      'Base de contatos de pacientes segmentada por especialidade',
      'Newsletter mensal com conteúdo educativo enviada',
      'Fluxo automático de reativação para pacientes inativos (+6 meses)',
      'Lembrete de retorno e exame enviado automaticamente',
      'LGPD: consentimento para envio de comunicações documentado',
    ],
  },
  {
    area: 'Conformidade CFM',
    icon: '⚖️',
    cor: '#B45309',
    bg: '#FEF3C7',
    itens: [
      'Nenhum conteúdo com antes e depois de procedimentos',
      'Sem promessas de cura ou resultados garantidos',
      'Sem uso de preço como elemento de atração',
      'Depoimentos de pacientes usados apenas com autorização formal',
      'Títulos e especializações divulgados são reconhecidos pelo CFM/CRM',
    ],
  },
];

export default function ChecklistMkt() {
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
