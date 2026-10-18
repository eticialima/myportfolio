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
  }
];
