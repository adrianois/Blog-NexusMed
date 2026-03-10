const PILARES = [
  {
    icon: '📅',
    titulo: 'Agendamento Sem Fricção',
    descricao: 'Online 24/7, confirmação automática, lembretes por WhatsApp e opção de reagendamento fácil. O primeiro contato define a percepção da clínica.',
    impacto: 'Reduz no-show em até 40%',
    cor: '#1E88E5',
    bg: '#E3F2FD',
  },
  {
    icon: '🏠',
    titulo: 'Acolhimento na Chegada',
    descricao: 'Recepção humanizada, tempo de espera comunicado, ambiente confortável e equipe treinada para acolher com empatia desde o primeiro segundo.',
    impacto: 'Principal fator de indicação',
    cor: '#00875A',
    bg: '#E0F5EE',
  },
  {
    icon: '🩺',
    titulo: 'Consulta de Qualidade',
    descricao: 'Tempo adequado, escuta ativa, linguagem acessível e orientações claras. O paciente precisa sair entendendo o que tem e o que deve fazer.',
    impacto: 'Aumenta adesão ao tratamento',
    cor: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '📱',
    titulo: 'Comunicação Pós-Consulta',
    descricao: 'Resumo da consulta, orientações e exames por WhatsApp. Lembrete de retorno automático. Esse gesto gera encantamento e diferencia a clínica.',
    impacto: 'Fidelização +60%',
    cor: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: '⭐',
    titulo: 'Pesquisa de Satisfação (NPS)',
    descricao: 'Envio automático de NPS 24h após a consulta. Identifica promotores para pedir avaliações no Google e detratores para resolver problemas antes que virem reclamação.',
    impacto: 'Melhora avaliação online',
    cor: '#DC2626',
    bg: '#FEE2E2',
  },
  {
    icon: '🔄',
    titulo: 'Programa de Fidelização',
    descricao: 'Reconheça pacientes frequentes, envie conteúdo educativo personalizado e crie um relacionamento de longo prazo. Retenção é sempre mais barata que captação.',
    impacto: 'LTV 3x maior',
    cor: '#00875A',
    bg: '#E0F5EE',
  },
];

export default function PilaresCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {PILARES.map((p, i) => (
        <div key={p.titulo} className="nexus-card p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: p.bg }}>
              {p.icon}
            </div>
            <div>
              <span className="text-xs font-bold" style={{ color: p.cor }}>Pilar {i + 1}</span>
              <h3 className="font-bold text-sm leading-snug mt-0.5" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{p.titulo}</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            {p.descricao}
          </p>
          <div className="flex items-center gap-2 pt-3" style={{ borderTop: '1px solid var(--nexus-gray-100)' }}>
            <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: p.bg, color: p.cor }}>✓ {p.impacto}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
