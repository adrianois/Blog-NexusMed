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
    content: `
<h2>O Problema das Faltas na Clínica</h2>
<p>As faltas não comunicadas — os chamados <strong>no-shows</strong> — representam, em média, <strong>18% das consultas agendadas</strong> em clínicas brasileiras. Para uma clínica com 20 consultas por dia e ticket médio de R$ 300, isso equivale a <strong>R$ 32.400 perdidos por mês</strong>. E o pior: o horário não pode ser reaproveitado.</p>
<p>Além do prejuízo financeiro direto, as faltas desorganizam a agenda, desmotivam a equipe e reduzem a qualidade do atendimento dos pacientes que chegam. Resolver esse problema é uma das ações de maior retorno financeiro em qualquer clínica.</p>

<h2>1. Confirmação Automática Multicanal</h2>
<p>A estratégia mais eficaz é o <strong>envio de lembretes automáticos</strong> em múltiplos momentos antes da consulta:</p>
<ul>
  <li><strong>48 horas antes:</strong> Lembrete informativo via WhatsApp ou e-mail com data, horário e endereço.</li>
  <li><strong>24 horas antes:</strong> Mensagem pedindo confirmação ativa do paciente — "Confirme com SIM ou reagende com NÃO".</li>
  <li><strong>2 horas antes:</strong> Lembrete final para quem não respondeu.</li>
</ul>
<p>Clínicas que implementam esse fluxo reduzem faltas em <strong>40% a 55%</strong>. Ferramentas como o NexusMed automatizam todo esse processo sem trabalho manual.</p>

<h2>2. Lista de Espera Inteligente</h2>
<p>Quando um paciente cancela, o horário precisa ser preenchido rapidamente. A <strong>lista de espera digital</strong> funciona assim:</p>
<ul>
  <li>Pacientes entram na lista indicando preferências de horário.</li>
  <li>Ao surgir um cancela mento, o sistema notifica automaticamente os primeiros da lista.</li>
  <li>O primeiro a confirmar ocupa o horário.</li>
</ul>
<p>Com uma lista de espera ativa, é possível reocupar <strong>70% dos horários cancelados</strong> em menos de 2 horas.</p>

<h2>3. Política de Cancelamento Clara</h2>
<p>Muitas clínicas não têm política de cancelamento — e isso incentiva o no-show. Defina e comunique:</p>
<ul>
  <li>Prazo mínimo para cancelamento sem penalidade (ex: 24h).</li>
  <li>Para procedimentos com preparo ou anestesia: 48h.</li>
  <li>Cobrança simbólica de taxa de no-show (R$ 50–100) para pacientes particulares recorrentes.</li>
</ul>
<p>Importante: a comunicação da política deve ser feita no momento do agendamento, não só no dia da consulta.</p>

<h2>4. Pré-pagamento para Procedimentos de Alto Valor</h2>
<p>Para procedimentos com custo elevado (cirurgias, exames de imagem, consultas especializadas longas), o <strong>pré-pagamento parcial</strong> reduz o no-show praticamente a zero. O paciente que pagou tem muito mais compromisso de comparecer.</p>
<p>Adote pagamento via link Pix ou cartão no momento do agendamento online, com política clara de reembolso em caso de cancelamento com antecedência.</p>

<h2>5. Análise do Perfil de Faltosos</h2>
<p>Use os dados da clínica para identificar padrões:</p>
<ul>
  <li>Quais dias da semana têm mais faltas? (Segunda e sexta lideram.)</li>
  <li>Qual canal de agendamento tem mais no-show? (Online tende a ser maior.)</li>
  <li>Existe perfil demográfico associado?</li>
</ul>
<p>Com essa análise, você pode criar ações direcionadas: mais lembretes para agendamentos online, horários de alta falta mais curtos, etc.</p>

<h2>Resultado Esperado</h2>
<p>Combinando confirmação automática + lista de espera + política clara, clínicas que implementam esse sistema de forma completa reduzem o no-show em <strong>50% a 60% em 90 dias</strong>, recuperando receita significativa sem precisar captar novos pacientes.</p>
<blockquote>💡 "A consulta não realizada não é só receita perdida — é um espaço que outro paciente precisando poderia ter ocupado."</blockquote>
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
    excerpt: 'Guia completo para estruturar o fluxo de caixa da sua clínica, antecipar crise de liquidez e garantir capital de giro.',
    content: `
