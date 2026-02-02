export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export type NewsItem = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: ContentBlock[];
  author: string;
  date: string;
  coverImage: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  trendingScore: number;
};

const baseContent: ContentBlock[] = [
  {
    type: "paragraph",
    text: "A adoção de IA nas empresas está acelerando com foco em eficiência, confiabilidade e transparência. Times de produto e pesquisa estão redesenhando fluxos inteiros, criando experiências mais inteligentes sem comprometer a confiança do usuário.",
  },
  {
    type: "heading",
    text: "O que mudou no último trimestre",
  },
  {
    type: "paragraph",
    text: "Modelos menores ganharam espaço em dispositivos locais, enquanto sistemas mais robustos reforçaram padrões de segurança e governança. O debate agora é menos sobre o tamanho do modelo e mais sobre o desenho do sistema completo.",
  },
  {
    type: "list",
    items: [
      "Arquiteturas híbridas com inferência local e em nuvem",
      "Ferramentas de avaliação contínua em produção",
      "Camadas de proteção para dados sensíveis",
    ],
  },
  {
    type: "quote",
    text: "As empresas que vencem essa corrida são as que tratam IA como plataforma, não como feature isolada.",
    cite: "Liderança de Produto, AI Summit",
  },
  {
    type: "paragraph",
    text: "O próximo passo é ampliar a maturidade operacional: observabilidade, métricas de qualidade e um ciclo de melhoria claro para manter o desempenho dos sistemas.",
  },
];

const researchContent: ContentBlock[] = [
  {
    type: "paragraph",
    text: "O cenário de pesquisa em IA está migrando de ganhos incrementais para avanços em confiabilidade, interpretabilidade e alinhamento. Essa mudança tem impacto direto em aplicações críticas.",
  },
  {
    type: "heading",
    text: "Principais aprendizados",
  },
  {
    type: "list",
    items: [
      "Benchmarks focados em tarefas do mundo real",
      "Modelos multimodais com melhor raciocínio contextual",
      "Novos métodos de compressão e eficiência energética",
    ],
  },
  {
    type: "paragraph",
    text: "A competitividade agora depende de integrar pesquisa e engenharia, criando pipelines rápidos de experimentação e validação com métricas sólidas.",
  },
  {
    type: "quote",
    text: "Sem avaliação rigorosa, qualquer ganho aparente pode esconder regressões sérias.",
    cite: "Pesquisadora convidada, Lab de IA",
  },
  {
    type: "paragraph",
    text: "As próximas gerações de produtos vão combinar desempenho, custo e governança em um equilíbrio cada vez mais sofisticado.",
  },
];

