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
    excerpt: 'Estratégias comprovadas de confirmação automática, listas de espera e política de cancelamento para maximizar a ocupação da sua agenda.',
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
    content: `<h2>Por que o Fluxo de Caixa é Vital</h2><p>Muitas clínicas lucrativas fecham as portas por falta de liquidez.</p><h2>Reserva de Emergência</h2><p>Mantenha 3 meses de custos fixos em conta separada.</p>`,
    category: 'gestao-financeira', categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed', authorRole: 'Gestão Financeira',
    date: '2026-03-07', readTime: 8,
    tags: ['fluxo de caixa', 'liquidez', 'capital de giro'], coverEmoji: '🏦',
  },
  {
    slug: 'precificacao-de-procedimentos',
    title: 'Como Precificar Procedimentos Médicos sem Trabalhar no Prejuízo',
    excerpt: 'Calcule o preço justo dos seus procedimentos considerando custos diretos, indiretos, pró-labore e margem.',
    content: `<h2>O Erro Mais Comum</h2><p>A maioria dos médicos precifica baseando-se no concorrente, sem calcular se o valor cobre os custos.</p>`,
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
    content: `<h2>Por que o PEP Certo Faz Diferença</h2><p>O PEP é o coração da operação clínica. Um sistema mal escolhido gera retrabalho.</p>`,
    category: 'tecnologia-em-saude', categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed', authorRole: 'Produto & Tecnologia',
    date: '2026-03-01', readTime: 7,
    tags: ['PEP', 'tecnologia', 'software'], coverEmoji: '💻',
  },
  {
    slug: 'telemedicina-guia-completo-clinicas',
    title: 'Telemedicina para Clínicas: Guia Completo para Implementar com Segurança',
    excerpt: 'Da regulamentação CFM à escolha da plataforma: tudo que sua clínica precisa saber.',
    content: `<h2>Telemedicina é Legal no Brasil?</h2><p>Sim. A Resolução CFM 2.314/22 regulamentou definitivamente a telemedicina no Brasil.</p>`,
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
    tags: ['segurança', 'LGPD', 'cibersegurança'], coverEmoji: '🔐',
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
    content: `<h2>O Papel da ANS</h2><p>A ANS regula a relação entre operadoras e prestadores. Clínicas têm direitos que muitas desconhecem.</p>`,
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
    excerpt: 'Como aplicar NPS na clínica, interpretar os resultados e transformar pacientes satisfeitos em promotores.',
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
    content: `<h2>O CFM e as Redes Sociais</h2><p>A Resolução CFM 2.336/2023 atualizou as regras de publicidade médica para o ambiente digital.</p><h2>O Que é Permitido</h2><p>Conteúdo educativo, informações sobre a especialidade, currículo e depoimentos com autorização.</p><h2>O Que é Proibido</h2><p>Antes e depois de procedimentos, promessas de cura, preços como chamariz e autopromoção sensacionalista.</p>`,
    category: 'marketing-medico', categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed', authorRole: 'Marketing',
    date: '2026-02-20', readTime: 6,
    tags: ['CFM', 'Instagram', 'marketing'], coverEmoji: '📣',
  },
  {
    slug: 'seo-local-clinicas-medicas',
    title: 'SEO Local para Clínicas: Como Aparecer no Topo das Buscas do Google',
    excerpt: 'Estratégias de SEO local para clínicas médicas: Google Meu Negócio, palavras-chave de especialidade e como superar a concorrência nas buscas locais.',
    content: `<h2>O Que é SEO Local</h2><p>SEO Local é o conjunto de técnicas para aparecer quando alguém pesquisa "cardiologista em São Paulo" ou "clínica perto de mim". Diferente do SEO tradicional, o foco é na busca geográfica.</p><h2>Google Meu Negócio é o Ponto de Partida</h2><p>Perfil completo, fotos atualizadas, respostas a avaliações e postagens regulares aumentam significativamente a chance de aparecer no "pacote local" (3 primeiras posições no Maps).</p><h2>Palavras-Chave de Especialidade + Cidade</h2><p>Crie páginas no site para cada especialidade e cidade: "cardiologia em São Paulo", "pediatra em Campinas". Cada combinação é uma oportunidade de captação orgânica.</p><h2>Avaliações como Fator de Ranqueamento</h2><p>Quantidade, qualidade e frequência das avaliações impactam diretamente o ranqueamento local. Um processo automático de coleta de avaliações é um diferencial competitivo enorme.</p>`,
    category: 'marketing-medico', categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed', authorRole: 'Marketing Digital',
    date: '2026-03-10', readTime: 8,
    tags: ['SEO', 'Google', 'busca local'], coverEmoji: '🔍',
  },
  {
    slug: 'conteudo-educativo-medico-como-criar',
    title: 'Como Criar Conteúdo Educativo Médico que Gera Autoridade e Novos Pacientes',
    excerpt: 'Do tema à publicação: estratégia completa de criação de conteúdo médico ético, dentro das normas do CFM e que realmente converte.',
    content: `<h2>Por Que Conteúdo Educativo Funciona</h2><p>Conteúdo que educa gera confiança, e confiança gera agendamento. Médicos que publicam regularmente têm 10x mais reconhecimento de marca do que os que não publicam.</p><h2>Como Escolher os Temas</h2><p>Responda as dúvidas mais frequentes dos seus pacientes. Use as perguntas do consultório como pauta: são exatamente o que seu público pesquisa no Google.</p><h2>Formatos que Funcionam</h2><p>Carrosséis educativos no Instagram têm o maior alcance orgânico. Artigos de blog ranqueiam no Google por anos. Reels curtos geram descoberta. Combine os três.</p><h2>O Que o CFM Permite</h2><p>Conteúdo educativo sobre sintomas, prevenção, tratamentos e a especialidade são totalmente permitidos. O foco deve ser educar, não promover.</p><h2>Consistência Acima de Perfeição</h2><p>3 posts por semana por 6 meses supera 1 post perfeito por mês. Crie um calendário editorial e mantenha a cadência.</p>`,
    category: 'marketing-medico', categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed', authorRole: 'Marketing de Conteúdo',
    date: '2026-02-05', readTime: 7,
    tags: ['conteúdo', 'Instagram', 'autoridade'], coverEmoji: '✍️',
  },
  {
    slug: 'gestao-de-equipe-clinica',
    title: 'Como Montar e Liderar uma Equipe de Alta Performance na Clínica',
    excerpt: 'Da contratação ao treinamento: estratégias para construir um time engajado e produtivo.',
    content: `<h2>Cultura Antes de Processos</h2><p>Defina os valores da clínica antes de contratar. Uma equipe alinhada performa melhor.</p>`,
    category: 'gestao-de-equipes', categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed', authorRole: 'RH & Cultura',
    date: '2026-02-15', readTime: 7,
    tags: ['equipe', 'liderança', 'RH'], coverEmoji: '👥',
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