<h2>Por que o Fluxo de Caixa é Vital</h2>
<p>Muitas clínicas lucrativas fecham as portas por falta de liquidez. O fenômeno é chamado de <strong>lucro no papel, caixa no negativo</strong>: a clínica fatura bem, mas o dinheiro não está disponível quando precisa pagar fornecedores, salários ou encargos.</p>
<p>O fluxo de caixa é o instrumento que evita essa armadilha. Ele mapeia <strong>quando</strong> o dinheiro entra, <strong>quando</strong> sai e qual é o saldo disponível em cada momento — permitindo antecipar problemas e tomar decisões com segurança.</p>

<h2>Estrutura Básica do Fluxo de Caixa</h2>
<p>O fluxo deve ser organizado em <strong>entradas</strong> e <strong>saídas</strong>:</p>
<ul>
  <li><strong>Entradas:</strong> Consultas particulares, repasse de convênios, procedimentos, exames, telemedicina.</li>
  <li><strong>Saídas fixas:</strong> Aluguel, salários, pró-labore, contabilidade, software, seguros.</li>
  <li><strong>Saídas variáveis:</strong> Materiais, exames terceirizados, manutenção, marketing.</li>
  <li><strong>Impostos:</strong> ISSQN, IRPJ, CSLL, contribuições do Simples Nacional ou Lucro Presumido.</li>
</ul>
<p>Use uma planilha ou sistema financeiro com visão <strong>diária, semanal e mensal</strong>. Nunca gerencie o caixa apenas na visão mensal — crises surgem em dias específicos.</p>

<h2>Fluxo Realizado vs. Projetado</h2>
<p>O maior valor do fluxo de caixa não está em registrar o passado, mas em <strong>projetar o futuro</strong>. Mantenha sempre um horizonte de <strong>90 dias à frente</strong>:</p>
<ul>
  <li>Registre contratos de convênios com datas de repasse previstas.</li>
  <li>Lance compromissos futuros (vencimentos, parcelas, 13º salário).</li>
  <li>Simule cenários: "E se o convênio atrasar 15 dias?"</li>
</ul>
<p>Com a projeção em mãos, você identifica <strong>pontos de tensão</strong> antes que virem crise.</p>

<h2>Capital de Giro: Quanto sua Clínica Precisa?</h2>
<p>O capital de giro é o colchão financeiro que sustenta a operação entre o momento em que você presta o serviço e o momento em que recebe. Para clínicas com convênios, esse prazo pode ser de <strong>30 a 60 dias</strong>.</p>
<p>A recomendação é manter uma reserva equivalente a <strong>2 a 3 meses de custos fixos</strong>. Para uma clínica com R$ 30.000/mês em custos fixos, isso significa R$ 60.000 a R$ 90.000 em reserva.</p>

<h2>Gestão de Inadimplência e Atrasos de Convênios</h2>
<p>Os dois maiores vilões do fluxo de caixa em clínicas são:</p>
<ul>
  <li><strong>Inadimplência de particulares:</strong> Implante cobrança automática, link de pagamento e régua de comunicação.</li>
  <li><strong>Atraso de convênios:</strong> Monitore os prazos contratuais da ANS (30 dias para consultas, 45 para procedimentos) e conteste sistematicamente atrasos.</li>
</ul>

<h2>Indicadores para Monitorar Todo Mês</h2>
<ul>
  <li><strong>Saldo médio diário:</strong> O caixa nunca deve zerar.</li>
  <li><strong>PMR (Prazo Médio de Recebimento):</strong> Ideal abaixo de 30 dias.</li>
  <li><strong>Cobertura de caixa:</strong> Quantos dias de operação o saldo atual cobre.</li>
  <li><strong>Desvio entre projetado e realizado:</strong> Acima de 15% indica problema nos processos.</li>
