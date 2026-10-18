export type LocalizedText = { pt: string; en: string; es: string };

export interface CaseStudy {
  slug: string;
  title: string;
  summary: LocalizedText;
  context: LocalizedText;
  features: LocalizedText[];
  technologies: string[];
  images: { src: string; caption: LocalizedText }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'wfx-software',
    title: 'WFX Software',
    summary: {
      pt: 'Automação de formulários e fluxos de trabalho com revisões, publicação e execução de tarefas.',
      en: 'Form and workflow automation with revisions, publishing, and task execution.',
      es: 'Automatización de formularios y flujos de trabajo con revisiones, publicación y ejecución de tareas.'
    },
    context: {
      pt: 'Protótipo funcional para organizar o ciclo de vida de formulários e processos: da edição de versões à execução e ao acompanhamento das instâncias.',
      en: 'A working prototype for the lifecycle of forms and processes, from version editing to execution and instance tracking.',
      es: 'Un prototipo funcional para el ciclo de vida de formularios y procesos, desde la edición de versiones hasta la ejecución y el seguimiento de instancias.'
    },
    features: [
      { pt: 'Construtor visual de formulários com campos e seções.', en: 'Visual form builder with fields and sections.', es: 'Constructor visual de formularios con campos y secciones.' },
      { pt: 'Editor de processos com tarefas, decisões e versões publicadas.', en: 'Process designer with tasks, decisions, and published versions.', es: 'Editor de procesos con tareas, decisiones y versiones publicadas.' },
      { pt: 'Execução de tarefas e histórico das instâncias do processo.', en: 'Task execution and process instance history.', es: 'Ejecución de tareas e historial de instancias del proceso.' }
    ],
    technologies: ['Angular', 'Angular Material', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    images: [
      { src: '/case-studies/wfx-form-builder.png', caption: { pt: 'Construtor de formulários', en: 'Form builder', es: 'Constructor de formularios' } },
      { src: '/case-studies/wfx-process-designer.png', caption: { pt: 'Editor visual de processos', en: 'Visual process designer', es: 'Editor visual de procesos' } }
    ]
  },
  {
    slug: 'kanbano',
    title: 'Kanbano',
    summary: {
      pt: 'Quadros Kanban colaborativos com atualização em tempo real.',
      en: 'Collaborative Kanban boards with real-time updates.',
      es: 'Tableros Kanban colaborativos con actualizaciones en tiempo real.'
    },
    context: {
      pt: 'Aplicação para equipes organizarem tarefas em quadros compartilhados, com cartões detalhados e sincronização entre sessões.',
      en: 'An app for teams to organize tasks on shared boards, with detailed cards and synchronization across sessions.',
      es: 'Una aplicación para organizar tareas en tableros compartidos, con tarjetas detalladas y sincronización entre sesiones.'
    },
    features: [
      { pt: 'Movimentação de cartões entre colunas com arrastar e soltar.', en: 'Drag-and-drop cards across columns.', es: 'Movimiento de tarjetas entre columnas con arrastrar y soltar.' },
      { pt: 'Atualizações em tempo real via WebSockets.', en: 'Real-time updates through WebSockets.', es: 'Actualizaciones en tiempo real mediante WebSockets.' },
      { pt: 'Etiquetas, prazos, checklists, responsáveis e papéis de membros.', en: 'Labels, due dates, checklists, assignees, and member roles.', es: 'Etiquetas, fechas límite, listas, responsables y roles de miembros.' }
    ],
    technologies: ['Angular', 'Angular Material', 'Django', 'Django Channels', 'PostgreSQL', 'Redis', 'Docker'],
    images: [
      { src: '/case-studies/kanbano-boards.png', caption: { pt: 'Visão dos quadros', en: 'Boards overview', es: 'Vista de los tableros' } },
      { src: '/case-studies/kanbano-board.png', caption: { pt: 'Quadro com cartões e filtros', en: 'Board with cards and filters', es: 'Tablero con tarjetas y filtros' } }
    ]
  },
  {
    slug: 'storage-explorer',
    title: 'Storage Explorer',
    summary: {
      pt: 'Sistema de gerenciamento de arquivos com painel administrativo, API e interface de acesso público.',
      en: 'File management system with an admin dashboard, API, and public access interface.',
      es: 'Sistema de gestión de archivos con panel administrativo, API e interfaz de acceso público.'
    },
    context: {
      pt: 'Solução dividida em painel administrativo, interface CDN e serviço de armazenamento, com autenticação e gestão de backends.',
      en: 'A solution split into an admin dashboard, CDN interface, and storage service, with authentication and backend management.',
      es: 'Una solución con panel administrativo, interfaz CDN y servicio de almacenamiento, con autenticación y gestión de backends.'
    },
    features: [
      { pt: 'Gerenciamento de arquivos e backends de armazenamento.', en: 'File and storage backend management.', es: 'Gestión de archivos y backends de almacenamiento.' },
      { pt: 'Painel de usuários, permissões e chaves de API.', en: 'Users, permissions, and API keys in the admin dashboard.', es: 'Usuarios, permisos y claves de API en el panel administrativo.' },
      { pt: 'API REST em Go para operações de armazenamento.', en: 'Go REST API for storage operations.', es: 'API REST en Go para operaciones de almacenamiento.' }
    ],
    technologies: ['Angular', 'TypeScript', 'Go', 'Fiber', 'PostgreSQL', 'Docker'],
    images: [
      { src: '/case-studies/storage-admin.png', caption: { pt: 'Painel administrativo', en: 'Admin dashboard', es: 'Panel administrativo' } }
    ]
  },
  {
    slug: 'vendas-online',
    title: 'VendasOnline',
    summary: {
      pt: 'Painel de análise para campanhas, gastos e comissões de vendas afiliadas.',
      en: 'Analytics dashboard for campaigns, ad spend, and affiliate commissions.',
      es: 'Panel de análisis para campañas, gastos y comisiones de ventas de afiliados.'
    },
    context: {
      pt: 'Projeto que reúne dados de campanhas e vendas em indicadores de lucro e ROAS, com fontes demonstrativas separadas de dados importados.',
      en: 'A project that brings campaign and sales data together into profit and ROAS metrics, keeping demo data separate from imported data.',
      es: 'Un proyecto que reúne datos de campañas y ventas en métricas de lucro y ROAS, separando datos de demostración e importados.'
    },
    features: [
      { pt: 'Dashboard de produtos, campanhas, anúncios, métricas e vendas.', en: 'Dashboard for products, campaigns, ads, metrics, and sales.', es: 'Panel de productos, campañas, anuncios, métricas y ventas.' },
      { pt: 'Integração de dados de Meta Ads e ClickBank para análise.', en: 'Meta Ads and ClickBank data integration for analysis.', es: 'Integración de datos de Meta Ads y ClickBank para análisis.' },
      { pt: 'Recomendações consultivas baseadas em gasto, vendas, CTR e ROAS.', en: 'Advisory recommendations based on spend, sales, CTR, and ROAS.', es: 'Recomendaciones consultivas basadas en gasto, ventas, CTR y ROAS.' }
    ],
    technologies: ['Angular', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    images: []
  }
];
