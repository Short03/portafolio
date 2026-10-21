import type { InfoSeccion, Perfil } from '../types'

export const perfil: Perfil = {
  nombre: 'Adrián Isaí',
  apellidos: 'Short Cantú',
  dominio: 'technoshort.com',
  rol: 'Desarrollador Full Stack · Monterrey, N.L.',
  presentacion:
    'Construyo aplicaciones web para negocios: back end en C# y .NET (ASP.NET Core y Blazor) con SQL Server, e interfaces claras en React. Me enfoco en software administrativo y fiscal para empresas mexicanas, como facturación, compras y ventas.',
  cv: {
    etiqueta: 'Descargar CV',
    etiquetaCorta: 'CV',
    ruta: '/cv-adrian-short.pdf',
  },
  verProyectos: { etiqueta: 'Ver proyectos', url: '#proyectos' },
  github: { etiqueta: 'GitHub', url: 'https://github.com/Short03' },
  linkedin: { etiqueta: 'LinkedIn', url: 'https://www.linkedin.com/in/adrian-short' },
  disponible: {
    sello: 'Disponible para trabajar',
    titulo: 'Datos rápidos',
    datos: [
      { etiqueta: 'Experiencia', valor: '3+ años' },
      { etiqueta: 'Enfoque', valor: '.NET · Blazor · SQL · React' },
      { etiqueta: 'Formación', valor: 'Ing. Tecnologías Computacionales' },
      { etiqueta: 'Inglés', valor: 'Intermedio / avanzado' },
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
  experiencia: { id: 'experiencia', numero: '02', titulo: 'Experiencia' },
  proyectos: { id: 'proyectos', numero: '03', titulo: 'Proyectos' },
  formacion: { id: 'formacion', numero: '04', titulo: 'Formación' },
  contacto: { id: 'contacto', numero: '05', titulo: 'Contacto' },
} as const satisfies Record<string, InfoSeccion>
