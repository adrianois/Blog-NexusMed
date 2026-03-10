const ORGAOS = [
  {
    orgao: 'CFM',
    nomeCompleto: 'Conselho Federal de Medicina',
    icon: '👨‍⚕️',
    abrangencia: 'Nacional',
    fiscaliza: 'Conduta ética e técnica dos médicos, publicidade médica, telemedicina',
    punicoes: 'Advertência, censura, suspensão do CRM, cassação do registro',
    cor: '#B45309',
    bg: '#FEF3C7',
  },
  {
    orgao: 'CRM Estadual',
    nomeCompleto: 'Conselho Regional de Medicina',
    icon: '🏥',
    abrangencia: 'Estadual',
    fiscaliza: 'Registro dos médicos, funcionamento de clínicas e estrutura física',
    punicoes: 'Interdito de funcionamento, multa, exigência de adequação',
    cor: '#D97706',
    bg: '#FEF3C7',
  },
  {
    orgao: 'ANVISA',
    nomeCompleto: 'Agência Nac. de Vigilância Sanitária',
    icon: '🧪',
    abrangencia: 'Nacional',
    fiscaliza: 'Medicamentos, materiais médicos, estrutura sanitária de clínicas',
    punicoes: 'Multas, interditação, cancelamento do alvará sanitário',
    cor: '#00875A',
    bg: '#E0F5EE',
  },
  {
    orgao: 'ANS',
    nomeCompleto: 'Agência Nacional de Saúde Suplementar',
    icon: '💳',
    abrangencia: 'Nacional',
    fiscaliza: 'Contratos com planos, cobertura, prazos e glosas de convênios',
    punicoes: 'Multas para operadoras e clínicas, rescisão de credenciamento',
    cor: '#1E88E5',
    bg: '#E3F2FD',
  },
  {
    orgao: 'ANPD',
    nomeCompleto: 'Autoridade Nacional de Proteção de Dados',
    icon: '🔒',
    abrangencia: 'Nacional',
    fiscaliza: 'Conformidade com a LGPD, tratamento de dados de pacientes',
    punicoes: 'Multa até R$50M, bloqueio de dados, divulgação da infração',
    cor: '#DC2626',
    bg: '#FEE2E2',
  },
  {
    orgao: 'Vigilância Sanitária Municipal',
    nomeCompleto: 'VISA Municipal / Estadual',
    icon: '🏙️',
    abrangencia: 'Municipal',
    fiscaliza: 'Alvará de funcionamento, estrutura física, descarte de resíduos médicos',
    punicoes: 'Autuação, multa, embargo, interditação do estabelecimento',
    cor: '#7C3AED',
    bg: '#EDE9FE',
  },
];

export default function OrgaosTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--nexus-gray-200)' }}>
      <table className="w-full text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
        <thead>
          <tr style={{ background: 'var(--nexus-navy)' }}>
            <th className="text-left px-5 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Órgão</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Abrangência</th>
            <th className="text-left px-4 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>O Que Fiscaliza</th>
            <th className="text-left px-4 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Punições Possíveis</th>
          </tr>
        </thead>
        <tbody>
          {ORGAOS.map((o, i) => (
            <tr key={o.orgao} style={{ background: i % 2 === 0 ? 'white' : 'var(--nexus-gray-50)' }}>
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{o.icon}</span>
                  <div>
                    <div className="font-bold" style={{ color: 'var(--nexus-navy)' }}>{o.orgao}</div>
                    <div className="text-xs" style={{ color: 'var(--nexus-gray-500)' }}>{o.nomeCompleto}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3.5 text-center">
                <span className="nexus-tag" style={{ background: o.bg, color: o.cor }}>{o.abrangencia}</span>
              </td>
              <td className="px-4 py-3.5 text-xs" style={{ color: 'var(--nexus-gray-600)', maxWidth: '220px' }}>{o.fiscaliza}</td>
              <td className="px-4 py-3.5 text-xs" style={{ color: 'var(--nexus-gray-600)', maxWidth: '200px' }}>{o.punicoes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
