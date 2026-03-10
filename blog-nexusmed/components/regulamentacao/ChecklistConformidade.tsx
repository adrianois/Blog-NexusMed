const AREAS = [
  {
    area: 'LGPD & Proteção de Dados',
    icon: '🔒',
    cor: '#DC2626',
    bg: '#FEE2E2',
    risco: 'Crítico',
    itens: [
      'DPO (Encarregado de Dados) nomeado e publicado',
      'Mapeamento das atividades de tratamento de dados (ROPA)',
      'Termo de consentimento de pacientes atualizado',
      'Contratos DPA assinados com fornecedores de sistemas',
      'Política de privacidade publicada e acessível',
      'Plano de resposta a incidentes de segurança documentado',
    ],
  },
  {
    area: 'CFM — Ética Médica',
    icon: '👨‍⚕️',
    cor: '#B45309',
    bg: '#FEF3C7',
    risco: 'Alto',
    itens: [
      'Todos os médicos com CRM ativo e regular',
      'Prontuário eletrônico conforme CFM 1.821/07',
      'Registros mantidos por no mínimo 20 anos',
      'Consentimento informado documentado para procedimentos',
      'Publicidade médica revisada conforme CFM 2.336/23',
      'Telemedicina estruturada conforme CFM 2.314/22',
    ],
  },
  {
    area: 'ANVISA — Vigilância Sanitária',
    icon: '🧪',
    cor: '#00875A',
    bg: '#E0F5EE',
    risco: 'Alto',
    itens: [
      'Alvará sanitário vigente e exposto',
      'Descarte de resíduos médicos (PGRSS) implementado',
      'Controle de estoque de medicamentos e materiais',
      'Estrutura física conforme RDC 50/02',
      'Rastreabilidade de materiais implantáveis documentada',
    ],
  },
  {
    area: 'ANS — Saúde Suplementar',
    icon: '💳',
    cor: '#1E88E5',
    bg: '#E3F2FD',
    risco: 'Médio',
    itens: [
      'Contratos de credenciamento atualizados com cada convênio',
      'Faturamento TISS seguindo a versão vigente',
      'Processo de recurso de glosas documentado',
      'Prazos de envio de guias respeitados por convênio',
      'Tabela CBHPM/TUSS atualizada no sistema',
    ],
  },
];

export default function ChecklistConformidade() {
  return (
    <div id="checklist" className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {AREAS.map((area) => (
        <div key={area.area} className="nexus-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: area.bg }}>
              {area.icon}
            </div>
            <div>
              <h3 className="font-bold text-sm" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>
                {area.area}
              </h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: area.bg, color: area.cor }}>
                Risco: {area.risco}
              </span>
            </div>
          </div>
          <ul className="mt-4 space-y-2.5">
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
