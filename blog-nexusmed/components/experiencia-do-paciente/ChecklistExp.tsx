const AREAS = [
  {
    area: 'Agendamento & Acesso',
    icon: '📅',
    cor: '#1E88E5',
    bg: '#E3F2FD',
    itens: [
      'Agendamento online disponível 24/7 no site e/ou WhatsApp',
      'Confirmação automática enviada imediatamente após agendamento',
      'Lembrete enviado 48h antes da consulta',
      'Opção de reagendamento fácil sem ligar para a clínica',
      'Fila de espera inteligente para cancelamentos',
    ],
  },
  {
    area: 'Recepção & Ambiente',
    icon: '🏠',
    cor: '#D97706',
    bg: '#FEF3C7',
    itens: [
      'Recepcionista treinada em acolhimento e empatia',
      'Paciente chamado pelo nome desde a chegada',
      'Tempo de espera comunicado proativamente',
      'Wi-Fi disponível e sinalização clara',
      'Ambiente limpo, organizado e com temperatura agradável',
    ],
  },
  {
    area: 'Durante a Consulta',
    icon: '🩺',
    cor: '#7C3AED',
    bg: '#EDE9FE',
    itens: [
      'Médico apresenta-se e chama o paciente pelo nome',
      'Diagnóstico explicado em linguagem acessível (não técnica)',
      'Próximos passos claros: exames, retorno, medicação',
      'Consentimento informado documentado quando necessário',
      'Tempo de consulta adequado (sem pressa perceptível)',
    ],
  },
  {
    area: 'Pós-Consulta & Fidelização',
    icon: '💬',
    cor: '#00875A',
    bg: '#E0F5EE',
    itens: [
      'Resumo da consulta enviado por WhatsApp ou e-mail',
      'NPS automático disparado 24h após o atendimento',
      'Pacientes promotores convidados a avaliar no Google',
      'Lembrete de retorno ou exame enviado no prazo correto',
      'Conteúdo educativo personalizado enviado mensalmente',
    ],
  },
];

export default function ChecklistExp() {
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
