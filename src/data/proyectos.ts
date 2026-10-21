import type { Proyecto } from '../types'

// Para agregar un proyecto, agrega un objeto a este arreglo.
export const proyectos: Proyecto[] = [
  {
    nombre: 'Validador CFDI 4.0',
    estado: 'Código abierto',
    descripcion:
      'Lee facturas electrónicas en XML y valida 17 reglas del SAT: importes, RFC, método de pago y timbre. Historial en SQL Server, 32 pruebas unitarias e integración continua.',
    tecnologias: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JavaScript', 'xUnit'],
    enlace: 'https://github.com/Short03/cfdi-validator',
  },
  {
    nombre: 'Portal de autofacturación',
    estado: 'En desarrollo',
    descripcion:
      'El cliente identifica su ticket, captura RFC, uso de CFDI y código postal, y ve una vista previa de su factura antes de emitirla.',
    tecnologias: ['.NET', 'SQL Server', 'React'],
  },
  {
    nombre: 'psickaren.com',
    estado: 'En línea',
    descripcion:
      'Sitio profesional para una psicóloga infanto-juvenil, con diseño responsivo y SEO técnico.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace: 'https://psickaren.com',
  },
]
