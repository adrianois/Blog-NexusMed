const FERRAMENTAS = [
  {
    categoria: 'Prontuário Eletrônico (PEP)',
    icon: '📂',
    prioridade: 'Crítica',
    prioridadeCor: '#DC2626',
    prioridadeBg: '#FEE2E2',
    beneficio: 'Elimina papel, integra agenda e faturamento, exigido pelo CFM',
    indicadoPara: 'Toda clínica',
    roi: 'Alto',
  },
  {
    categoria: 'Agendamento Online',
    icon: '📅',
    prioridade: 'Alta',
    prioridadeCor: '#D97706',
    prioridadeBg: '#FEF3C7',
    beneficio: 'Reduz no-show, libera recepção, melhora experiência do paciente',
    indicadoPara: 'Toda clínica',
    roi: 'Alto',
  },
  {
    categoria: 'Telemedicina',
    icon: '📹',
    prioridade: 'Alta',
    prioridadeCor: '#1565C0',
    prioridadeBg: '#E3F2FD',
    beneficio: 'Expande alcance geográfico, reduz custos de estrutura, fideliza pacientes',
    indicadoPara: 'Consultórios, retornos, crônicos',
    roi: 'Alto',
  },
  {
    categoria: 'Assinatura Digital (ICP-Brasil)',
    icon: '✏️',
    prioridade: 'Alta',
    prioridadeCor: '#D97706',
    prioridadeBg: '#FEF3C7',
    beneficio: 'Receitas e atestados digitais válidos juridicamente, sem papel',
    indicadoPara: 'Toda clínica com telemedicina',
    roi: 'Médio',
  },
  {
    categoria: 'BI & Relatórios Automáticos',
    icon: '📊',
    prioridade: 'Média',
    prioridadeCor: '#7C3AED',
    prioridadeBg: '#EDE9FE',
    beneficio: 'Visão em tempo real de KPIs, faturamento e desempenho da equipe',
    indicadoPara: 'Clínicas com 3+ profissionais',
    roi: 'Médio',
  },
  {
    categoria: 'Chatbot de Triagem (WhatsApp)',
    icon: '💬',
    prioridade: 'Média',
    prioridadeCor: '#00875A',
    prioridadeBg: '#E0F5EE',
    beneficio: 'Triagem automática, confirmação de consultas e FAQ 24/7',
    indicadoPara: 'Clínicas com alto volume',
    roi: 'Médio',
  },
  {
    categoria: 'IA de Apoio Diagnóstico',
    icon: '🤖',
    prioridade: 'Futura',
    prioridadeCor: '#6B7280',
    prioridadeBg: '#F3F4F6',
    beneficio: 'Auxílio em leitura de exames de imagem e ECG com alta precisão',
    indicadoPara: 'Radiologia, dermatologia, cardiologia',
    roi: 'Alto (longo prazo)',
  },
];

export default function FerramentasTable() {
  return (
    <div id="ferramentas" className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--nexus-gray-200)' }}>
      <table className="w-full text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
        <thead>
          <tr style={{ background: 'var(--nexus-navy)' }}>
            <th className="text-left px-5 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Ferramenta</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Prioridade</th>
            <th className="text-left px-4 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Principal Benefício</th>
            <th className="text-left px-4 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Indicado Para</th>
            <th className="text-center px-4 py-4 text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>ROI</th>
          </tr>
        </thead>
        <tbody>
          {FERRAMENTAS.map((f, i) => (
            <tr key={f.categoria} style={{ background: i % 2 === 0 ? 'white' : 'var(--nexus-gray-50)' }}>
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{f.icon}</span>
                  <span className="font-semibold" style={{ color: 'var(--nexus-navy)' }}>{f.categoria}</span>
                </div>
              </td>
              <td className="px-4 py-3.5 text-center">
                <span className="nexus-tag" style={{ background: f.prioridadeBg, color: f.prioridadeCor }}>
                  {f.prioridade}
                </span>
              </td>
              <td className="px-4 py-3.5 text-xs" style={{ color: 'var(--nexus-gray-600)', maxWidth: '240px' }}>{f.beneficio}</td>
              <td className="px-4 py-3.5 text-xs" style={{ color: 'var(--nexus-gray-600)' }}>{f.indicadoPara}</td>
              <td className="px-4 py-3.5 text-center text-xs font-semibold" style={{ color: 'var(--nexus-green-dark)' }}>{f.roi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
