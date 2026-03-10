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
      <p>Organize seu fluxo em três grandes grupos: <strong>Entradas</strong> (consultas particulares, recebimento de convênios, procedimentos), <strong>Saídas Fixas</strong> (aluguel, folha, sistemas, contratos) e <strong>Saídas Variáveis</strong> (insumos, manução, marketing).</p>
      <h2>Ciclo Financeiro da Clínica</h2>
      <p>O principal desafio é o descasamento entre prestação de serviço e recebimento. Consultas particulares recebem no ato. Convênios pagam em 30-90 dias. Esse intervalo precisa de capital de giro.</p>
      <h2>Reserva de Emergência</h2>
      <p>Mantenha uma reserva equivalente a 3 meses de custos fixos em conta separada. Isso protege a clínica de sazonalidades, atrasos de convênios e imprevistos como equipamentos que quebram.</p>
      <h2>Ferramentas Práticas</h2>
      <p>Use planilhas ou, preferencialmente, um sistema de gestão integrado que projete o fluxo de caixa automaticamente com base nas consultas agendadas e histórico de recebimentos.</p>
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
    title: 'Como Precificar Procedimentos Médicos: Método Completo para Não Trabalhar no Prejuízo',
    excerpt: 'Aprenda a calcular o preço justo dos seus procedimentos considerando custos diretos, custos indiretos, pró-labore e margem de lucro desejada.',
    content: `
      <h2>O Erro Mais Comum na Precificação</h2>
      <p>A maioria dos médicos precifica seus serviços baseando-se no que o concorrente cobra ou no valor de tabela dos convênios — sem nunca calcular se esse valor cobre todos os seus custos. Resultado: trabalho no prejuízo sem perceber.</p>
      <h2>Componentes do Preço</h2>
      <p><strong>1. Custo Direto:</strong> material usado no procedimento, luvas, medicamentos, etc. <strong>2. Custo Indireto:</strong> rateio proporcional de aluguel, energia, equipe, sistemas. <strong>3. Pró-labore:</strong> a remuneração do médico pelo tempo gasto. <strong>4. Margem de Lucro:</strong> o retorno do investimento na clínica.</p>
      <h2>Fórmula de Precificação</h2>
      <p>Preço Mínimo = (Custo Direto + Custo Indireto rateado + Pró-labore por procedimento) ÷ (1 - Margem desejada). Esse é o piso — abaixo disso você está pagando para trabalhar.</p>
      <h2>Reajuste Anual Obrigatório</h2>
      <p>O IPCA-Saúde historicamente supera o IPCA geral. Reajuste sua tabela anualmente, no mínimo pelo IPCA-Saúde. Informe os pacientes com antecedência e justifique com transparência.</p>
      <h2>Tabela Particular vs. Convênio</h2>
      <p>Compare o valor recebido por procedimento no particular versus o convênio. Se o convênio paga abaixo do custo, considere renegociar o contrato ou descredenciar. Não aceite valores que inviabilizem a sustentabilidade da clínica.</p>
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
    title: 'Glosas de Convênios: Causas, Impacto Financeiro e Como Reduzir para Menos de 3%',
    excerpt: 'Entenda os principais motivos de glosa em planos de saúde, como estruturar o processo de faturamento e recursar glosas de forma eficaz.',
    content: `
      <h2>O Que é Glosa e Quanto Ela Custa</h2>
      <p>Glosa é a negativa de pagamento do plano de saúde por um procedimento faturado. A média de glosa em clínicas brasileiras gira em torno de 8-12% do faturamento com convênios — um valor que pode representar dezenas de milhares de reais por ano.</p>
      <h2>Principais Causas de Glosa</h2>
      <p><strong>Erros de codificação:</strong> códigos TUSS errados ou desatualizados. <strong>Documentação incompleta:</strong> relatórios, laudos ou autorizações ausentes. <strong>Prazo:</strong> faturamento enviado fora do prazo contratual. <strong>Elegibilidade:</strong> paciente sem cobertura para o procedimento realizado.</p>
      <h2>Processo de Recurso de Glosa</h2>
      <p>Toda glosa pode ser recorrida. Documente cada atendimento com rigor, guarde todos os comprovantes de autorização e protocole recursos dentro do prazo contratual. Clínicas com processo estruturado recuperam até 60% das glosas recorridas.</p>
      <h2>Como Prevenir Glosas</h2>
      <p>Invista em: treinamento constante da equipe de faturamento, sistema de gestão com TISS integrado, auditoria interna antes do envio das guias e atualização periódica das tabelas de cobertura de cada convênio.</p>
      <h2>Meta: Abaixo de 3%</h2>
      <p>Clínicas bem geridas mantêm taxa de glosa abaixo de 3%. Para chegar lá, estabeleça um painel de acompanhamento mensal por convênio e atue preventivamente nos códigos mais glosados.</p>
    `,
    category: 'gestao-financeira',
    categoryName: 'Gestão Financeira',
    author: 'Equipe NexusMed',
    authorRole: 'Faturamento & Convênios',
    date: '2026-02-28',
    readTime: 7,
    tags: ['glosa', 'convênios', 'faturamento', 'TISS'],
    coverEmoji: '📝',
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