export const news: NewsItem[] = [
  {
    slug: "ia-mais-confiavel-no-setor-financeiro",
    title: "Bancos aceleram adoção de IA confiável em fluxos de crédito",
    subtitle: "Governança e auditoria viram requisitos centrais em 2026.",
    excerpt:
      "Instituições financeiras estão redesenhando modelos de risco com foco em explicabilidade e métricas de justiça.",
    content: baseContent,
    author: "Mariana Costa",
    date: "2026-01-28T09:30:00.000Z",
    coverImage: "/images/ai-01.svg",
    tags: ["Regulation", "Security", "Products", "MLOps"],
    readingTime: 6,
    featured: true,
    trendingScore: 98,
  },
  {
    slug: "agentes-ganham-rotinas-operacionais",
    title: "Agentes autônomos começam a assumir rotinas operacionais",
    subtitle: "Equipes de operações testam agentes com guardrails rígidos.",
    excerpt:
      "Empresas globais estão criando agentes para tarefas repetitivas, com foco em governança e rastreabilidade.",
    content: baseContent,
    author: "Lucas Ferraz",
    date: "2026-01-26T14:10:00.000Z",
    coverImage: "/images/ai-02.svg",
    tags: ["Agents", "Security", "MLOps"],
    readingTime: 5,
    trendingScore: 88,
  },
  {
    slug: "open-source-labs-em-expansao",
    title: "Labs open source atraem talentos e aceleram inovação",
    subtitle: "Comunidades distribuem novos frameworks de avaliação.",
    excerpt:
      "Projetos abertos estão liderando novas abordagens de avaliação e compliance.",
    content: researchContent,
    author: "Renata Alves",
    date: "2026-01-25T11:45:00.000Z",
    coverImage: "/images/ai-03.svg",
    tags: ["Open Source", "Research", "MLOps"],
    readingTime: 7,
    trendingScore: 79,
  },
  {
    slug: "hardware-especializado-para-ia-edge",
    title: "Hardware especializado redefine IA no edge",
    subtitle: "Chips menores e eficientes ampliam IA em tempo real.",
    excerpt:
      "Novas arquiteturas de hardware aproximam inferência e usuário final, reduzindo latência.",
    content: researchContent,
    author: "João Almeida",
    date: "2026-01-23T08:10:00.000Z",
    coverImage: "/images/ai-04.svg",
    tags: ["Hardware", "Products", "Security"],
    readingTime: 6,
    trendingScore: 85,
  },
  {
    slug: "startups-ia-focam-em-verticalizacao",
    title: "Startups de IA apostam em soluções super verticalizadas",
    subtitle: "Produtos nichados ganham espaço contra plataformas genéricas.",
    excerpt:
      "Startups de saúde, jurídico e varejo estão vencendo com IA muito específica.",
    content: baseContent,
    author: "Helena Prado",
    date: "2026-01-21T16:20:00.000Z",
    coverImage: "/images/ai-05.svg",
    tags: ["Startups", "Products", "LLMs"],
    readingTime: 5,
    trendingScore: 70,
  },
  {
    slug: "pesquisa-ia-alinhamento-multimodal",
    title: "Pesquisa em alinhamento multimodal avança com novos benchmarks",
    subtitle: "Modelos agora precisam justificar decisões multimodais.",
    excerpt:
      "Benchmarks recentes avaliam coerência entre texto, imagem e áudio.",
    content: researchContent,
    author: "Carlos Mendes",
    date: "2026-01-20T10:05:00.000Z",
    coverImage: "/images/ai-06.svg",
    tags: ["Research", "LLMs", "Security"],
    readingTime: 8,
    trendingScore: 82,
  },
  {
    slug: "regulacao-ia-na-america-latina",
    title: "América Latina acelera marco regulatório de IA",
    subtitle: "Governos alinham regras com padrões internacionais.",
    excerpt:
      "Novas propostas ampliam exigências de transparência e mitigação de risco.",
    content: baseContent,
    author: "Paula Cordeiro",
    date: "2026-01-18T12:30:00.000Z",
    coverImage: "/images/ai-07.svg",
    tags: ["Regulation", "Security"],
    readingTime: 6,
    trendingScore: 74,
  },
  {
    slug: "llms-focados-em-eficiencia",
    title: "LLMs menores entregam eficiência sem perder qualidade",
    subtitle: "Times de engenharia otimizam para custo e performance.",
    excerpt:
      "Modelos compactos estão vencendo em aplicações de suporte e atendimento.",
    content: researchContent,
    author: "Sofia Martins",
    date: "2026-01-16T09:00:00.000Z",
    coverImage: "/images/ai-01.svg",
    tags: ["LLMs", "Products", "MLOps"],
    readingTime: 6,
    trendingScore: 83,
  },
  {
    slug: "seguranca-para-modelos-em-producao",
    title: "Segurança em produção vira prioridade no ciclo de IA",
    subtitle: "Times adicionam camadas de proteção e red team.",
    excerpt:
      "Auditorias contínuas são a nova linha de defesa para sistemas críticos.",
    content: baseContent,
    author: "Ricardo Lopes",
    date: "2026-01-14T13:15:00.000Z",
    coverImage: "/images/ai-02.svg",
    tags: ["Security", "MLOps", "Regulation"],
    readingTime: 7,
    trendingScore: 90,
  },
  {
    slug: "produtos-ia-no-varejo",
    title: "Varejo usa IA para personalização em escala",
    subtitle: "Recomendações ganham contexto e linguagem natural.",
    excerpt:
      "Plataformas combinam dados transacionais com sinais comportamentais.",
    content: baseContent,
    author: "Ana Ribeiro",
    date: "2026-01-12T18:20:00.000Z",
    coverImage: "/images/ai-03.svg",
    tags: ["Products", "LLMs", "Startups"],
    readingTime: 5,
    trendingScore: 67,
  },
  {
    slug: "observabilidade-para-ia",
    title: "Observabilidade para IA ganha stacks dedicados",
    subtitle: "Monitorar qualidade se torna tão crítico quanto latência.",
    excerpt:
      "Ferramentas de observabilidade avançam com métricas de qualidade e drift.",
    content: baseContent,
    author: "Felipe Rocha",
    date: "2026-01-10T07:40:00.000Z",
    coverImage: "/images/ai-04.svg",
    tags: ["MLOps", "Products", "Security"],
    readingTime: 6,
    trendingScore: 76,
  },
  {
    slug: "hardware-eficiente-para-data-centers",
    title: "Data centers apostam em hardware mais eficiente para IA",
    subtitle: "O foco agora é reduzir consumo energético.",
    excerpt:
      "Novos chips prometem reduzir custos de inferência em larga escala.",
    content: researchContent,
    author: "Bruno Nascimento",
    date: "2026-01-08T15:50:00.000Z",
    coverImage: "/images/ai-05.svg",
    tags: ["Hardware", "Products"],
    readingTime: 6,
    trendingScore: 72,
  },
  {
    slug: "agentes-para-ti-e-seguranca",
    title: "Agentes especializados reforçam operações de TI",
    subtitle: "Equipes ganham automação com supervisão humana.",
    excerpt:
      "SOCs adotam agentes para triagem e resposta inicial a incidentes.",
    content: baseContent,
    author: "Camila Souza",
    date: "2026-01-06T11:15:00.000Z",
    coverImage: "/images/ai-06.svg",
    tags: ["Agents", "Security", "Products"],
    readingTime: 5,
    trendingScore: 69,
  },
  {
    slug: "regulacao-europa-modelos-fundacao",
    title: "Europa detalha regras para modelos de fundação",
    subtitle: "Novas diretrizes reforçam transparência e responsabilidade.",
    excerpt:
      "Organizações precisam mapear riscos e comunicar limitações dos modelos.",
    content: baseContent,
    author: "Thiago Andrade",
    date: "2026-01-04T09:25:00.000Z",
    coverImage: "/images/ai-07.svg",
    tags: ["Regulation", "LLMs", "Security"],
    readingTime: 7,
    trendingScore: 81,
  },
  {
    slug: "open-source-para-empresas",
    title: "Open source vira estratégia central para empresas de IA",
    subtitle: "Abertura de modelos acelera adoção corporativa.",
    excerpt:
      "Empresas estão abrindo partes do stack para acelerar confiança do mercado.",
    content: researchContent,
    author: "Daniela Lima",
    date: "2026-01-02T12:10:00.000Z",
    coverImage: "/images/ai-01.svg",
    tags: ["Open Source", "Products", "Startups"],
    readingTime: 6,
    trendingScore: 75,
  },
  {
    slug: "pesquisa-ia-sinteticos",
    title: "Dados sintéticos ganham protagonismo na pesquisa aplicada",
    subtitle: "Setores regulados buscam alternativas seguras de dados.",
    excerpt:
      "Técnicas de geração controlada avançam com validações estatísticas.",
    content: researchContent,
    author: "Isabela Torres",
    date: "2025-12-30T08:55:00.000Z",
    coverImage: "/images/ai-02.svg",
    tags: ["Research", "Security", "Regulation"],
    readingTime: 7,
    trendingScore: 68,
  },
  {
    slug: "llms-para-educacao",
    title: "Educação testa LLMs para planos de estudo personalizados",
    subtitle: "Ferramentas acompanham progresso e sugerem conteúdos.",
    excerpt:
      "Plataformas edtech buscam equilíbrio entre personalização e privacidade.",
    content: baseContent,
    author: "Gustavo Leal",
    date: "2025-12-28T13:20:00.000Z",
    coverImage: "/images/ai-03.svg",
    tags: ["LLMs", "Products", "Startups"],
    readingTime: 5,
    trendingScore: 66,
  },
  {
    slug: "agents-na-logistica",
    title: "Agentes inteligentes otimizam logística em tempo real",
    subtitle: "Rotas são recalculadas com base em dados ao vivo.",
    excerpt:
      "Empresas de transporte combinam agentes com previsões de demanda.",
    content: baseContent,
    author: "Juliana Paes",
    date: "2025-12-26T10:40:00.000Z",
    coverImage: "/images/ai-04.svg",
    tags: ["Agents", "Products", "MLOps"],
    readingTime: 6,
    trendingScore: 71,
  },
  {
    slug: "seguranca-ia-engenharia-social",
    title: "Segurança reforça defesa contra engenharia social com IA",
    subtitle: "Novos ataques usam voz e vídeo sintéticos.",
    excerpt:
      "Empresas criam protocolos de verificação e treinamento contínuo.",
    content: baseContent,
    author: "Rafael Duarte",
    date: "2025-12-24T15:05:00.000Z",
    coverImage: "/images/ai-05.svg",
    tags: ["Security", "Regulation"],
    readingTime: 6,
    trendingScore: 77,
  },
  {
    slug: "mlops-para-times-pequenos",
    title: "MLOps se torna acessível para times enxutos",
    subtitle: "Stacks compactos reduzem tempo de implantação.",
    excerpt:
      "Ferramentas plug-and-play permitem lançar modelos com mais segurança.",
    content: baseContent,
    author: "Patrícia Melo",
    date: "2025-12-22T09:10:00.000Z",
    coverImage: "/images/ai-06.svg",
    tags: ["MLOps", "Open Source", "Products"],
    readingTime: 5,
    trendingScore: 64,
  },
  {
    slug: "hardware-para-robos",
    title: "Robôs colaborativos adotam hardware otimizado para IA",
    subtitle: "Sensores e chips ajudam na tomada de decisão local.",
    excerpt:
      "A indústria busca reduzir latência e aumentar a segurança operacional.",
    content: researchContent,
    author: "Fábio Reis",
    date: "2025-12-20T12:45:00.000Z",
    coverImage: "/images/ai-07.svg",
    tags: ["Hardware", "Products", "Security"],
    readingTime: 7,
    trendingScore: 63,
  },
  {
    slug: "startups-ia-na-saude",
    title: "Startups de IA na saúde ganham novos investimentos",
    subtitle: "Diagnóstico assistido por IA avança com validação clínica.",
    excerpt:
      "A confiança cresce à medida que estudos controlados mostram benefícios.",
    content: baseContent,
    author: "Larissa Vieira",
    date: "2025-12-18T08:35:00.000Z",
    coverImage: "/images/ai-01.svg",
    tags: ["Startups", "Research", "Products"],
    readingTime: 6,
    trendingScore: 72,
  },
  {
    slug: "research-ia-eficiencia-energetica",
    title: "Pesquisa busca IA mais eficiente energeticamente",
    subtitle: "Novos métodos reduzem consumo sem perder precisão.",
    excerpt:
      "Laboratórios estudam compressão e quantização avançadas.",
    content: researchContent,
    author: "Eduardo Sales",
    date: "2025-12-16T14:00:00.000Z",
    coverImage: "/images/ai-02.svg",
    tags: ["Research", "Hardware", "MLOps"],
    readingTime: 7,
    trendingScore: 60,
  },
  {
    slug: "open-source-para-seguranca",
    title: "Open source impulsiona ferramentas de segurança em IA",
    subtitle: "Comunidades criam detectores e scanners de prompt.",
    excerpt:
      "Ferramentas abertas aceleram auditorias em modelos generativos.",
    content: baseContent,
    author: "Beatriz Franco",
    date: "2025-12-14T10:25:00.000Z",
    coverImage: "/images/ai-03.svg",
    tags: ["Open Source", "Security", "MLOps"],
    readingTime: 6,
    trendingScore: 65,
  },
  {
    slug: "llms-para-corporativo",
    title: "Empresas adotam LLMs privados para processos internos",
    subtitle: "A demanda por privacidade redefine o mercado corporativo.",
    excerpt:
      "Modelos privados permitem ganhos de produtividade sem exposição de dados.",
    content: baseContent,
    author: "Diego Moreira",
    date: "2025-12-12T16:10:00.000Z",
    coverImage: "/images/ai-04.svg",
    tags: ["LLMs", "Security", "Products"],
    readingTime: 5,
    trendingScore: 78,
  },
  {
    slug: "agents-para-suporte",
    title: "Agentes conversacionais ganham profundidade no suporte",
    subtitle: "Resolução de casos complexos cresce com roteamento inteligente.",
    excerpt:
      "Operações de suporte combinam agentes com humanos para reduzir tempo médio.",
    content: baseContent,
    author: "Marta Guedes",
    date: "2025-12-10T09:50:00.000Z",
    coverImage: "/images/ai-05.svg",
    tags: ["Agents", "Products", "LLMs"],
    readingTime: 5,
    trendingScore: 62,
  },
  {
    slug: "regulacao-ia-no-brasil",
    title: "Brasil avança em diretrizes de IA responsável",
    subtitle: "Debate público reforça necessidade de transparência.",
    excerpt:
      "Empresas se preparam para obrigações de avaliação de risco.",
    content: baseContent,
    author: "Fernanda Guimarães",
    date: "2025-12-08T13:40:00.000Z",
    coverImage: "/images/ai-06.svg",
    tags: ["Regulation", "Security", "Products"],
    readingTime: 6,
    trendingScore: 73,
  },
  {
    slug: "mlops-compliance",
    title: "Compliance vira pilar do MLOps moderno",
    subtitle: "Times integram governança ao pipeline de modelos.",
    excerpt:
      "Boas práticas de compliance reduzem riscos e aceleram aprovação interna.",
    content: baseContent,
    author: "André Silva",
    date: "2025-12-06T11:30:00.000Z",
    coverImage: "/images/ai-07.svg",
    tags: ["MLOps", "Regulation", "Security"],
    readingTime: 6,
    trendingScore: 69,
  },
  {
    slug: "hardware-para-ia-embarcada",
    title: "IA embarcada ganha chips com foco em privacidade",
    subtitle: "Processamento local reduz envio de dados à nuvem.",
    excerpt:
      "Novos dispositivos prometem inferência eficiente para IoT e indústria.",
    content: researchContent,
    author: "Nicolas Barros",
    date: "2025-12-04T09:05:00.000Z",
    coverImage: "/images/ai-01.svg",
    tags: ["Hardware", "Security", "Products"],
    readingTime: 7,
    trendingScore: 61,
  },
  {
    slug: "startups-ia-b2b",
    title: "Startups B2B de IA crescem com soluções de copiloto",
    subtitle: "Copilotos corporativos ganham espaço em vendas e marketing.",
    excerpt:
      "Ferramentas B2B focam em integração rápida e ROI mensurável.",
    content: baseContent,
    author: "Carolina Fonseca",
    date: "2025-12-02T15:15:00.000Z",
    coverImage: "/images/ai-02.svg",
    tags: ["Startups", "Products", "LLMs"],
    readingTime: 5,
    trendingScore: 58,
  },
  {
    slug: "pesquisa-robustez-modelos",
    title: "Pesquisa destaca importância da robustez em modelos críticos",
    subtitle: "Testes adversariais viram padrão em setores regulados.",
    excerpt:
      "A robustez passa a ser requisito em saúde e finanças.",
    content: researchContent,
    author: "Bianca Lemos",
    date: "2025-11-30T07:35:00.000Z",
    coverImage: "/images/ai-03.svg",
    tags: ["Research", "Security", "Regulation"],
    readingTime: 6,
    trendingScore: 59,
  },
  {
    slug: "open-source-para-llms",
    title: "Open source consolida ecossistema de LLMs",
    subtitle: "Modelos abertos aceleram pesquisa e produtos.",
    excerpt:
      "Comunidades criam pipelines completos para fine-tuning e avaliação.",
    content: researchContent,
    author: "Igor Santana",
    date: "2025-11-28T12:00:00.000Z",
    coverImage: "/images/ai-04.svg",
    tags: ["Open Source", "LLMs", "Research"],
    readingTime: 7,
    trendingScore: 57,
  },
  {
    slug: "agents-para-marketing",
    title: "Agentes impulsionam campanhas de marketing orientadas por dados",
    subtitle: "Equipes criativas adotam IA com fluxos supervisionados.",
    excerpt:
      "Campanhas ganham personalização granular com agentes especializados.",
    content: baseContent,
    author: "Rita Farias",
    date: "2025-11-26T16:30:00.000Z",
    coverImage: "/images/ai-05.svg",
    tags: ["Agents", "Products", "Startups"],
    readingTime: 5,
    trendingScore: 56,
  },
  {
    slug: "llms-regulacao-global",
    title: "Regulação global de LLMs entra em fase de harmonização",
    subtitle: "Setor privado pressiona por padrões comuns.",
    excerpt:
      "Novos fóruns buscam alinhar critérios de segurança e transparência.",
    content: baseContent,
    author: "Otávio Franco",
    date: "2025-11-24T10:15:00.000Z",
    coverImage: "/images/ai-06.svg",
    tags: ["Regulation", "LLMs", "Security"],
    readingTime: 7,
    trendingScore: 55,
  },
  {
    slug: "mlops-automacao-qa",
    title: "Automação de QA em MLOps reduz tempo de lançamento",
    subtitle: "Testes automatizados viram prática comum em times maduros.",
    excerpt:
      "Empresas reduzem regressões com suites de testes de dados e modelos.",
    content: baseContent,
    author: "Priscila Matos",
    date: "2025-11-22T08:10:00.000Z",
    coverImage: "/images/ai-07.svg",
    tags: ["MLOps", "Products", "Security"],
    readingTime: 6,
    trendingScore: 54,
  },
  {
    slug: "hardware-e-ia-para-autonomos",
    title: "IA autônoma avança com sensores e hardware de precisão",
    subtitle: "Veículos e drones ganham inteligência embarcada.",
    excerpt:
      "O avanço de sensores reduz acidentes e melhora a eficiência operacional.",
    content: researchContent,
    author: "Renato Pires",
    date: "2025-11-20T14:55:00.000Z",
    coverImage: "/images/ai-01.svg",
    tags: ["Hardware", "Research", "Security"],
    readingTime: 7,
    trendingScore: 53,
  },
];

