import type { Proyecto } from '../types'

// Para agregar un proyecto, agrega un objeto a este arreglo (con su descripción en ambos idiomas).
export const proyectos: Proyecto[] = [
  {
    nombre: { es: 'Validador CFDI 4.0', en: 'CFDI 4.0 Validator' },
    estado: 'Código abierto',
    descripcion: {
      es: 'Lee facturas electrónicas en XML y valida 17 reglas del SAT: importes, RFC, método de pago y timbre. Historial en SQL Server, 32 pruebas unitarias e integración continua.',
      en: 'Reads XML e-invoices and validates 17 SAT rules: amounts, RFC, payment method and digital stamp. History stored in SQL Server, 32 unit tests and continuous integration.',
    },
    tecnologias: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JavaScript', 'xUnit'],
    enlace: 'https://github.com/Short03/cfdi-validator',
  },
  {
    nombre: { es: 'Portal de autofacturación', en: 'Self-invoicing portal' },
    estado: 'En desarrollo',
    descripcion: {
      es: 'El cliente identifica su ticket, captura RFC, uso de CFDI y código postal, y ve una vista previa de su factura antes de emitirla.',
      en: 'Customers look up their receipt, enter their RFC, CFDI use and ZIP code, and preview their invoice before it is issued.',
    },
    tecnologias: ['.NET', 'SQL Server', 'React'],
  },
  {
    nombre: 'psickaren.com',
    estado: 'En línea',
    descripcion: {
      es: 'Sitio profesional para una psicóloga infanto-juvenil, con diseño responsivo y SEO técnico.',
      en: 'Professional website for a child and adolescent psychologist, with responsive design and technical SEO.',
    },
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace: 'https://psickaren.com',
  },
]
