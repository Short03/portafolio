import type { InfoSeccion, Perfil } from '../types'

export const perfil: Perfil = {
  nombre: 'Adrián Isaí',
  apellidos: 'Short Cantú',
  dominio: 'technoshort.com',
  rol: {
    es: 'Desarrollador Full Stack · Monterrey, N.L.',
    en: 'Full Stack Developer · Monterrey, N.L.',
  },
  presentacion: {
    es: 'Construyo aplicaciones web para negocios: back end en C# y .NET (ASP.NET Core y Blazor) con SQL Server, e interfaces claras en React. Me enfoco en software administrativo y fiscal para empresas mexicanas, como facturación, compras y ventas.',
    en: 'I build web applications for businesses: back ends in C# and .NET (ASP.NET Core and Blazor) with SQL Server, and clear interfaces in React. I focus on administrative and tax software for Mexican companies, such as invoicing, purchasing and sales.',
  },
  meta: {
    titulo: {
      es: 'Adrián Short · Desarrollador Full Stack .NET',
      en: 'Adrián Short · Full Stack .NET Developer',
    },
    descripcion: {
      es: 'Adrián Isaí Short Cantú, desarrollador full stack en Monterrey: C#, .NET, Blazor, SQL Server y React. Software administrativo y fiscal (CFDI 4.0).',
      en: 'Adrián Isaí Short Cantú, full stack developer in Monterrey: C#, .NET, Blazor, SQL Server and React. Administrative and tax software (CFDI 4.0).',
    },
  },
  cv: {
    // El PDF está en español; en inglés se avisa en la etiqueta.
    etiqueta: { es: 'Descargar CV', en: 'Download CV (Spanish)' },
    etiquetaCorta: 'CV',
    ruta: '/cv-adrian-short.pdf',
  },
  verProyectos: { etiqueta: { es: 'Ver proyectos', en: 'View projects' }, url: '#proyectos' },
  github: { etiqueta: 'GitHub', url: 'https://github.com/Short03' },
  linkedin: { etiqueta: 'LinkedIn', url: 'https://www.linkedin.com/in/adrian-short' },
  disponible: {
    sello: { es: 'Disponible para trabajar', en: 'Open to work' },
    titulo: { es: 'Datos rápidos', en: 'Quick facts' },
    datos: [
      {
        etiqueta: { es: 'Experiencia', en: 'Experience' },
        valor: { es: '3+ años', en: '3+ years' },
      },
      { etiqueta: { es: 'Enfoque', en: 'Focus' }, valor: '.NET · Blazor · SQL · React' },
      {
        etiqueta: { es: 'Formación', en: 'Education' },
        valor: { es: 'Ing. Tecnologías Computacionales', en: 'B.Eng. Computer Technologies' },
      },
      {
        etiqueta: { es: 'Inglés', en: 'English' },
        valor: { es: 'Intermedio / avanzado', en: 'Intermediate / advanced' },
      },
    ],
  },
  contacto: {
    correo: 'adrian_short97@hotmail.com',
    telefono: '81 2607 9861',
    telefonoEnlace: '+528126079861',
  },
  pie: '© 2026 Adrián Short · Monterrey, Nuevo León',
}

/** Orden de las secciones; la navbar se arma con esta lista. */
export const secciones = {
  stack: { id: 'stack', numero: '01', titulo: 'Stack' },
  experiencia: {
    id: 'experiencia',
    numero: '02',
    titulo: { es: 'Experiencia', en: 'Experience' },
  },
  proyectos: { id: 'proyectos', numero: '03', titulo: { es: 'Proyectos', en: 'Projects' } },
  formacion: { id: 'formacion', numero: '04', titulo: { es: 'Formación', en: 'Education' } },
  contacto: { id: 'contacto', numero: '05', titulo: { es: 'Contacto', en: 'Contact' } },
} as const satisfies Record<string, InfoSeccion>
