const TENDENCIAS = [
  {
    icon: '🤖',
    title: 'Inteligência Artificial Clínica',
    description: 'Algoritmos que apoiam diagnósticos por imagem, triagem automática e previsão de demanda. Já disponível para radiologia, dermatologia e cardiologia.',
    status: 'Em expansão',
    statusColor: '#00A86B',
    statusBg: '#E0F5EE',
    impacto: 'Alto',
    cor: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '📹',
    title: 'Telemedicina Integrada',
    description: 'Consultas por vídeo com prontuário, receita digital e cobrança automática. Regulamentada pelo CFM 2.314/22 para todas as especialidades.',
    status: 'Consolidado',
    statusColor: '#1E88E5',
    statusBg: '#E3F2FD',
    impacto: 'Alto',
    cor: '#1E88E5',
    bg: '#E3F2FD',
  },
  {
    icon: '📱',
    title: 'Agendamento Online 24/7',
    description: 'Pacientes agendando diretamente pelo site ou WhatsApp, sem passar pela recepção. Reduz 35% do volume de ligações e melhora a conversão.',
    status: 'Essencial',
    statusColor: '#00A86B',
    statusBg: '#E0F5EE',
    impacto: 'Médio',
    cor: '#00A86B',
    bg: '#E0F5EE',
  },
  {
    icon: '📊',
    title: 'Business Intelligence em Saúde',
    description: 'Dashboards em tempo real de ocupação de agenda, faturamento, NPS e perfil de pacientes. Decisões baseadas em dados, não intuição.',
    status: 'Crescente',
    statusColor: '#D97706',
    statusBg: '#FEF3C7',
    impacto: 'Alto',
    cor: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: '🔎',
    title: 'Wearables e IoMT',
    description: 'Integração de dados de smartwatches, oxímetros e glicosímetros conectados diretamente ao prontuário. Monitoramento contínuo de pacientes crônicos.',
    status: 'Emergente',
    statusColor: '#7C3AED',
    statusBg: '#EDE9FE',
    impacto: 'Médio',
    cor: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '🔐',
    title: 'Segurança de Dados (LGPD)',
    description: 'Criptografia de prontuários, controle de acesso por perfil, logs de auditoria e plano de resposta a incidentes. Obrigatório e urgente.',
    status: 'Obrigatório',
    statusColor: '#DC2626',
    statusBg: '#FEE2E2',
    impacto: 'Crítico',
    cor: '#DC2626',
    bg: '#FEE2E2',
  },
];

export default function TendenciasCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {TENDENCIAS.map((t) => (
        <div key={t.title} className="nexus-card p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: t.bg }}>
              {t.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm leading-snug" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{t.title}</h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: t.statusBg, color: t.statusColor }}>{t.status}</span>
                <span className="text-xs" style={{ color: 'var(--nexus-gray-400)' }}>Impacto: <strong style={{ color: t.cor }}>{t.impacto}</strong></span>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            {t.description}
          </p>
        </div>
      ))}
    </div>
  );
}