const sortByDateDesc = (items: NewsItem[]) =>
  [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const getAllNews = () => sortByDateDesc(news);

export const getFeaturedNews = () =>
  sortByDateDesc(news).find((item) => item.featured) ?? sortByDateDesc(news)[0];

export const getTrendingNews = (limit = 5) =>
  [...news]
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, limit);

export const getNewsBySlug = (slug: string) =>
  news.find((item) => item.slug === slug);

export const getTags = () => {
  const set = new Set<string>();
  news.forEach((item) => item.tags.forEach((tag) => set.add(tag)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
};

export const getNewsByTag = (tag: string) =>
  sortByDateDesc(news.filter((item) => item.tags.includes(tag)));

export const searchNews = (query: string) => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return sortByDateDesc(
    news.filter((item) => {
      const haystack = [
        item.title,
        item.excerpt,
        item.subtitle,
        item.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    }),
  );
};

export const getRelatedNews = (base: NewsItem, limit = 3) => {
  const related = news
    .filter((item) => item.slug !== base.slug)
    .map((item) => {
      const commonTags = item.tags.filter((tag) => base.tags.includes(tag));
      return { item, score: commonTags.length };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  if (related.length >= limit) {
    return related.slice(0, limit).map((entry) => entry.item);
  }

  const fallback = news
    .filter((item) => item.slug !== base.slug)
    .slice(0, limit - related.length);

  return [...related.map((entry) => entry.item), ...fallback].slice(0, limit);
};
