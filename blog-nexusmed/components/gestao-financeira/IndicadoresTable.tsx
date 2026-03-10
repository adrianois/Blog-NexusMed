const INDICADORES = [
  { indicador: 'Margem Operacional', ruim: '< 5%', regular: '5% – 15%', bom: '15% – 25%', excelente: '> 25%' },
  { indicador: 'Taxa de Ocupação da Agenda', ruim: '< 60%', regular: '60% – 75%', bom: '75% – 88%', excelente: '> 88%' },
  { indicador: 'Taxa de Glosa (convênios)', ruim: '> 15%', regular: '10% – 15%', bom: '3% – 10%', excelente: '< 3%' },
  { indicador: 'No-Show (faltas)', ruim: '> 25%', regular: '15% – 25%', bom: '5% – 15%', excelente: '< 5%' },
  { indicador: 'Custo Fixo / Receita', ruim: '> 60%', regular: '45% – 60%', bom: '30% – 45%', excelente: '< 30%' },
  { indicador: 'Prazo Médio de Recebimento', ruim: '> 60 dias', regular: '45 – 60 dias', bom: '20 – 45 dias', excelente: '< 20 dias' },
  { indicador: 'Crescimento de Receita (a.a.)', ruim: '< 0%', regular: '0% – 5%', bom: '5% – 15%', excelente: '> 15%' },
];

export default function IndicadoresTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--nexus-gray-200)' }}>
      <table className="w-full text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
        <thead>
          <tr style={{ background: 'var(--nexus-navy)', color: 'white' }}>
            <th className="text-left px-5 py-4 font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Indicador</th>
            <th className="text-center px-4 py-4 font-semibold text-sm" style={{ color: '#FF6B6B' }}>⚠️ Ruim</th>
            <th className="text-center px-4 py-4 font-semibold text-sm" style={{ color: '#FFD93D' }}>📊 Regular</th>
            <th className="text-center px-4 py-4 font-semibold text-sm" style={{ color: '#6BCB77' }}>✅ Bom</th>
            <th className="text-center px-4 py-4 font-semibold text-sm" style={{ color: '#4DFFD2' }}>🏆 Excelente</th>
          </tr>
        </thead>
        <tbody>
          {INDICADORES.map((row, i) => (
            <tr key={row.indicador} style={{ background: i % 2 === 0 ? 'white' : 'var(--nexus-gray-50)' }}>
              <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--nexus-navy)' }}>{row.indicador}</td>
              <td className="px-4 py-3.5 text-center text-xs rounded" style={{ color: '#B91C1C' }}>{row.ruim}</td>
              <td className="px-4 py-3.5 text-center text-xs" style={{ color: '#92400E' }}>{row.regular}</td>
              <td className="px-4 py-3.5 text-center text-xs" style={{ color: '#065F46' }}>{row.bom}</td>
              <td className="px-4 py-3.5 text-center text-xs font-semibold" style={{ color: 'var(--nexus-green-dark)' }}>{row.excelente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
