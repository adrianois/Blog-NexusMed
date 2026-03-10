const ESTRATEGIAS = [
  {
    icon: '🔍',
    titulo: 'SEO Local & Google Maps',
    descricao: 'Otimize o Google Meu Negócio com fotos, horários atualizados e categorias corretas. Aparecer nas 3 primeiras posições do Maps gera até 70% dos agendamentos de novos pacientes.',
    resultado: 'Captação orgânica contínua',
    cor: '#1E88E5',
    bg: '#E3F2FD',
    cfm: 'Permitido',
  },
  {
    icon: '📚',
    titulo: 'Marketing de Conteúdo',
    descricao: 'Artigos, vídeos e posts educativos que posicionam o médico como autoridade na especialidade. Conteúdo que educa gera confiança — e confiança gera agendamento.',
    resultado: 'Autoridade e SEO orgânico',
    cor: '#00875A',
    bg: '#E0F5EE',
    cfm: 'Permitido',
  },
  {
    icon: '📸',
    titulo: 'Instagram & Redes Sociais',
    descricao: 'Presença consistente com conteúdo educativo, bastidores humanizados e informações sobre a especialidade. Seguindo as regras da Resolução CFM 2.336/23.',
    resultado: 'Reconhecimento de marca',
    cor: '#7C3AED',
    bg: '#EDE9FE',
    cfm: 'Permitido com restrições',
  },
  {
    icon: '⭐',
    titulo: 'Gestão de Avaliações',
    descricao: 'Automatize o convite para avaliação no Google após cada consulta. Responda todas as avaliações — positivas e negativas. Uma nota alta é o melhor anúncio que existe.',
    resultado: '+42% mais agendamentos',
    cor: '#D97706',
    bg: '#FEF3C7',
    cfm: 'Permitido',
  },
  {
    icon: '📧',
    titulo: 'E-mail & WhatsApp Marketing',
    descricao: 'Envio segmentado de conteúdo educativo, lembretes de retorno e campanhas de prevenção para a base de pacientes. Alta taxa de abertura e custo praticamente zero.',
    resultado: 'Retenção e reativação',
    cor: '#00A86B',
    bg: '#E0F5EE',
    cfm: 'Permitido',
  },
  {
    icon: '🤝',
    titulo: 'Marketing de Indicação',
    descricao: 'Paciente satisfeito indica — mas raramente sem um estímulo. Crie um processo para pedir indicações ativamente: NPS, convite personalizado e facilidade de compartilhamento.',
    resultado: 'Custo de aquisição zero',
    cor: '#DC2626',
    bg: '#FEE2E2',
    cfm: 'Permitido',
  },
];

export default function EstrategiasCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {ESTRATEGIAS.map((e, i) => (
        <div key={e.titulo} className="nexus-card p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: e.bg }}>
              {e.icon}
            </div>
            <div>
              <span className="text-xs font-bold" style={{ color: e.cor }}>Estratégia {i + 1}</span>
              <h3 className="font-bold text-sm leading-snug mt-0.5" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{e.titulo}</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            {e.descricao}
          </p>
          <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--nexus-gray-100)' }}>
            <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: e.bg, color: e.cor }}>✓ {e.resultado}</span>
            <span className="text-xs px-2 py-1 rounded-full" style={{
              background: e.cfm === 'Permitido' ? '#E0F5EE' : '#FEF3C7',
              color: e.cfm === 'Permitido' ? '#00875A' : '#D97706'
            }}>CFM: {e.cfm}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
