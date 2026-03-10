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
    excerpt: 'Descubra estratégias comprovadas de confirmação automática, listas de espera e política de cancelamento para maximizar a ocupação da sua agenda.',
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
    slug: 'fluxo-de-caixa-clinica',
    title: 'Fluxo de Caixa para Clínicas: Como Montar, Controlar e Não Quebrar',
    excerpt: 'Guia completo para estruturar o fluxo de caixa da sua clínica, antecipar crise de liquidez e garantir capital de giro suficiente para crescer.',
    content: `
      <h2>Por que o Fluxo de Caixa é Vital</h2>
      <p>Muitas clínicas lucrativas fecham as portas por falta de liquidez. Lucro e caixa são coisas diferentes: você pode ter um ótimo mês de faturamento e ainda assim não ter dinheiro para pagar a folha de pagamento.</p>
      <h2>Estrutura Básica do Fluxo de Caixa</h2>
      <p>Organize seu fluxo em três grandes grupos: Entradas (consultas particulares, recebimento de convênios, procedimentos), Saídas Fixas (aluguel, folha, sistemas, contratos) e Saídas Variáveis (insumos, manutenção, marketing).</p>
      <h2>Ciclo Financeiro da Clínica</h2>
      <p>O principal desafio é o descasamento entre prestação de serviço e recebimento. Consultas particulares recebem no ato. Convênios pagam em 30-90 dias. Esse intervalo precisa de capital de giro.</p>
      <h2>Reserva de Emergência</h2>
      <p>Mantenha uma reserva equivalente a 3 meses de custos fixos em conta separada. Isso protege a clínica de sazonalidades, atrasos de convênios e imprevistos como equipamentos que quebram.</p>
      <h2>Antecipação de Recebíveis</h2>
      <p>Em momentos de aperto, negocie antecipação de recebíveis de convênios com fintechs especializadas em saúde. As taxas costumam ser menores que cheque especial ou cartão empresarial.</p>
    `,
    category: 'gestao-financeira',
    categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed',
    authorRole: 'Gestão Financeira',
    date: '2026-03-07',
    readTime: 8,
    tags: ['fluxo de caixa', 'liquidez', 'capital de giro'],
    coverEmoji: '🏦',
  },
  {
    slug: 'precificacao-de-procedimentos',
    title: 'Como Precificar Procedimentos Médicos sem Trabalhar no Prejuízo',
    excerpt: 'Aprenda a calcular o preço justo dos seus procedimentos considerando custos diretos, indiretos, pró-labore e margem de lucro desejada.',
    content: `
      <h2>O Erro Mais Comum na Precificação</h2>
      <p>A maioria dos médicos precifica seus serviços baseando-se no que o concorrente cobra ou no valor de tabela dos convênios, sem nunca calcular se esse valor cobre todos os seus custos.</p>
      <h2>Componentes do Preço</h2>
      <p>Custo Direto: material usado. Custo Indireto: rateio de aluguel, energia, equipe. Pró-labore: remuneração do médico. Margem de Lucro: retorno do investimento na clínica.</p>
      <h2>Reajuste Anual Obrigatório</h2>
      <p>O IPCA-Saúde historicamente supera o IPCA geral. Reajuste sua tabela anualmente, no mínimo pelo IPCA-Saúde.</p>
      <h2>Tabela Particular vs. Convênio</h2>
      <p>Compare o valor recebido por procedimento. Se o convênio paga abaixo do custo, considere renegociar o contrato ou descredenciar.</p>
    `,
    category: 'gestao-financeira',
    categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed',
    authorRole: 'Gestão Financeira',
    date: '2026-03-04',
    readTime: 9,
    tags: ['precificação', 'custos', 'margem'],
    coverEmoji: '💲',
  },
  {
    slug: 'glosas-de-convenios-como-reduzir',
    title: 'Glosas de Convênios: Como Reduzir para Menos de 3%',
    excerpt: 'Causas, impacto financeiro e como estruturar o processo de faturamento para minimizar glosas e recuperar valores negados pelos planos de saúde.',
    content: `
      <h2>O Que é Glosa e Quanto Ela Custa</h2>
      <p>Glosa é a negativa de pagamento do plano de saúde. A média de glosa em clínicas brasileiras gira em torno de 8-12% do faturamento com convênios.</p>
      <h2>Principais Causas de Glosa</h2>
      <p>Erros de codificação TUSS, documentação incompleta, faturamento fora do prazo e elegibilidade do paciente são os motivos mais comuns.</p>
      <h2>Processo de Recurso de Glosa</h2>
      <p>Toda glosa pode ser recorrida. Clínicas com processo estruturado recuperam até 60% das glosas recorridas.</p>
      <h2>Meta: Abaixo de 3%</h2>
      <p>Estabeleça um painel de acompanhamento mensal por convênio e atue preventivamente nos códigos mais glosados.</p>
    `,
    category: 'gestao-financeira',
    categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed',
    authorRole: 'Faturamento & Convênios',
    date: '2026-02-28',
    readTime: 7,
    tags: ['glosa', 'convênios', 'faturamento'],
    coverEmoji: '📝',
  },
  {
    slug: 'prontuario-eletronico-como-escolher',
    title: 'Prontuário Eletrônico: Como Escolher o Sistema Certo para Sua Clínica',
    excerpt: 'Comparativo dos principais critérios para avaliar um PEP: usabilidade, integração com TISS, suporte, segurança e custo-benefício.',
    content: `
      <h2>Por que o PEP Certo Faz Diferença</h2>
      <p>O Prontuário Eletrônico do Paciente (PEP) é o coração da operação clínica. Um sistema mal escolhido gera retrabalho, erros e frustração.</p>
      <h2>Critérios Essenciais</h2>
      <p>Avalie: conformidade com CFM 1.821/07, integração com TISS e TUSS para convênios, facilidade de uso, suporte técnico nacional e planos de backup.</p>
      <h2>Integração é Tudo</h2>
      <p>O PEP deve se integrar com agendamento, faturamento, estoque de materiais e comunicação com pacientes.</p>
      <h2>Migração de Dados</h2>
      <p>Antes de contratar, verifique a política de exportação de dados. Evite sistemas que criam dependência tecnológica (vendor lock-in).</p>
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
    slug: 'telemedicina-guia-completo-clinicas',
    title: 'Telemedicina para Clínicas: Guia Completo para Implementar com Segurança',
    excerpt: 'Da regulamentação CFM à escolha da plataforma: tudo o que sua clínica precisa saber para oferecer consultas por vídeo de forma legal e eficaz.',
    content: `
      <h2>Telemedicina é Legal no Brasil?</h2>
      <p>Sim. A Resolução CFM 2.314/22 regulamentou definitivamente a telemedicina no Brasil, permitindo consultas, telediagnóstico e telemonitoramento com regras claras de documentação e consentimento.</p>
      <h2>O Que é Permitido</h2>
      <p>Consultas de primeira vez e retorno por vídeo, emissão de atestados e receitas digitais com assinatura eletrônica ICP-Brasil, teleconsultoria entre profissionais e telemonitoramento de pacientes crônicos.</p>
      <h2>Requisitos Técnicos</h2>
      <p>A plataforma deve garantir: sigilo da comunicação (criptografia ponta a ponta), identificação segura do paciente, registro do atendimento no prontuário e consentimento informado digital.</p>
      <h2>Escolhendo a Plataforma</h2>
      <p>Prefira plataformas integradas ao seu PEP, com gravação opcional, sala de espera virtual e integração com agenda. Evite usar plataformas genéricas como WhatsApp ou Zoom sem adequação à LGPD.</p>
      <h2>Como Cobrar pela Teleconsulta</h2>
      <p>Defina valores para teleconsulta particular e verifique a cobertura de cada convênio. Alguns planos já remuneram telemedicina com tabela própria. Documente tudo no prontuário como em uma consulta presencial.</p>
    `,
    category: 'tecnologia-em-saude',
    categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed',
    authorRole: 'Produto & Tecnologia',
    date: '2026-03-06',
    readTime: 8,
    tags: ['telemedicina', 'CFM', 'videoconsulta'],
    coverEmoji: '📹',
  },
  {
    slug: 'ia-na-saude-o-que-muda-para-clinicas',
    title: 'IA na Saúde: O Que Muda na Prática para Clínicas e Consultórios',
    excerpt: 'Como a inteligência artificial está transformando diagnósticos, gestão administrativa e relacionamento com pacientes — e como sua clínica pode se preparar.',
    content: `
      <h2>IA Não é Ficção Científica</h2>
      <p>Ferramentas de inteligência artificial já estão sendo usadas em clínicas brasileiras para análise de imagens, triagem de pacientes, automação de cobranças e previsão de demanda.</p>
      <h2>IA no Apoio ao Diagnóstico</h2>
      <p>Algoritmos treinados em milhões de imagens conseguem identificar padrões em radiografias, eletrocardiogramas e dermatoscopias com precisão equivalente ou superior a especialistas. Eles funcionam como um segundo par de olhos, não como substitutos.</p>
      <h2>IA na Gestão Administrativa</h2>
      <p>Previsão automática de no-shows, sugestão de horários ótimos, chatbots de triagem e classificação de urgência, automação de cobranças e relatórios gerados em segundos.</p>
      <h2>Cuidados Éticos e Regulatórios</h2>
      <p>O CFM ainda discute regulamentação específica para IA. Por enquanto, a responsabilidade pelo diagnóstico continua sendo sempre do médico. A IA é uma ferramenta de apoio, nunca de substituição.</p>
      <h2>Por Onde Começar</h2>
      <p>Comece com automações simples: confirmação automática de consultas, triagem via chatbot no WhatsApp e relatórios financeiros automáticos. Depois evolua para ferramentas de apoio clínico.</p>
    `,
    category: 'tecnologia-em-saude',
    categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed',
    authorRole: 'Inovação & Tecnologia',
    date: '2026-03-03',
    readTime: 7,
    tags: ['IA', 'inteligência artificial', 'diagnóstico'],
    coverEmoji: '🤖',
  },
  {
    slug: 'lgpd-clinicas-guia-pratico',
    title: 'LGPD para Clínicas: Guia Prático de Conformidade em 2026',
    excerpt: 'Tudo o que sua clínica precisa saber sobre proteção de dados de pacientes, consentimento, armazenamento seguro e como evitar multas da ANPD.',
    content: `
      <h2>Por que a LGPD é Crítica para Clínicas</h2>
      <p>Dados de saúde são classificados como dados sensíveis pela LGPD, exigindo cuidados redobrados. Violações podem resultar em multas de até 2% do faturamento anual, limitadas a R$ 50 milhões por infração.</p>
      <h2>Principais Obrigações</h2>
      <p>Toda clínica deve: nomear um DPO, manter registro das atividades de tratamento, obter consentimento explícito dos pacientes e implementar medidas técnicas de segurança.</p>
      <h2>Consentimento no Prontuário</h2>
      <p>O termo de consentimento deve ser claro, específico e documentado. O paciente tem direito de revogar o consentimento a qualquer momento.</p>
      <h2>Checklist de Conformidade</h2>
      <p>Revise: política de privacidade atualizada, contratos com fornecedores (DPA), criptografia no armazenamento de prontuários e treinamento da equipe.</p>
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
    slug: 'experiencia-do-paciente-5-estrategias',
    title: '5 Estratégias para Transformar a Experiência do Paciente na Sua Clínica',
    excerpt: 'Da recepção ao pós-consulta: como criar uma jornada do paciente memorável que gera indicações e fidelização.',
    content: `
      <h2>A Jornada Completa do Paciente</h2>
      <p>A experiência do paciente começa antes mesmo da consulta e se estende ao pós-atendimento. Cada ponto de contato importa.</p>
      <h2>1. Agendamento Simples e Rápido</h2>
      <p>Ofereça agendamento online 24/7. Pacientes modernos não querem ligar para marcar consulta.</p>
      <h2>2. Sala de Espera Humanizada</h2>
      <p>Tempo de espera comunicado, Wi-Fi disponível e equipe treinada para acolher fazem diferença enorme.</p>
      <h2>3. Comunicação Pós-Consulta</h2>
      <p>Envie resumo da consulta e orientações via WhatsApp. Esse gesto gera encantamento e reduz dúvidas.</p>
      <h2>4. Pesquisa de Satisfação</h2>
      <p>Automatize o envio de NPS 24h após a consulta. Pacientes promotores podem ser convidados a deixar avaliações no Google.</p>
      <h2>5. Programa de Fidelidade</h2>
      <p>Reconheça pacientes frequentes com benefícios. Retenção é sempre mais barata que captação.</p>
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
      <p>A Resolução CFM 2.336/2023 atualizou as regras de publicidade médica para o ambiente digital.</p>
      <h2>O Que é Permitido</h2>
      <p>Conteúdo educativo, informações sobre a especialidade, currículo profissional e depoimentos com autorização.</p>
      <h2>O Que é Proibido</h2>
      <p>Antes e depois de procedimentos, promessas de cura, preços como chamariz e autopromoção sensacionalista.</p>
      <h2>Estratégia de Conteúdo Ético</h2>
      <p>Foque em conteúdo educativo que gera autoridade de forma orgânica e sustentável.</p>
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
      <p>Antes de contratar, defina claramente os valores da clínica. Uma equipe alinhada com a cultura performa melhor e tem menor rotatividade.</p>
      <h2>Contratação por Competências Comportamentais</h2>
      <p>Para cargos de atendimento, priorize empatia, comunicação e resiliência.</p>
      <h2>Onboarding Estruturado</h2>
      <p>Os primeiros 30 dias definem o engajamento de longo prazo. Tenha um checklist de integração e metas claras.</p>
      <h2>Feedback Contínuo</h2>
      <p>Implemente check-ins semanais e feedback imediato. Equipes com cultura de feedback têm 14% mais produtividade.</p>
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
