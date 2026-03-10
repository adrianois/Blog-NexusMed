const INDICADORES = [
  { indicador: 'Margem Operacional', ruim: '< 5%', regular: '5% – 15%', bom: '15% – 25%', excelente: '> 25%' },
  { indicador: 'Taxa de Ocupação da Agenda', ruim: '< 60%', regular: '60% – 70%', bom: '70% – 85%', excelente: '> 85%' },
  { indicador: 'Taxa de No-Show', ruim: '> 20%', regular: '10% – 20%', bom: '5% – 10%', excelente: '< 5%' },
  { indicador: 'Taxa de Glosa (convênios)', ruim: '> 12%', regular: '8% – 12%', bom: '3% – 8%', excelente: '< 3%' },
  { indicador: 'Custo Fixo / Receita', ruim: '> 50%', regular: '40% – 50%', bom: '30% – 40%', excelente: '< 30%' },
  { indicador: 'Prazo Médio de Recebimento', ruim: '> 60 dias', regular: '30 – 60 dias', bom: '15 – 30 dias', excelente: '< 15 dias' },
  { indicador: 'Ticket Médio', ruim: 'Abaixo do mercado', regular: 'Na média', bom: '10-20% acima', excelente: '> 20% acima' },
  { indicador: 'Taxa de Retorno de Pacientes', ruim: '< 30%', regular: '30% – 50%', bom: '50% – 70%', excelente: '> 70%' },
];

const CORES = {
  ruim:      { bg: '#FEE2E2', text: '#DC2626' },
  regular:   { bg: '#FEF3C7', text: '#D97706' },
  bom:       { bg: '#E0F5EE', text: '#00875A' },
  excelente: { bg: '#DBEAFE', text: '#1565C0' },
};

export default function IndicadoresTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--nexus-gray-200)' }}>
      <table className="w-full text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
        <thead>
          <tr style={{ background: 'var(--nexus-navy)' }}>
            <th className="text-left px-5 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Indicador</th>
            <th className="text-center px-4 py-4 text-sm font-semibold" style={{ color: '#FCA5A5' }}>Ruim</th>
            <th className="text-center px-4 py-4 text-sm font-semibold" style={{ color: '#FCD34D' }}>Regular</th>
            <th className="text-center px-4 py-4 text-sm font-semibold" style={{ color: '#86EFAC' }}>Bom</th>
            <th className="text-center px-4 py-4 text-sm font-semibold" style={{ color: '#93C5FD' }}>Excelente</th>
          </tr>
        </thead>
        <tbody>
          {INDICADORES.map((row, i) => (
            <tr key={row.indicador} style={{ background: i % 2 === 0 ? 'white' : 'var(--nexus-gray-50)' }}>
              <td className="px-5 py-3.5 font-semibold" style={{ color: 'var(--nexus-navy)' }}>{row.indicador}</td>
              <td className="px-4 py-3.5 text-center">
                <span className="nexus-tag" style={{ background: CORES.ruim.bg, color: CORES.ruim.text }}>{row.ruim}</span>
              </td>
              <td className="px-4 py-3.5 text-center">
                <span className="nexus-tag" style={{ background: CORES.regular.bg, color: CORES.regular.text }}>{row.regular}</span>
              </td>
              <td className="px-4 py-3.5 text-center">
                <span className="nexus-tag" style={{ background: CORES.bom.bg, color: CORES.bom.text }}>{row.bom}</span>
              </td>
              <td className="px-4 py-3.5 text-center">
                <span className="nexus-tag" style={{ background: CORES.excelente.bg, color: CORES.excelente.text }}>{row.excelente}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
