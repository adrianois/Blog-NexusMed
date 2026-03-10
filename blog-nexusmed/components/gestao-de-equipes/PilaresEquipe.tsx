const PILARES = [
  {
    icon: '🎯',
    titulo: 'Cultura & Valores Claros',
    descricao: 'Antes de contratar, defina os valores inegociáveis da clínica. A cultura é o filtro que atrai as pessoas certas e mantém a equipe coesa mesmo em momentos de pressão.',
    resultado: 'Reduz rotatividade em 35%',
    cor: '#1E88E5',
    bg: '#E3F2FD',
  },
  {
    icon: '🔍',
    titulo: 'Contratação por Competências',
    descricao: 'Para cargos de atendimento, priorize empatia, comunicação e resiliência. Habilidades técnicas se ensinam; comportamentos alinhados à cultura são raros de mudar.',
    resultado: 'Acerto na contratação +60%',
    cor: '#00875A',
    bg: '#E0F5EE',
  },
  {
    icon: '🚀',
    titulo: 'Onboarding Estruturado',
    descricao: 'Os primeiros 30 dias definem o engajamento de longo prazo. Um checklist de integração com metas claras reduz o tempo até a produtividade plena de 90 para 45 dias.',
    resultado: 'Engajamento 3x maior',
    cor: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '💬',
    titulo: 'Feedback Contínuo',
    descricao: 'Check-ins semanais de 15 minutos e feedback imediato após situações relevantes. Equipes com cultura de feedback têm 14% mais produtividade e 30% menos conflitos.',
    resultado: '+14% de produtividade',
    cor: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: '📚',
    titulo: 'Treinamento & Desenvolvimento',
    descricao: 'Mapa de competências por cargo, plano de desenvolvimento individual (PDI) e orçamento dedicado a treinamentos. Profissional que cresce, permanece.',
    resultado: 'Retenção de talentos',
    cor: '#DC2626',
    bg: '#FEE2E2',
  },
  {
    icon: '🏆',
    titulo: 'Reconhecimento & Remuneração',
    descricao: 'Salário justo é o mínimo. O que retém talentos é reconhecimento público, autonomia crescente e clareza sobre o caminho de crescimento dentro da clínica.',
    resultado: 'LTV do colaborador 2x maior',
    cor: '#0D2B5E',
    bg: '#EFF6FF',
  },
];

export default function PilaresEquipe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {PILARES.map((p, i) => (
        <div key={p.titulo} className="nexus-card p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: p.bg }}>
              {p.icon}
            </div>
            <div>
              <span className="text-xs font-bold" style={{ color: p.cor }}>Pilar {i + 1}</span>
              <h3 className="font-bold text-sm leading-snug mt-0.5" style={{ color: 'var(--nexus-navy)', fontFamily: 'Poppins, sans-serif' }}>{p.titulo}</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--nexus-gray-600)', fontFamily: 'Inter, sans-serif' }}>
            {p.descricao}
          </p>
          <div className="pt-3" style={{ borderTop: '1px solid var(--nexus-gray-100)' }}>
            <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: p.bg, color: p.cor }}>✓ {p.resultado}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
