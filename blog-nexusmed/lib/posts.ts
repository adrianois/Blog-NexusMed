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
    excerpt: 'Estratégias comprovadas de confirmação automática, listas de espera e política de cancelamento para maximizar a ocupação da agenda.',
    content: `<h2>O Problema das Faltas na Clínica</h2><p>As faltas não comunicadas representam, em média, 18% das consultas agendadas em clínicas brasileiras.</p><h2>1. Confirmação Automática Multicanal</h2><p>Lembretes automáticos por WhatsApp, SMS e e-mail em 48h, 24h e 2h antes da consulta.</p>`,
    category: 'gestao-financeira', categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed', authorRole: 'Time de Conteúdo',
    date: '2026-03-08', readTime: 5,
    tags: ['agendamento', 'produtividade', 'receita'], coverEmoji: '📅',
  },
  {
    slug: 'fluxo-de-caixa-clinica',
    title: 'Fluxo de Caixa para Clínicas: Como Montar, Controlar e Não Quebrar',
    excerpt: 'Guia completo para estruturar o fluxo de caixa da sua clínica, antecipar crise de liquidez e garantir capital de giro.',
    content: `<h2>Por que o Fluxo de Caixa é Vital</h2><p>Muitas clínicas lucrativas fecham as portas por falta de liquidez.</p>`,
    category: 'gestao-financeira', categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed', authorRole: 'Gestão Financeira',
    date: '2026-03-07', readTime: 8,
    tags: ['fluxo de caixa', 'liquidez', 'capital de giro'], coverEmoji: '🏦',
  },
  {
    slug: 'precificacao-de-procedimentos',
    title: 'Como Precificar Procedimentos Médicos sem Trabalhar no Prejuízo',
    excerpt: 'Calcule o preço justo dos seus procedimentos considerando custos diretos, indiretos, pró-labore e margem.',
    content: `<h2>O Erro Mais Comum</h2><p>A maioria dos médicos precifica baseando-se no concorrente, sem calcular se cobre os custos.</p>`,
    category: 'gestao-financeira', categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed', authorRole: 'Gestão Financeira',
    date: '2026-03-04', readTime: 9,
    tags: ['precificação', 'custos', 'margem'], coverEmoji: '💲',
  },
  {
    slug: 'glosas-de-convenios-como-reduzir',
    title: 'Glosas de Convênios: Como Reduzir para Menos de 3%',
    excerpt: 'Causas, impacto financeiro e como estruturar o faturamento para minimizar glosas.',
    content: `<h2>O Que é Glosa</h2><p>Glosa é a negativa de pagamento do plano. A média no Brasil é de 8-12% do faturamento com convênios.</p>`,
    category: 'gestao-financeira', categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed', authorRole: 'Faturamento & Convênios',
    date: '2026-02-28', readTime: 7,
    tags: ['glosa', 'convênios', 'faturamento'], coverEmoji: '📝',
  },
  {
    slug: 'prontuario-eletronico-como-escolher',
    title: 'Prontuário Eletrônico: Como Escolher o Sistema Certo para Sua Clínica',
    excerpt: 'Critérios para avaliar um PEP: usabilidade, integração com TISS, suporte e segurança.',
    content: `<h2>Por que o PEP Certo Faz Diferença</h2><p>O PEP é o coração da operação clínica.</p>`,
    category: 'tecnologia-em-saude', categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed', authorRole: 'Produto & Tecnologia',
    date: '2026-03-01', readTime: 7,
    tags: ['PEP', 'tecnologia', 'software'], coverEmoji: '💻',
  },
  {
    slug: 'telemedicina-guia-completo-clinicas',
    title: 'Telemedicina para Clínicas: Guia Completo para Implementar com Segurança',
    excerpt: 'Da regulamentação CFM à escolha da plataforma: tudo que sua clínica precisa saber.',
    content: `<h2>Telemedicina é Legal no Brasil?</h2><p>Sim. A Resolução CFM 2.314/22 regulamentou definitivamente a telemedicina.</p>`,
    category: 'tecnologia-em-saude', categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed', authorRole: 'Produto & Tecnologia',
    date: '2026-03-06', readTime: 8,
    tags: ['telemedicina', 'CFM', 'videoconsulta'], coverEmoji: '📹',
  },
  {
    slug: 'ia-na-saude-o-que-muda-para-clinicas',
    title: 'IA na Saúde: O Que Muda na Prática para Clínicas e Consultórios',
    excerpt: 'Como a inteligência artificial está transformando diagnósticos, gestão e relacionamento com pacientes.',
    content: `<h2>IA Não é Ficção Científica</h2><p>Ferramentas de IA já estão em clínicas brasileiras para análise de imagens e triagem.</p>`,
    category: 'tecnologia-em-saude', categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed', authorRole: 'Inovação & Tecnologia',
    date: '2026-03-03', readTime: 7,
    tags: ['IA', 'inteligência artificial', 'diagnóstico'], coverEmoji: '🤖',
  },
  {
    slug: 'seguranca-de-dados-clinica',
    title: 'Segurança de Dados na Clínica: Guia Prático para Proteger Prontuários',
    excerpt: 'Como proteger os dados dos seus pacientes contra vazamentos e violações da LGPD.',
    content: `<h2>O Cenário de Ameaças</h2><p>O setor de saúde foi o segundo mais atacado no Brasil em 2025.</p>`,
    category: 'tecnologia-em-saude', categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed', authorRole: 'Segurança & Compliance',
    date: '2026-02-22', readTime: 8,
    tags: ['segurança', 'LGPD', 'cibersegurança'], coverEmoji: '🔒',
  },
  {
    slug: 'lgpd-clinicas-guia-pratico',
    title: 'LGPD para Clínicas: Guia Prático de Conformidade em 2026',
    excerpt: 'Proteção de dados de pacientes, consentimento e como evitar multas da ANPD.',
    content: `<h2>Por que a LGPD é Crítica</h2><p>Dados de saúde são sensíveis pela LGPD. Multas chegam a R$ 50 milhões por infração.</p>`,
    category: 'regulamentacao', categoryName: 'Regulamentação',
    author: 'Equipe NexusMed', authorRole: 'Jurídico & Compliance',
    date: '2026-03-05', readTime: 8,
    tags: ['LGPD', 'compliance', 'privacidade'], coverEmoji: '⚖️',
  },
  {
    slug: 'cfm-resolucoes-2026',
    title: 'CFM em 2026: As Resoluções que Mais Impactam sua Clínica',
    excerpt: 'Panorama das principais resoluções do CFM vigentes em 2026.',
    content: `<h2>Por Que Acompanhar o CFM</h2><p>O CFM publicou mais de 60 resoluções desde 2020.</p>`,
    category: 'regulamentacao', categoryName: 'Regulamentação',
    author: 'Equipe NexusMed', authorRole: 'Jurídico & Compliance',
    date: '2026-03-09', readTime: 9,
    tags: ['CFM', 'resoluções', 'ética médica'], coverEmoji: '📜',
  },
  {
    slug: 'anvisa-clinicas-conformidade',
    title: 'ANVISA para Clínicas: Tudo Sobre Alvará Sanitário e Conformidade',
    excerpt: 'Como obter e manter o alvará sanitário e exigências de estrutura física.',
    content: `<h2>Alvará Sanitário é Obrigatório</h2><p>Toda clínica precisa de alvará sanitário emitido pela Vigilância Sanitária Municipal.</p>`,
    category: 'regulamentacao', categoryName: 'Regulamentação',
    author: 'Equipe NexusMed', authorRole: 'Jurídico & Compliance',
    date: '2026-02-18', readTime: 7,
    tags: ['ANVISA', 'alvará', 'vigilância sanitária'], coverEmoji: '🧪',
  },
  {
    slug: 'ans-convenios-direitos-clinicas',
    title: 'ANS e Convênios: Direitos e Obrigações das Clínicas Credenciadas',
    excerpt: 'O que a ANS garante para clínicas credenciadas: prazos de pagamento e regras de glosa.',
    content: `<h2>O Papel da ANS</h2><p>A ANS regula a relação entre operadoras e prestadores.</p>`,
    category: 'regulamentacao', categoryName: 'Regulamentação',
    author: 'Equipe NexusMed', authorRole: 'Faturamento & Convênios',
    date: '2026-02-10', readTime: 7,
    tags: ['ANS', 'convênios', 'credenciamento'], coverEmoji: '💳',
  },
  {
    slug: 'experiencia-do-paciente-5-estrategias',
    title: '5 Estratégias para Transformar a Experiência do Paciente na Sua Clínica',
    excerpt: 'Da recepção ao pós-consulta: como criar uma jornada memorável que gera indicações e fidelização.',
    content: `<h2>A Jornada Completa do Paciente</h2><p>A experiência começa antes da consulta e vai até o pós-atendimento.</p>`,
    category: 'experiencia-do-paciente', categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed', authorRole: 'Sucesso do Cliente',
    date: '2026-02-25', readTime: 6,
    tags: ['paciente', 'fidelização', 'NPS'], coverEmoji: '🤝',
  },
  {
    slug: 'nps-clinicas-como-usar',
    title: 'NPS para Clínicas: Como Medir e Usar a Satisfação do Paciente a seu Favor',
    excerpt: 'Como aplicar NPS na clínica, interpretar resultados e transformar pacientes satisfeitos em promotores.',
    content: `<h2>O Que é NPS</h2><p>"Em uma escala de 0 a 10, o quanto você indicaria nossa clínica?" Simples, mas poderoso.</p>`,
    category: 'experiencia-do-paciente', categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed', authorRole: 'Sucesso do Cliente',
    date: '2026-03-02', readTime: 6,
    tags: ['NPS', 'satisfação', 'fidelização'], coverEmoji: '⭐',
  },
  {
    slug: 'comunicacao-medico-paciente',
    title: 'Comunicação Médico-Paciente: Como Explicar Diagnósticos com Clareza',
    excerpt: 'Técnicas para explicar diagnósticos de forma simples e aumentar a adesão ao tratamento.',
    content: `<h2>Por Que a Comunicação Importa</h2><p>Pacientes que entendem seu diagnóstico aderem 3x mais ao tratamento.</p>`,
    category: 'experiencia-do-paciente', categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed', authorRole: 'Educação em Saúde',
    date: '2026-02-14', readTime: 7,
    tags: ['comunicação', 'paciente', 'adesão'], coverEmoji: '💬',
  },
  {
    slug: 'google-meu-negocio-clinicas',
    title: 'Google Meu Negócio para Clínicas: Guia Completo para Aparecer nas Buscas',
    excerpt: 'Como otimizar o perfil do Google Meu Negócio para atrair mais pacientes e melhorar avaliações.',
    content: `<h2>Por Que é Essencial</h2><p>77% dos pacientes pesquisam no Google antes de escolher uma clínica.</p>`,
    category: 'experiencia-do-paciente', categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed', authorRole: 'Marketing Digital',
    date: '2026-01-30', readTime: 8,
    tags: ['Google', 'avaliações', 'captação'], coverEmoji: '📍',
  },
  {
    slug: 'marketing-medico-instagram',
    title: 'Marketing Médico no Instagram: O Que Pode e O Que Não Pode em 2026',
    excerpt: 'Guia das resoluções do CFM sobre publicidade médica e como construir presença digital ética.',
    content: `<h2>O CFM e as Redes Sociais</h2><p>A Resolução CFM 2.336/2023 atualizou as regras de publicidade médica para o ambiente digital.</p>`,
    category: 'marketing-medico', categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed', authorRole: 'Marketing',
    date: '2026-02-20', readTime: 6,
    tags: ['CFM', 'Instagram', 'marketing'], coverEmoji: '📣',
  },
  {
    slug: 'seo-local-clinicas-medicas',
    title: 'SEO Local para Clínicas: Como Aparecer no Topo das Buscas do Google',
    excerpt: 'Estratégias de SEO local para clínicas médicas: Google Meu Negócio, palavras-chave e como superar a concorrência.',
    content: `<h2>O Que é SEO Local</h2><p>SEO Local é o conjunto de técnicas para aparecer quando alguém pesquisa "cardiologista em São Paulo".</p>`,
    category: 'marketing-medico', categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed', authorRole: 'Marketing Digital',
    date: '2026-03-10', readTime: 8,
    tags: ['SEO', 'Google', 'busca local'], coverEmoji: '🔍',
  },
  {
    slug: 'conteudo-educativo-medico-como-criar',
    title: 'Como Criar Conteúdo Educativo Médico que Gera Autoridade e Novos Pacientes',
    excerpt: 'Estratégia completa de criação de conteúdo médico ético, dentro das normas do CFM e que realmente converte.',
    content: `<h2>Por Que Conteúdo Educativo Funciona</h2><p>Conteúdo que educa gera confiança, e confiança gera agendamento.</p>`,
    category: 'marketing-medico', categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed', authorRole: 'Marketing de Conteúdo',
    date: '2026-02-05', readTime: 7,
    tags: ['conteúdo', 'Instagram', 'autoridade'], coverEmoji: '✍️',
  },
  {
    slug: 'gestao-de-equipe-clinica',
    title: 'Como Montar e Liderar uma Equipe de Alta Performance na Clínica',
    excerpt: 'Da contratação ao treinamento: estratégias para construir um time engajado, produtivo e alinhado com a cultura.',
    content: `<h2>Cultura Antes de Processos</h2><p>Antes de contratar, defina claramente os valores da clínica. Uma equipe alinhada com a cultura performa melhor e tem menor rotatividade.</p><h2>Contratação por Competências Comportamentais</h2><p>Para cargos de atendimento, priorize empatia, comunicação e resiliência.</p><h2>Onboarding Estruturado</h2><p>Os primeiros 30 dias definem o engajamento de longo prazo.</p><h2>Feedback Contínuo</h2><p>Implemente check-ins semanais e feedback imediato. Equipes com cultura de feedback têm 14% mais produtividade.</p>`,
    category: 'gestao-de-equipes', categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed', authorRole: 'RH & Cultura',
    date: '2026-02-15', readTime: 7,
    tags: ['equipe', 'liderança', 'RH'], coverEmoji: '👥',
  },
  {
    slug: 'retencao-de-talentos-clinica',
    title: 'Retenção de Talentos na Clínica: Por Que Seus Melhores Colaboradores Saem',
    excerpt: 'As principais causas de rotatividade em clínicas médicas e como criar um ambiente onde talentos querem ficar e crescer.',
    content: `<h2>O Custo Real da Rotatividade</h2><p>Substituir um colaborador custa em média 150% do seu salário anual quando somados recrutamento, treinamento e perda de produtividade.</p><h2>Por Que as Pessoas Saem</h2><p>Pesquisas mostram que 70% das demissões voluntárias são causadas pela relação com o líder direto — não pelo salário. Liderança tóxica, falta de reconhecimento e ausência de perspectiva de crescimento lideram as causas.</p><h2>Entrevista de Permanência</h2><p>Não espere a demissão para descobrir o que o colaborador precisa. Faça perguntas como: "O que te faria considerar ir para outro lugar?" e "O que poderíamos melhorar para sua experiência aqui?"</p><h2>Criando Trilha de Carreira</h2><p>Defina claramente os critérios para progressão: tempo, competências, resultados. Um colaborador que sabe onde pode chegar tem muito mais razão para ficar.</p>`,
    category: 'gestao-de-equipes', categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed', authorRole: 'RH & Cultura',
    date: '2026-03-05', readTime: 8,
    tags: ['retenção', 'rotatividade', 'talentos'], coverEmoji: '🌱',
  },
  {
    slug: 'recrutamento-seletivo-clinica',
    title: 'Recrutamento e Seleção para Clínicas: Como Contratar Certo na Primeira Vez',
    excerpt: 'Processo completo de recrutamento para clínicas médicas: onde buscar candidatos, como entrevistar e evitar erros que custam caro.',
    content: `<h2>O Erro Mais Caro na Gestão</h2><p>Contratar a pessoa errada custa até 150% do salário anual. A pressão por preencher uma vaga rapidamente é a principal causa de contratações ruins.</p><h2>Onde Encontrar Bons Candidatos</h2><p>Indicações da própria equipe geram os melhores resultados (55% de retenção superior). LinkedIn para cargos técnicos, Catho e Indeed para cargos operacionais.</p><h2>Entrevista Comportamental (STAR)</h2><p>Use perguntas baseadas em situações reais: "Me conte sobre uma vez em que você lidou com um paciente insatisfeito. O que fez?" Comportamento passado prediz comportamento futuro.</p><h2>Teste Prático</h2><p>Antes de contratar, simule uma situação real do cargo. Para recepcionista: atendimento de um paciente nervoso. Para técnico: procedimento padrão. Isso elimina surpresas no primeiro mês.</p>`,
    category: 'gestao-de-equipes', categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed', authorRole: 'RH & Cultura',
    date: '2026-01-25', readTime: 7,
    tags: ['recrutamento', 'seleção', 'contratação'], coverEmoji: '🔍',
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
