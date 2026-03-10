export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  bg: string;
  href?: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'gestao-financeira',
    name: 'Gestão Financeira',
    icon: '💰',
    description: 'Controle de custos, receitas, faturamento e saúde financeira da clínica.',
    color: '#1565C0',
    bg: '#E3F2FD',
    href: '/gestao-financeira',
  },
  {
    slug: 'experiencia-do-paciente',
    name: 'Experiência do Paciente',
    icon: '🤝',
    description: 'Estratégias para encantar, fidelizar e engajar pacientes.',
    color: '#00875A',
    bg: '#E0F5EE',
    href: '/experiencia-do-paciente',
  },
  {
    slug: 'tecnologia-em-saude',
    name: 'Tecnologia em Saúde',
    icon: '💻',
    description: 'Prontuário eletrônico, telemedicina, IA e inovações digitais.',
    color: '#1E88E5',
    bg: '#E3F2FD',
    href: '/tecnologia-em-saude',
  },
  {
    slug: 'regulamentacao',
    name: 'Regulamentação',
    icon: '⚖️',
    description: 'CFM, LGPD, ANS, vigilância sanitária e conformidade legal.',
    color: '#B45309',
    bg: '#FEF3C7',
    href: '/regulamentacao',
  },
  {
    slug: 'marketing-medico',
    name: 'Marketing Médico',
    icon: '📣',
    description: 'Captação de pacientes, redes sociais e presença digital ética.',
    color: '#00A86B',
    bg: '#E0F5EE',
  },
  {
    slug: 'gestao-de-equipes',
    name: 'Gestão de Equipes',
    icon: '👥',
    description: 'Liderança, contratação, cultura e desempenho de equipes clínicas.',
    color: '#0D2B5E',
    bg: '#EFF6FF',
  },
];

export function getCategoryHref(cat: Category): string {
  return cat.href ?? `/categorias/${cat.slug}`;
}
