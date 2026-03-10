const ETAPAS = [
  {
    icon: '🔍',
    fase: 'Descoberta',
    titulo: 'O Paciente Encontra a Clínica',
    acoes: ['Google Meu Negócio atualizado e com fotos', 'Avaliações positivas visíveis', 'Site com informações claras e agendamento online'],
    alerta: 'Se não aparecer no Google, não existe para o paciente.',
    cor: '#1E88E5',
    bg: '#E3F2FD',
  },
  {
    icon: '📅',
    fase: 'Agendamento',
    titulo: 'Marcando a Consulta',
    acoes: ['Agendamento online 24/7 disponível', 'Confirmação imediata por WhatsApp', 'Lembrete automático 48h e 2h antes'],
    alerta: 'Cada clique a mais no agendamento perde 15% dos pacientes.',
    cor: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '🏠',
    fase: 'Chegada',
    titulo: 'Primeiro Contato Presencial',
    acoes: ['Check-in ágil, sem filas', 'Recepcionista saúda pelo nome', 'Tempo de espera informado proativamente'],
    alerta: 'A espera sem comunicação é a maior causa de insatisfação.',
    cor: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: '🩺',
    fase: 'Atendimento',
    titulo: 'A Consulta em Si',
    acoes: ['Médico apresenta-se e chama pelo nome', 'Explica diagnóstico em linguagem acessível', 'Orienta próximos passos com clareza'],
    alerta: 'Pacientes que entendem o diagnóstico aderem 3x mais ao tratamento.',
    cor: '#00875A',
    bg: '#E0F5EE',
  },
  {
    icon: '📤',
    fase: 'Saída',
    titulo: 'O Momento da Despedida',
    acoes: ['Resumo da consulta entregue ou enviado por WhatsApp', 'Agendamento do retorno já realizado', 'Equipe se despede com cordialidade'],
    alerta: 'A última impressão é tão importante quanto a primeira.',
    cor: '#DC2626',
    bg: '#FEE2E2',
  },
  {
    icon: '💬',
    fase: 'Pós-Consulta',
    titulo: 'Relacionamento Contínuo',
    acoes: ['NPS enviado 24h após a consulta', 'Conteúdo educativo personalizado por e-mail/WhatsApp', 'Lembrete do próximo retorno ou exame'],
    alerta: 'Clínicas que fazem follow-up têm 60% mais retorno espontâneo.',
    cor: '#00875A',
    bg: '#E0F5EE',
  },
];

export default function JornadaTimeline() {
  return (
    <div className="relative">
      {/* Linha vertical */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'var(--nexus-gray-200)' }}></div>

      <div className="space-y-6">
        {ETAPAS.map((etapa, i) => (
          <div key={etapa.fase} className="flex gap-6">
            {/* Ícone */}
            <div className="relative flex-shrink-0">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 relative"
                style={{ background: etapa.bg, border: `2px solid ${etapa.cor}` }}
              >
                {etapa.icon}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="nexus-card p-5 flex-1 mb-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: etapa.cor }}>Fase {i + 1} — {etapa.fase}</span>
              </div>
              <h3 className="font-bold text-sm mb-3" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{etapa.titulo}</h3>
              <ul className="space-y-1.5 mb-3">
                {etapa.acoes.map((acao) => (
                  <li key={acao} className="flex items-start gap-2 text-xs" style={{ color: 'var(--nexus-gray-700)', fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: etapa.cor }}>✓</span> {acao}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg px-3 py-2" style={{ background: etapa.bg }}>
                <p className="text-xs" style={{ color: etapa.cor, fontFamily: 'Inter, sans-serif' }}>
                  <strong>💡</strong> {etapa.alerta}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
