import type { Trabajo } from '../types'

export const experiencia: Trabajo[] = [
  {
    puesto: {
      es: 'Desarrollador full stack freelance',
      en: 'Freelance full stack developer',
    },
    organizacion: { es: 'Proyectos para clientes', en: 'Client projects' },
    fecha: { es: '2024 – actual', en: '2024 – present' },
    logros: [
      {
        es: 'Desarrollo de sitios web profesionales con SEO técnico (sitemap, robots.txt, HTML semántico).',
        en: 'Building professional websites with technical SEO (sitemap, robots.txt, semantic HTML).',
      },
      {
        es: 'Desarrollo de módulos de facturación, compras y ventas para una empresa, bajo contrato de confidencialidad.',
        en: 'Building invoicing, purchasing and sales modules for a company, under a non-disclosure agreement.',
      },
    ],
  },
  {
    puesto: {
      es: 'Desarrollador web y diseñador UX/UI',
      en: 'Web developer and UX/UI designer',
    },
    organizacion: 'Agencia Digital Web',
    fecha: { es: 'ago 2022 – sep 2024', en: 'Aug 2022 – Sep 2024' },
    logros: [
      {
        es: 'Desarrollé y mantuve más de 10 sitios web para clientes, responsivos y optimizados para rendimiento.',
        en: 'Built and maintained 10+ client websites, responsive and optimized for performance.',
      },
      {
        es: 'Personalicé funcionalidades de WordPress con HTML, CSS y JavaScript e integré APIs de terceros.',
        en: 'Customized WordPress functionality with HTML, CSS and JavaScript and integrated third-party APIs.',
      },
      {
        es: 'Diseñé prototipos en Figma con los equipos de marketing para alinear cada sitio con la marca del cliente.',
        en: "Designed Figma prototypes with marketing teams to align each site with the client's brand.",
      },
    ],
  },
  {
    puesto: {
      es: 'Soporte técnico y automatización',
      en: 'Technical support and automation',
    },
    organizacion: {
      es: 'SAT · Servicio de Administración Tributaria',
      en: 'SAT · Mexican Tax Administration Service',
    },
    logros: [
      {
        es: 'Creé macros para agilizar el manejo de bases de datos del área.',
        en: "Created macros to speed up the department's database work.",
      },
      {
        es: 'Actualicé y migré equipos de trabajo de los usuarios.',
        en: "Upgraded and migrated users' workstations.",
      },
      {
        es: 'Resolví incidencias técnicas de usuarios internos.',
        en: 'Resolved technical issues for internal users.',
      },
    ],
  },
]