</ul>
<blockquote>💡 "Um negócio pode sobreviver sem lucro por um tempo. Mas sem caixa, fecha em dias."</blockquote>
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
    excerpt: 'Calcule o preço justo dos seus procedimentos considerando custos diretos, indiretos, pró-labore e margem.',
    content: `
<h2>O Erro Mais Comum na Precificação</h2>
<p>A maioria dos médicos precifica baseando-se no que o concorrente cobra — sem calcular se aquele preço cobre sequer os próprios custos. O resultado: <strong>trabalhar muito e ganhar pouco</strong>, ou pior, trabalhar no prejuízo sem perceber.</p>
<p>A precificação correta começa pelo custo e termina no mercado. Nunca o contrário.</p>

<h2>Componentes do Custo de um Procedimento</h2>
<p>Para cada procedimento, você precisa mapear:</p>
<ul>
  <li><strong>Custo direto:</strong> Materiais, insumos, medicamentos, luvas, descartáveis usados especificamente naquele procedimento.</li>
  <li><strong>Custo de infraestrutura (rateio):</strong> Parcela do aluguel, energia, limpeza, manutenção de equipamentos atribuída àquele procedimento.</li>
  <li><strong>Custo de pessoal:</strong> Tempo do médico (pró-labore por hora) + técnicos + enfermagem envolvidos.</li>
  <li><strong>Custo administrativo:</strong> Parcela proporcional de contabilidade, sistemas, marketing, recepção.</li>
</ul>

<h2>A Fórmula Base</h2>
<p>O preço mínimo de um procedimento é calculado assim:</p>
<ul>
  <li><strong>Custo total do procedimento</strong> = Direto + Rateio de infraestrutura + Pessoal + Administrativo</li>
  <li><strong>Preço mínimo</strong> = Custo total ÷ (1 - % Impostos - % Margem desejada)</li>
</ul>
<p>Exemplo: custo total de R$ 150, impostos de 15%, margem desejada de 30%:<br/>
Preço mínimo = R$ 150 ÷ (1 - 0,15 - 0,30) = R$ 150 ÷ 0,55 = <strong>R$ 272,73</strong></p>

<h2>Cálculo do Pró-Labore por Hora</h2>
<p>Muitos médicos esquecem de incluir o próprio trabalho no custo. Defina quanto você quer receber por mês (ex: R$ 20.000) e divida pelo número de horas clínicas disponíveis (ex: 160h/mês):</p>
<p><strong>Custo/hora = R$ 20.000 ÷ 160 = R$ 125/hora</strong></p>
<p>Uma consulta de 30 minutos custa R$ 62,50 só em pró-labore. Isso não inclui nenhum custo fixo.</p>

<h2>Tabela de Referência vs. Mercado</h2>
<p>Após calcular o preço mínimo, compare com o mercado local:</p>
<ul>
  <li>Se o seu preço mínimo está <strong>abaixo do mercado</strong>: você tem margem — posicione com qualidade.</li>
  <li>Se está <strong>acima do mercado</strong>: revise custos, taxa de ocupação ou reposicione o serviço.</li>
  <li>Para <strong>convênios</strong>: calcule se o valor credenciado cobre o custo mínimo. Se não cobrir, avaliar a descredenciamento ou negociação.</li>
</ul>

<h2>Reajuste Anual Obrigatório</h2>
<p>Custos sobem todo ano — IPCA-Saúde, salários, aluguel. Revise a precificação <strong>anualmente</strong>, no mínimo. Uma tabela de 3 anos desatualizada pode transformar um procedimento lucrativo em prejuízo.</p>
<blockquote>💡 "Preço errado não é apenas problema financeiro — é um risco para a sustentabilidade da clínica e para a qualidade do atendimento."</blockquote>
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
    excerpt: 'Causas, impacto financeiro e como estruturar o faturamento para minimizar glosas e recuperar receita perdida.',
    content: `
