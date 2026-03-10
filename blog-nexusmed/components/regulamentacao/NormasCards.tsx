const NORMAS = [
  {
    icon: '📜',
    sigla: 'CFM 2.314/22',
    titulo: 'Telemedicina',
    descricao: 'Regulamenta definitivamente a prática de telemedicina no Brasil, incluindo teleconsulta, telediagnóstico e telemonitoramento para todas as especialidades.',
    impacto: 'Alto',
    impactoCor: '#DC2626',
    impactoBg: '#FEE2E2',
    categoria: 'CFM',
    cor: '#B45309',
    bg: '#FEF3C7',
    obrigatorio: true,
  },
  {
    icon: '🔒',
    sigla: 'LGPD (Lei 13.709/18)',
    titulo: 'Proteção de Dados',
    descricao: 'Define regras para coleta, armazenamento e uso de dados de pacientes. Dados de saúde são sensíveis e exigem cuidados redobrados. Multas chegam a R$ 50 milhões.',
    impacto: 'Crítico',
    impactoCor: '#DC2626',
    impactoBg: '#FEE2E2',
    categoria: 'Federal',
    cor: '#DC2626',
    bg: '#FEE2E2',
    obrigatorio: true,
  },
  {
    icon: '🏥',
    sigla: 'ANS RN 566/22',
    titulo: 'Planos de Saúde',
    descricao: 'Regulamenta a relação entre clínicas credenciadas e operadoras, prazos de pagamento, glosas, cobertura obrigatória e direitos dos beneficiários.',
    impacto: 'Alto',
    impactoCor: '#D97706',
    impactoBg: '#FEF3C7',
    categoria: 'ANS',
    cor: '#1E88E5',
    bg: '#E3F2FD',
    obrigatorio: false,
  },
  {
    icon: '🧪',
    sigla: 'RDC ANVISA 657/22',
    titulo: 'Materiais e Med.',
    descricao: 'Regulamenta o controle, registro e rastreabilidade de medicamentos e materiais médico-hospitalares. Vital para clínicas que realizam procedimentos e cirurgias.',
    impacto: 'Médio',
    impactoCor: '#D97706',
    impactoBg: '#FEF3C7',
    categoria: 'ANVISA',
    cor: '#00875A',
    bg: '#E0F5EE',
    obrigatorio: false,
  },
  {
    icon: '💻',
    sigla: 'CFM 1.821/07',
    titulo: 'Prontuário Eletrônico',
    descricao: 'Define os requisitos para uso de prontuário eletrônico, incluindo assinatura digital, tempo de guarda (mínimo 20 anos), sigilo e responsabilidade do médico.',
    impacto: 'Alto',
    impactoCor: '#D97706',
    impactoBg: '#FEF3C7',
    categoria: 'CFM',
    cor: '#B45309',
    bg: '#FEF3C7',
    obrigatorio: true,
  },
  {
    icon: '📣',
    sigla: 'CFM 2.336/23',
    titulo: 'Publicidade Médica',
    descricao: 'Atualiza as regras de publicidade médica para o ambiente digital. Define o que é permitido e proibido no Instagram, YouTube e demais redes sociais.',
    impacto: 'Médio',
    impactoCor: '#D97706',
    impactoBg: '#FEF3C7',
    categoria: 'CFM',
    cor: '#7C3AED',
    bg: '#EDE9FE',
    obrigatorio: false,
  },
];

export default function NormasCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {NORMAS.map((n) => (
        <div key={n.sigla} className="nexus-card p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: n.bg }}>
              {n.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: n.bg, color: n.cor }}>{n.categoria}</span>
                {n.obrigatorio && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#FEE2E2', color: '#DC2626' }}>Obrigatório</span>
                )}
              </div>
              <h3 className="font-bold text-sm" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{n.sigla}</h3>
              <p className="text-xs font-medium mt-0.5" style={{ color: n.cor }}>{n.titulo}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            {n.descricao}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: 'var(--nexus-gray-400)' }}>Impacto para clínicas:</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: n.impactoBg, color: n.impactoCor }}>{n.impacto}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
