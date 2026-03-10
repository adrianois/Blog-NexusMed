export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryName: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  tags: string[];
  coverEmoji: string;
}

const POSTS: Post[] = [
  {
    slug: 'como-reduzir-faltas-agendamentos',
    title: 'Como Reduzir Faltas e No-Shows na Sua Clínica em até 60%',
    excerpt: 'Descubra estratégias comprovadas de confirmação automática, listas de espera e politica de cancelamento para maximizar a ocupação da sua agenda.',
    content: `
      <h2>O Problema das Faltas na Clínica</h2>
      <p>As faltas não comunicadas (no-shows) representam, em média, 18% das consultas agendadas em clínicas brasileiras. Cada falta significa receita perdida, profissional ocioso e paciente sem atendimento.</p>
      <h2>1. Confirmação Automática Multicanal</h2>
      <p>Implemente lembretes automáticos por WhatsApp, SMS e e-mail em três momentos: 48h, 24h e 2h antes da consulta. Sistemas como o NexusMed fazem isso automaticamente, reduzindo faltas em até 40%.</p>
      <h2>2. Lista de Espera Inteligente</h2>
      <p>Quando um paciente cancela, o sistema deve notificar automaticamente os próximos da lista de espera. Isso garante que o horário seja preenchido em minutos.</p>
      <h2>3. Política de Cancelamento Clara</h2>
      <p>Comunique a política de cancelamento no momento do agendamento. Estabeleça um prazo mínimo (ex: 24h) e, se necessário, considere uma taxa de reagendamento para casos recorrentes.</p>
      <h2>Resultado Esperado</h2>
      <p>Clínicas que implementam essas três estratégias em conjunto relatam redução de 50-60% nas faltas, com aumento direto no faturamento mensal.</p>
    `,
    category: 'gestao-financeira',
    categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed',
    authorRole: 'Time de Conteúdo',
    date: '2026-03-08',
    readTime: 5,
    tags: ['agendamento', 'produtividade', 'receita'],
    coverEmoji: '📅',
  },
  {
    slug: 'lgpd-clinicas-guia-pratico',
    title: 'LGPD para Clínicas: Guia Prático de Conformidade em 2026',
    excerpt: 'Tudo o que sua clínica precisa saber sobre proteção de dados de pacientes, consentimento, armazenamento seguro e como evitar multas da ANPD.',
    content: `
      <h2>Por que a LGPD é Crítica para Clínicas</h2>
      <p>Dados de saúde são classificados como dados sensíveis pela LGPD, exigindo cuidados redobrados. Violações podem resultar em multas de até 2% do faturamento anual, limitadas a R$ 50 milhões por infração.</p>
      <h2>Principais Obrigações</h2>
      <p>Toda clínica deve: nomear um DPO (encarregado de dados), manter registro das atividades de tratamento, obter consentimento explícito dos pacientes e implementar medidas técnicas de segurança.</p>
      <h2>Consentimento no Prontuário</h2>
      <p>O termo de consentimento deve ser claro, específico e documentado. O paciente tem direito de revogar o consentimento a qualquer momento, e a clínica deve estar preparada para atender esse pedido.</p>
      <h2>Checklist de Conformidade</h2>
      <p>Revise: política de privacidade atualizada, contratos com fornecedores (DPA), criptografia no armazenamento de prontuários, treinamento da equipe e plano de resposta a incidentes.</p>
    `,
    category: 'regulamentacao',
    categoryName: 'Regulamentação',
    author: 'Equipe NexusMed',
    authorRole: 'Jurídico & Compliance',
    date: '2026-03-05',
    readTime: 8,
    tags: ['LGPD', 'compliance', 'privacidade'],
    coverEmoji: '⚖️',
  },
  {
    slug: 'prontuario-eletronico-como-escolher',
    title: 'Prontuário Eletrônico: Como Escolher o Sistema Certo para Sua Clínica',
    excerpt: 'Comparativo dos principais critérios para avaliar um PEP: usabilidade, integração com TISS, suporte, segurança e custo-benefício.',
    content: `
      <h2>Por que o PEP Certo Faz Diferença</h2>
      <p>O Prontuário Eletrônico do Paciente (PEP) é o coração da operação clínica. Um sistema mal escolhido gera retrabalho, erros e frustração — tanto para a equipe quanto para os pacientes.</p>
      <h2>Critérios Essenciais</h2>
      <p>Avalie: conformidade com CFM 1.821/07, integração com TISS e TUSS para convênios, facilidade de uso (UX), disponibilidade de app mobile, suporte técnico nacional e planos de backup.</p>
      <h2>Integração é Tudo</h2>
      <p>O PEP deve se integrar com agendamento, faturamento, estoque de materiais e comunicação com pacientes. Sistemas isolados geram ilhas de informação que comprometem a gestão.</p>
      <h2>Migração de Dados</h2>
      <p>Antes de contratar, verifique a política de exportação de dados. Você deve poder exportar todo o histórico em formatos abertos. Evite sistemas que criam dependência tecnológica (vendor lock-in).</p>
    `,
    category: 'tecnologia-em-saude',
    categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed',
    authorRole: 'Produto & Tecnologia',
    date: '2026-03-01',
    readTime: 7,
    tags: ['PEP', 'tecnologia', 'software'],
    coverEmoji: '💻',
  },
  {
    slug: 'experiencia-do-paciente-5-estrategias',
    title: '5 Estratégias para Transformar a Experiência do Paciente na Sua Clínica',
    excerpt: 'Da recepção ao pós-consulta: como criar uma jornada do paciente memorável que gera indicações e fidelização.',
    content: `
      <h2>A Jornada Completa do Paciente</h2>
      <p>A experiência do paciente começa antes mesmo da consulta — no momento em que ele pesquisa sua clínica online — e se estende ao pós-atendimento. Cada ponto de contato importa.</p>
      <h2>1. Agendamento Simples e Rápido</h2>
      <p>Ofereça agendamento online 24/7. Pacientes modernos não querem ligar para marcar consulta. Um portal de agendamento reduz o trabalho da recepção e melhora a conversão.</p>
      <h2>2. Sala de Espera Humanizada</h2>
      <p>Tempo de espera comunicado, Wi-Fi disponível, ambiente limpo e climatizado, e equipe treinada para acolher fazem diferença enorme na percepção do paciente.</p>
      <h2>3. Comunicação Pós-Consulta</h2>
      <p>Envie um resumo da consulta, orientações e próximos passos via WhatsApp. Esse pequeno gesto gera encantamento e reduz dúvidas que sobrecarregam a recepção.</p>
      <h2>4. Pesquisa de Satisfação</h2>
      <p>Automatize o envio de NPS 24h após a consulta. Pacientes promotores (nota 9-10) podem ser convidados a deixar avaliações no Google, que é o principal canal de captação de novos pacientes.</p>
      <h2>5. Programa de Fidelidade</h2>
      <p>Reconheça pacientes frequentes com benefícios como check-up anual gratuito ou desconto em procedimentos. Retenção é sempre mais barata que captação.</p>
    `,
    category: 'experiencia-do-paciente',
    categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed',
    authorRole: 'Sucesso do Cliente',
    date: '2026-02-25',
    readTime: 6,
    tags: ['paciente', 'fidelização', 'NPS'],
    coverEmoji: '🤝',
  },
  {
    slug: 'marketing-medico-instagram',
    title: 'Marketing Médico no Instagram: O Que Pode e O Que Não Pode em 2026',
    excerpt: 'Guia completo das resoluções do CFM sobre publicidade médica e como construir uma presença digital ética e eficaz.',
    content: `
      <h2>O CFM e as Redes Sociais</h2>
      <p>A Resolução CFM 2.336/2023 atualizou as regras de publicidade médica para o ambiente digital. Entender esses limites é essencial para evitar processos éticos e construir uma reputação sólida.</p>
      <h2>O Que é Permitido</h2>
      <p>Conteúdo educativo, informações sobre a especialidade, currículo profissional, depoimentos de pacientes com autorização expressa e casos clínicos de domínio público são permitidos.</p>
      <h2>O Que é Proibido</h2>
      <p>Proibidos: antes e depois de procedimentos, promessas de cura, preços como chamariz, títulos não reconhecidos pelo CFM e autopromoção sensacionalista.</p>
      <h2>Estratégia de Conteúdo Ético</h2>
      <p>Foque em conteúdo educativo que gera autoridade. Um médico que ensina constrói confiança de forma orgânica e sustentável, muito mais eficaz do que anúncios agressivos.</p>
    `,
    category: 'marketing-medico',
    categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed',
    authorRole: 'Marketing',
    date: '2026-02-20',
    readTime: 6,
    tags: ['CFM', 'Instagram', 'marketing'],
    coverEmoji: '📣',
  },
  {
    slug: 'gestao-de-equipe-clinica',
    title: 'Como Montar e Liderar uma Equipe de Alta Performance na Clínica',
    excerpt: 'Da contratação ao treinamento: estratégias para construir um time engajado, produtivo e alinhado com a cultura da sua clínica.',
    content: `
      <h2>Cultura Antes de Processos</h2>
      <p>Antes de contratar, defina claramente os valores da clínica. Uma equipe alinhada com a cultura performa melhor e tem menor rotatividade, mesmo com salários equivalentes à concorrência.</p>
      <h2>Contratação por Competências Comportamentais</h2>
      <p>Para cargos de atendimento, priorize empatia, comunicação e resiliência. Habilidades técnicas se ensinam; atitudes são muito mais difíceis de moldar.</p>
      <h2>Onboarding Estruturado</h2>
      <p>Os primeiros 30 dias do colaborador definem seu engajamento de longo prazo. Tenha um checklist de integração, um mentor designado e metas claras para o período.</p>
      <h2>Feedback Contínuo</h2>
      <p>Não espere a avaliação anual. Implemente check-ins semanais de 15 minutos e feedback imediato tanto positivo quanto construtivo. Equipes com cultura de feedback têm 14% mais produtividade.</p>
    `,
    category: 'gestao-de-equipes',
    categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed',
    authorRole: 'RH & Cultura',
    date: '2026-02-15',
    readTime: 7,
    tags: ['equipe', 'liderança', 'RH'],
    coverEmoji: '👥',
  },
];

export function getAllPosts(): Post[] {
  return POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return POSTS.filter((p) => p.category === category);
}