<h2>O Que é Glosa e Qual o Impacto</h2>
<p>Glosa é a <strong>negativa de pagamento</strong> do plano de saúde por uma cobrança considerada incorreta, incompleta ou não autorizada. A média no Brasil é de <strong>8% a 12% do faturamento com convênios</strong> — para uma clínica que fatura R$ 100.000/mês em convênios, isso representa de R$ 8.000 a R$ 12.000 perdidos mensalmente.</p>
<p>O pior: a maioria das glosas é <strong>evitável</strong>. Estudos setoriais apontam que 60% a 70% das glosas têm origem em erros de preenchimento, falta de documentação ou falhas de processo — não em divergências contratuais legítimas.</p>

<h2>Principais Causas de Glosa</h2>
<ul>
  <li><strong>Código TUSS incorreto:</strong> Usar o código errado para o procedimento realizado é a causa número 1.</li>
  <li><strong>Falta de autorização prévia:</strong> Procedimentos que exigem autorização e foram realizados sem ela.</li>
  <li><strong>Guia fora do prazo:</strong> Submissão após o prazo contratual de faturamento.</li>
  <li><strong>Documentação incompleta:</strong> Falta de laudo, relatório médico ou resultado de exame solicitado.</li>
  <li><strong>Divergência de beneficiário:</strong> Dados incorretos do paciente (nome, carteirinha, CPF).</li>
  <li><strong>Serviço não coberto:</strong> Procedimento não previsto no contrato do beneficiário.</li>
</ul>

<h2>Como Estruturar o Processo para Reduzir Glosas</h2>
<p><strong>1. Auditoria prévia (auditoria interna):</strong> Antes de enviar as guias, faça uma revisão interna. Cheque codes TUSS, documentação e datas. Uma hora de revisão pode evitar semanas de recurso.</p>
<p><strong>2. Treinamento contínuo da equipe de faturamento:</strong> A tabela TUSS é atualizada regularmente. A equipe precisa de capacitação periódica — pelo menos a cada 6 meses.</p>
<p><strong>3. Checklist por convênio:</strong> Cada operadora tem exigências específicas. Crie um checklist personalizado para os 5 maiores convênios da clínica.</p>
<p><strong>4. Acompanhamento de prazos:</strong> Mapeie os prazos de submissão de cada convênio e crie alertas com antecedência de 5 dias úteis.</p>

<h2>Recurso de Glosa: Como Contestar</h2>
<p>Toda glosa pode ser contestada dentro do prazo estabelecido no contrato (geralmente 30 a 60 dias). O processo:</p>
<ul>
  <li>Identifique o motivo exato da glosa no extrato de pagamento.</li>
  <li>Reúna a documentação comprobatória (prontuário, laudo, autorização).</li>
  <li>Submeta o recurso com justificativa técnica, referenciando a Resolução ANS pertinente.</li>
  <li>Registre o protocolo e acompanhe o prazo de resposta da operadora.</li>
</ul>
<p>Clínicas com processo de recurso estruturado recuperam <strong>40% a 60% das glosas contestadas</strong>.</p>

<h2>Indicadores para Monitorar</h2>
<ul>
  <li><strong>Taxa de glosa por convênio:</strong> Identifica onde focar esforços.</li>
  <li><strong>Taxa de recurso aceito:</strong> Avalia a qualidade do processo de contestação.</li>
  <li><strong>Tempo médio de resolução:</strong> Quanto tempo leva do envio da guia ao recebimento efetivo.</li>
