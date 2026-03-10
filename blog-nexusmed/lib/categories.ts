export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  bg: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'gestao-financeira',
    name: 'Gestão Financeira',
    icon: '💰',
    description: 'Controle de custos, receitas, faturamento e saúde financeira da clínica.',
    color: '#0F6FBF',
    bg: '#E8F4FF',
  },
  {
    slug: 'experiencia-do-paciente',
    name: 'Experiência do Paciente',
    icon: '🤝',
    description: 'Estratégias para encantar, fidelizar e engajar pacientes.',
    color: '#00C7A3',
    bg: '#E0FBF5',
  },
  {
    slug: 'tecnologia-em-saude',
    name: 'Tecnologia em Saúde',
    icon: '💻',
    description: 'Prontuário eletrônico, telemedicina, IA e inovações digitais.',
    color: '#7C3AED',
    bg: '#F3EFFE',
  },
  {
    slug: 'regulamentacao',
    name: 'Regulamentação',
    icon: '⚖️',
    description: 'CFM, LGPD, ANS, vigilância sanitária e conformidade legal.',
    color: '#D97706',
    bg: '#FEF3C7',
  },
  {
    slug: 'marketing-medico',
    name: 'Marketing Médico',
    icon: '📣',
    description: 'Captação de pacientes, redes sociais e presença digital ética.',
    color: '#DC2626',
    bg: '#FEE2E2',
  },
  {
    slug: 'gestao-de-equipes',
    name: 'Gestão de Equipes',
    icon: '👥',
    description: 'Liderança, contratação, cultura e desempenho de equipes clínicas.',
    color: '#059669',
    bg: '#D1FAE5',
  },
];
