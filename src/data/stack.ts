import type { GrupoStack } from '../types'

export const stack: GrupoStack[] = [
  {
    titulo: 'Back end y datos',
    tecnologias: [
      { nombre: 'C# / .NET', destacada: true },
      { nombre: 'SQL Server', destacada: true },
      { nombre: 'Blazor', destacada: true },
      { nombre: 'ASP.NET Core' },
      { nombre: 'Entity Framework Core' },
      { nombre: 'REST APIs' },
      { nombre: 'MongoDB' },
      { nombre: 'Python' },
    ],
  },
  {
    titulo: 'Front end',
    tecnologias: [
      { nombre: 'JavaScript', destacada: true },
      { nombre: 'React', destacada: true },
      { nombre: 'Next.js' },
      { nombre: 'HTML5' },
      { nombre: 'CSS3' },
      { nombre: 'React Native' },
    ],
  },
  {
    titulo: 'Herramientas',
    tecnologias: [
      { nombre: 'Git / GitHub', destacada: true },
      { nombre: 'GitHub Actions' },
      { nombre: 'Docker' },
      { nombre: 'Linux / WSL' },
      { nombre: 'Azure' },
      { nombre: 'xUnit' },
      { nombre: 'Vite' },
      { nombre: 'Vercel' },
      { nombre: 'Insomnia' },
      { nombre: 'Clerk' },
      { nombre: 'WordPress' },
    ],
  },
  {
    titulo: 'Diseño',
    tecnologias: [
      { nombre: 'Figma' },
      { nombre: 'Prototipado' },
      { nombre: 'Diseño responsivo' },
      { nombre: 'Accesibilidad' },
    ],
  },
]
