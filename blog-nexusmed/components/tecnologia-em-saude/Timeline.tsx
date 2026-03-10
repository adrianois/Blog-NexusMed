const EVENTOS = [
  {
    ano: '2020',
    titulo: 'Telemedicina liberada em caráter emergencial',
    descricao: 'A pandemia de COVID-19 acelerou a regulamentação da telemedicina no Brasil. Clínicas que adotaram rapidamente saíram na frente.',
    icon: '📹',
    color: 'var(--nexus-blue)',
    bg: 'var(--nexus-blue-light)',
  },
  {
    ano: '2021',
    titulo: 'Boom do prontuário eletrônico em nuvem',
    descricao: 'Soluções SaaS de PEP ganham massa crítica. Clínicas de todos os portes passam a adotar sistemas integrados de gestão.',
    icon: '☁️',
    color: '#7C3AED',
    bg: '#F3EFFE',
  },
  {
    ano: '2022',
    titulo: 'CFM regulamenta telemedicina permanentemente',
    descricao: 'Resolução CFM 2.314/22 estabelece regras definitivas para consultas por vídeo, receitas digitais e telediagnóstico.',
    icon: '⚖️',
    color: '#D97706',
    bg: '#FEF3C7',
  },
  {
    ano: '2023',
    titulo: 'LGPD passa a ser aplicada com multas efetivas',
    descricao: 'A ANPD inicia aplicação de sanções. Clínicas que não adequaram seus sistemas de prontuário e coleta de dados ficaram expostas a riscos legãis.',
    icon: '🔐',
    color: '#DC2626',
    bg: '#FEE2E2',
  },
  {
    ano: '2024',
    titulo: 'IA entra nas clínicas brasileiras',
    descricao: 'Ferramentas de IA para apoio ao diagnóstico, análise de exames e automação administrativa tornam-se acessíveis para clínicas de médio porte.',
    icon: '🤖',
    color: 'var(--nexus-green)',
    bg: 'var(--nexus-green-light)',
  },
  {
    ano: '2025–2026',
    titulo: 'Saúde digital integrada e preditiva',
    descricao: 'Plataformas all-in-one com BI, IA preditiva, integração com dispositivos wearables e interoperabilidade entre sistemas de saúde definem o novo padrão.',
    icon: '🚀',
    color: 'var(--nexus-blue-dark)',
    bg: 'var(--nexus-blue-light)',
    destaque: true,
  },
];

export default function TechTimeline() {
  return (
    <div className="relative">
      {/* Linha vertical */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'var(--nexus-gray-200)' }}></div>

      <div className="space-y-6">
        {EVENTOS.map((ev) => (
          <div key={ev.ano} className={`flex gap-5 md:gap-8 items-start ${ev.destaque ? 'relative' : ''}`}>
            {/* Bol */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow-md" style={{ background: ev.bg, border: `2px solid ${ev.color}` }}>
              {ev.icon}
            </div>
            {/* Conteúdo */}
            <div className={`nexus-card flex-1 p-5 ${ev.destaque ? 'ring-2' : ''}`} style={ev.destaque ? { ringColor: 'var(--nexus-blue)', boxShadow: `0 0 0 2px var(--nexus-blue)` } : {}}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: ev.bg, color: ev.color, fontFamily: 'Poppins, sans-serif' }}>
                  {ev.ano}
                </span>
                {ev.destaque && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: 'var(--nexus-green)' }}>Agora</span>
                )}
              </div>
              <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{ev.titulo}</h3>
              <p className="text-sm" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>{ev.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