</ul>
<blockquote>💡 "Glosa não é inevitável — é um sintoma de processo. Melhore o processo e a glosa cai."</blockquote>
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
    excerpt: 'Critérios para avaliar um PEP: usabilidade, integração com TISS, suporte e segurança.',
    content: `<h2>Por que o PEP Certo Faz Diferença</h2><p>O PEP é o coração da operação clínica. Um bom sistema aumenta produtividade e segurança.</p><h2>Critérios Essenciais</h2><ul><li>Integração TISS para faturamento de convênios</li><li>Conformidade com CFM e LGPD</li><li>Backup automático na nuvem</li><li>Suporte responsivo</li></ul>`,
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
    excerpt: 'Da regulamentação CFM à escolha da plataforma: tudo que sua clínica precisa saber.',
    content: `<h2>Telemedicina é Legal no Brasil?</h2><p>Sim. A Resolução CFM 2.314/22 regulamentou definitivamente a telemedicina.</p><h2>Como Implementar</h2><ul><li>Escolha plataforma com criptografia ponta a ponta</li><li>Treine a equipe para o fluxo digital</li><li>Informe e consinta o paciente</li></ul>`,
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
    excerpt: 'Como a inteligência artificial está transformando diagnósticos, gestão e relacionamento com pacientes.',
    content: `<h2>IA Não é Ficção Científica</h2><p>Ferramentas de IA já estão em clínicas brasileiras para análise de imagens e triagem.</p><h2>Aplicações Práticas</h2><ul><li>Triagem de sintomas por chatbot</li><li>Análise de imagens diagnósticas</li><li>Automação de agendamento e follow-up</li></ul>`,
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
    slug: 'seguranca-de-dados-clinica',
    title: 'Segurança de Dados na Clínica: Guia Prático para Proteger Prontuários',
    excerpt: 'Como proteger os dados dos seus pacientes contra vazamentos e violações da LGPD.',
    content: `<h2>O Cenário de Ameaças</h2><p>O setor de saúde foi o segundo mais atacado no Brasil em 2025.</p><h2>Medidas Essenciais</h2><ul><li>Backup criptografado diário</li><li>Autenticação em dois fatores para todos os sistemas</li><li>Treinamento da equipe sobre phishing</li><li>Política de acesso por cargo</li></ul>`,
    category: 'tecnologia-em-saude',
    categoryName: 'Tecnologia em Saúde',
    author: 'Equipe NexusMed',
    authorRole: 'Segurança & Compliance',
    date: '2026-02-22',
    readTime: 8,
    tags: ['segurança', 'LGPD', 'cibersegurança'],
    coverEmoji: '🔒',
  },
  {
    slug: 'lgpd-clinicas-guia-pratico',
    title: 'LGPD para Clínicas: Guia Prático de Conformidade em 2026',
    excerpt: 'Proteção de dados de pacientes, consentimento e como evitar multas da ANPD.',
    content: `<h2>Por que a LGPD é Crítica</h2><p>Dados de saúde são sensíveis pela LGPD. Multas chegam a R$ 50 milhões por infração.</p><h2>O Que Fazer</h2><ul><li>Mapear todos os dados de pacientes coletados</li><li>Criar termos de consentimento claros</li><li>Nomear um DPO (Encarregado de Dados)</li><li>Ter política de resposta a incidentes</li></ul>`,
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
    slug: 'cfm-resolucoes-2026',
    title: 'CFM em 2026: As Resoluções que Mais Impactam sua Clínica',
    excerpt: 'Panorama das principais resoluções do CFM vigentes em 2026.',
    content: `<h2>Por Que Acompanhar o CFM</h2><p>O CFM publicou mais de 60 resoluções desde 2020. Ignorá-las pode gerar sanções éticas e processos.</p><h2>Principais Resoluções de 2026</h2><ul><li>Res. 2.314/22 — Telemedicina</li><li>Res. 2.336/23 — Publicidade médica digital</li><li>Res. 2.299/21 — Prontuário eletrônico</li></ul>`,
    category: 'regulamentacao',
    categoryName: 'Regulamentação',
    author: 'Equipe NexusMed',
    authorRole: 'Jurídico & Compliance',
    date: '2026-03-09',
    readTime: 9,
    tags: ['CFM', 'resoluções', 'ética médica'],
    coverEmoji: '📜',
  },
  {
    slug: 'anvisa-clinicas-conformidade',
    title: 'ANVISA para Clínicas: Tudo Sobre Alvará Sanitário e Conformidade',
    excerpt: 'Como obter e manter o alvará sanitário e exigências de estrutura física.',
    content: `<h2>Alvará Sanitário é Obrigatório</h2><p>Toda clínica precisa de alvará sanitário emitido pela Vigilância Sanitária Municipal.</p><h2>Como Obter</h2><ul><li>Projeto arquitetônico aprovado</li><li>Laudo de vistoria técnica</li><li>Registro de responsável técnico no CRM</li><li>Conformidade com RDC 50/2002</li></ul>`,
    category: 'regulamentacao',
    categoryName: 'Regulamentação',
    author: 'Equipe NexusMed',
    authorRole: 'Jurídico & Compliance',
    date: '2026-02-18',
    readTime: 7,
    tags: ['ANVISA', 'alvará', 'vigilância sanitária'],
    coverEmoji: '🧪',
  },
  {
    slug: 'ans-convenios-direitos-clinicas',
    title: 'ANS e Convênios: Direitos e Obrigações das Clínicas Credenciadas',
    excerpt: 'O que a ANS garante para clínicas credenciadas: prazos de pagamento e regras de glosa.',
    content: `<h2>O Papel da ANS</h2><p>A ANS regula a relação entre operadoras e prestadores. Conhecer seus direitos evita prejuízos.</p><h2>Prazos Garantidos por Lei</h2><ul><li>Consultas: pagamento em até 30 dias</li><li>Procedimentos: até 45 dias</li><li>Glosa: prazo de 30 dias para recurso</li></ul>`,
    category: 'regulamentacao',
    categoryName: 'Regulamentação',
    author: 'Equipe NexusMed',
    authorRole: 'Faturamento & Convênios',
    date: '2026-02-10',
    readTime: 7,
    tags: ['ANS', 'convênios', 'credenciamento'],
    coverEmoji: '💳',
  },
  {
    slug: 'experiencia-do-paciente-5-estrategias',
    title: '5 Estratégias para Transformar a Experiência do Paciente na Sua Clínica',
    excerpt: 'Da recepção ao pós-consulta: como criar uma jornada memorável que gera indicações e fidelização.',
    content: `<h2>A Jornada Completa do Paciente</h2><p>A experiência começa antes da consulta e vai até o pós-atendimento.</p><h2>As 5 Estratégias</h2><ul><li>Reduzir tempo de espera com agenda inteligente</li><li>Sala de espera acolhedora e sinalização clara</li><li>Comunicação pós-consulta automatizada</li><li>Pesquisa NPS mensal</li><li>Programa de indicações com benefícios</li></ul>`,
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
    slug: 'nps-clinicas-como-usar',
    title: 'NPS para Clínicas: Como Medir e Usar a Satisfação do Paciente a seu Favor',
    excerpt: 'Como aplicar NPS na clínica, interpretar resultados e transformar pacientes satisfeitos em promotores.',
    content: `<h2>O Que é NPS</h2><p>"Em uma escala de 0 a 10, o quanto você indicaria nossa clínica?" Simples, mas poderoso.</p><h2>Como Calcular</h2><ul><li>Promotores (9-10) menos Detratores (0-6) = NPS</li><li>NPS acima de 50 é excelente para saúde</li><li>Envie 24h após a consulta via WhatsApp</li></ul>`,
    category: 'experiencia-do-paciente',
    categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed',
    authorRole: 'Sucesso do Cliente',
    date: '2026-03-02',
    readTime: 6,
    tags: ['NPS', 'satisfação', 'fidelização'],
    coverEmoji: '⭐',
  },
  {
    slug: 'comunicacao-medico-paciente',
    title: 'Comunicação Médico-Paciente: Como Explicar Diagnósticos com Clareza',
    excerpt: 'Técnicas para explicar diagnósticos de forma simples e aumentar a adesão ao tratamento.',
    content: `<h2>Por Que a Comunicação Importa</h2><p>Pacientes que entendem seu diagnóstico aderem 3x mais ao tratamento.</p><h2>Técnicas Práticas</h2><ul><li>Use analogias do cotidiano</li><li>Confirme o entendimento com perguntas abertas</li><li>Entregue resumo escrito ou por áudio</li><li>Evite jargões médicos</li></ul>`,
    category: 'experiencia-do-paciente',
    categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed',
    authorRole: 'Educação em Saúde',
    date: '2026-02-14',
    readTime: 7,
    tags: ['comunicação', 'paciente', 'adesão'],
    coverEmoji: '💬',
  },
  {
    slug: 'google-meu-negocio-clinicas',
    title: 'Google Meu Negócio para Clínicas: Guia Completo para Aparecer nas Buscas',
    excerpt: 'Como otimizar o perfil do Google Meu Negócio para atrair mais pacientes e melhorar avaliações.',
    content: `<h2>Por Que é Essencial</h2><p>77% dos pacientes pesquisam no Google antes de escolher uma clínica.</p><h2>Como Otimizar</h2><ul><li>Fotos reais da clínica e da equipe</li><li>Horário de funcionamento atualizado</li><li>Responder todas as avaliações em até 48h</li><li>Publicar posts semanais com conteúdo educativo</li></ul>`,
    category: 'experiencia-do-paciente',
    categoryName: 'Experiência do Paciente',
    author: 'Equipe NexusMed',
    authorRole: 'Marketing Digital',
    date: '2026-01-30',
    readTime: 8,
    tags: ['Google', 'avaliações', 'captação'],
    coverEmoji: '📍',
  },
  {
    slug: 'marketing-medico-instagram',
    title: 'Marketing Médico no Instagram: O Que Pode e O Que Não Pode em 2026',
    excerpt: 'Guia das resoluções do CFM sobre publicidade médica e como construir presença digital ética.',
    content: `<h2>O CFM e as Redes Sociais</h2><p>A Resolução CFM 2.336/2023 atualizou as regras de publicidade médica para o ambiente digital.</p><h2>O Que é Permitido</h2><ul><li>Conteúdo educativo sobre saúde</li><li>Apresentação de especialidade e formação</li><li>Depoimentos sem identificação do paciente</li></ul><h2>O Que é Proibido</h2><ul><li>Antes e depois com identificação</li><li>Promessas de resultados garantidos</li><li>Promoções e descontos explícitos</li></ul>`,
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
    slug: 'seo-local-clinicas-medicas',
    title: 'SEO Local para Clínicas: Como Aparecer no Topo das Buscas do Google',
    excerpt: 'Estratégias de SEO local para clínicas médicas: Google Meu Negócio, palavras-chave e como superar a concorrência.',
    content: `<h2>O Que é SEO Local</h2><p>SEO Local é o conjunto de técnicas para aparecer quando alguém pesquisa "cardiologista em São Paulo".</p><h2>Pilares do SEO Local</h2><ul><li>Google Meu Negócio otimizado e ativo</li><li>Consistência de NAP (nome, endereço, telefone) em todos os diretórios</li><li>Avaliações positivas e respondidas</li><li>Páginas de serviço com palavras-chave locais</li></ul>`,
    category: 'marketing-medico',
    categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed',
    authorRole: 'Marketing Digital',
    date: '2026-03-10',
    readTime: 8,
    tags: ['SEO', 'Google', 'busca local'],
    coverEmoji: '🔍',
  },
  {
    slug: 'conteudo-educativo-medico-como-criar',
    title: 'Como Criar Conteúdo Educativo Médico que Gera Autoridade e Novos Pacientes',
    excerpt: 'Estratégia completa de criação de conteúdo médico ético, dentro das normas do CFM e que realmente converte.',
    content: `<h2>Por Que Conteúdo Educativo Funciona</h2><p>Conteúdo que educa gera confiança, e confiança gera agendamento.</p><h2>Formatos que Funcionam</h2><ul><li>Carrosséis no Instagram com dicas práticas</li><li>Reels explicando procedimentos de forma simples</li><li>Artigos de blog para SEO de longo prazo</li><li>Newsletter mensal para pacientes cadastrados</li></ul>`,
    category: 'marketing-medico',
    categoryName: 'Marketing Médico',
    author: 'Equipe NexusMed',
    authorRole: 'Marketing de Conteúdo',
    date: '2026-02-05',
    readTime: 7,
    tags: ['conteúdo', 'Instagram', 'autoridade'],
    coverEmoji: '✍️',
  },
  {
    slug: 'gestao-de-equipe-clinica',
    title: 'Como Montar e Liderar uma Equipe de Alta Performance na Clínica',
    excerpt: 'Da contratação ao treinamento: estratégias para construir um time engajado, produtivo e alinhado com a cultura.',
    content: `<h2>Cultura Antes de Processos</h2><p>Antes de contratar, defina claramente os valores da clínica. Uma equipe alinhada com a cultura performa melhor e tem menor rotatividade.</p><h2>Contratação por Competências Comportamentais</h2><p>Para cargos de atendimento, priorize empatia, comunicação e resiliência.</p><h2>Onboarding Estruturado</h2><p>Os primeiros 30 dias definem o engajamento de longo prazo.</p><h2>Feedback Contínuo</h2><p>Implemente check-ins semanais e feedback imediato. Equipes com cultura de feedback têm 14% mais produtividade.</p>`,
    category: 'gestao-de-equipes',
    categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed',
    authorRole: 'RH & Cultura',
    date: '2026-02-15',
    readTime: 7,
    tags: ['equipe', 'liderança', 'RH'],
    coverEmoji: '👥',
  },
  {
    slug: 'retencao-de-talentos-clinica',
    title: 'Retenção de Talentos na Clínica: Por Que Seus Melhores Colaboradores Saem',
    excerpt: 'As principais causas de rotatividade em clínicas médicas e como criar um ambiente onde talentos querem ficar e crescer.',
    content: `<h2>O Custo Real da Rotatividade</h2><p>Substituir um colaborador custa em média 150% do seu salário anual quando somados recrutamento, treinamento e perda de produtividade.</p><h2>Por Que as Pessoas Saem</h2><p>Pesquisas mostram que 70% das demissões voluntárias são causadas pela relação com o líder direto — não pelo salário.</p><h2>Entrevista de Permanência</h2><p>Não espere a demissão para descobrir o que o colaborador precisa.</p><h2>Criando Trilha de Carreira</h2><p>Defina claramente os critérios para progressão: tempo, competências, resultados.</p>`,
    category: 'gestao-de-equipes',
    categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed',
    authorRole: 'RH & Cultura',
    date: '2026-03-05',
    readTime: 8,
    tags: ['retenção', 'rotatividade', 'talentos'],
    coverEmoji: '🌱',
  },
  {
    slug: 'recrutamento-seletivo-clinica',
    title: 'Recrutamento e Seleção para Clínicas: Como Contratar Certo na Primeira Vez',
    excerpt: 'Processo completo de recrutamento para clínicas médicas: onde buscar candidatos, como entrevistar e evitar erros que custam caro.',
    content: `<h2>O Erro Mais Caro na Gestão</h2><p>Contratar a pessoa errada custa até 150% do salário anual.</p><h2>Onde Encontrar Bons Candidatos</h2><p>Indicações da própria equipe geram os melhores resultados (55% de retenção superior).</p><h2>Entrevista Comportamental (STAR)</h2><p>Use perguntas baseadas em situações reais: comportamento passado prediz comportamento futuro.</p><h2>Teste Prático</h2><p>Antes de contratar, simule uma situação real do cargo. Isso elimina surpresas no primeiro mês.</p>`,
    category: 'gestao-de-equipes',
    categoryName: 'Gestão de Equipes',
    author: 'Equipe NexusMed',
    authorRole: 'RH & Cultura',
    date: '2026-01-25',
    readTime: 7,
    tags: ['recrutamento', 'seleção', 'contratação'],
    coverEmoji: '🔍',
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
