const CANAIS = [
  {
    canal: 'Google Meu Negócio',
    icon: '🗺️',
    custo: 'Gratuito',
    custoCor: '#00875A',
    custoBg: '#E0F5EE',
    esforco: 'Baixo',
    retorno: 'Muito Alto',
    retornoCor: '#00875A',
    publicoIdeal: 'Busca ativa por especialidade',
    prioridade: '🥇 Essencial',
  },
  {
    canal: 'Instagram',
    icon: '📸',
    custo: 'Baixo',
    custoCor: '#1E88E5',
    custoBg: '#E3F2FD',
    esforco: 'Alto',
    retorno: 'Alto',
    retornoCor: '#1E88E5',
    publicoIdeal: 'Pacientes jovens, 25-45 anos',
    prioridade: '🥈 Recomendado',
  },
  {
    canal: 'Blog / SEO',
    icon: '✍️',
    custo: 'Baixo',
    custoCor: '#1E88E5',
    custoBg: '#E3F2FD',
    esforco: 'Médio',
    retorno: 'Alto (longo prazo)',
    retornoCor: '#1E88E5',
    publicoIdeal: 'Pacientes pesquisando sintomas',
    prioridade: '🥈 Recomendado',
  },
  {
    canal: 'WhatsApp Marketing',
    icon: '💬',
    custo: 'Muito Baixo',
    custoCor: '#00875A',
    custoBg: '#E0F5EE',
    esforco: 'Baixo',
    retorno: 'Alto',
    retornoCor: '#1E88E5',
    publicoIdeal: 'Base de pacientes atual',
    prioridade: '🥈 Recomendado',
  },
  {
    canal: 'Google Ads',
    icon: '💰',
    custo: 'Alto',
    custoCor: '#DC2626',
    custoBg: '#FEE2E2',
    esforco: 'Médio',
    retorno: 'Médio',
    retornoCor: '#D97706',
    publicoIdeal: 'Especialidades com alta concorrência',
    prioridade: '🥉 Situacional',
  },
  {
    canal: 'YouTube',
    icon: '▶️',
    custo: 'Baixo',
    custoCor: '#1E88E5',
    custoBg: '#E3F2FD',
    esforco: 'Muito Alto',
    retorno: 'Alto (longo prazo)',
    retornoCor: '#1E88E5',
    publicoIdeal: 'Pacientes que querem aprender',
    prioridade: '🥉 Situacional',
  },
  {
    canal: 'TikTok',
    icon: '🎵',
    custo: 'Baixo',
    custoCor: '#1E88E5',
    custoBg: '#E3F2FD',
    esforco: 'Muito Alto',
    retorno: 'Médio',
    retornoCor: '#D97706',
    publicoIdeal: 'Público 18-35 anos',
    prioridade: '⚠️ Avaliar CFM',
  },
];

export default function CanaisTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--nexus-gray-200)' }}>
      <table className="w-full text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
        <thead>
          <tr style={{ background: 'var(--nexus-navy)' }}>
            <th className="text-left px-5 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Canal</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-white">Custo</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-white">Esforço</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-white">Retorno</th>
            <th className="text-left px-4 py-4 text-sm font-semibold text-white">Público Ideal</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-white">Prioridade</th>
          </tr>
        </thead>
        <tbody>
          {CANAIS.map((c, i) => (
            <tr key={c.canal} style={{ background: i % 2 === 0 ? 'white' : 'var(--nexus-gray-50)' }}>
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{c.icon}</span>
                  <span className="font-semibold" style={{ color: 'var(--nexus-navy)' }}>{c.canal}</span>
                </div>
              </td>
              <td className="px-4 py-3.5 text-center">
                <span className="nexus-tag" style={{ background: c.custoBg, color: c.custoCor }}>{c.custo}</span>
              </td>
              <td className="px-4 py-3.5 text-center text-xs" style={{ color: 'var(--nexus-gray-600)' }}>{c.esforco}</td>
              <td className="px-4 py-3.5 text-center">
                <span className="text-xs font-semibold" style={{ color: c.retornoCor }}>{c.retorno}</span>
              </td>
              <td className="px-4 py-3.5 text-xs" style={{ color: 'var(--nexus-gray-600)' }}>{c.publicoIdeal}</td>
              <td className="px-4 py-3.5 text-center text-xs font-medium">{c.prioridade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
