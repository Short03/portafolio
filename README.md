# Portafolio · Adrián Short

Mi CV en forma de página web, publicado en [technoshort.com](https://technoshort.com/).
Soy desarrollador full stack en Monterrey: C#, .NET, Blazor, SQL Server y React, con enfoque en
software administrativo y fiscal (CFDI 4.0).

## Stack

- **Vite + React + TypeScript** en modo estricto
- **Tailwind CSS v4**, mobile-first, con modo claro y oscuro según el sistema
- **motion** para animaciones de entrada (se desactivan con `prefers-reduced-motion`)
- **lucide-react** para íconos y **clsx** para clases condicionales
- **Vercel Analytics** y **Speed Insights**
- **ESLint**, **Prettier** y **Vitest** con Testing Library
- **GitHub Actions**: lint, pruebas y build en cada push y pull request

## Correrlo localmente

Necesitas Node 22 (ver `.nvmrc`).

```bash
npm install
npm run dev
```

Abre http://localhost:5173.

| Script            | Qué hace                                        |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en vivo      |
| `npm run build`   | Revisa tipos y genera el sitio final en `dist/` |
| `npm run preview` | Sirve `dist/` para probar el build              |
| `npm run lint`    | Revisa el código con ESLint                     |
| `npm run format`  | Formatea todo con Prettier                      |
| `npm test`        | Corre las pruebas una vez                       |

## Estructura

```
src/
  components/
    layout/    Navbar, Footer
    sections/  Hero, Stack, Experiencia, Proyectos, Formacion, Contacto
    ui/        Boton, Chip, Seccion, TarjetaProyecto
  data/        Todo el contenido del CV
  types/       Interfaces del contenido
public/        CV en PDF, favicon, robots.txt y sitemap.xml
referencia/    Versión original en HTML y CSS (referencia de diseño)
```

Los componentes no tienen texto del CV: todo vive en `src/data/*.ts`.

## Cómo actualizar el contenido

- **Agregar un proyecto:** agrega un objeto al arreglo de `src/data/proyectos.ts`. El `estado`
  debe ser `'Código abierto'`, `'En desarrollo'` o `'En línea'`; TypeScript te avisa si no.
- **Experiencia, stack o formación:** edita el archivo correspondiente en `src/data/`.
- **Datos personales, enlaces y recuadro "Disponible":** `src/data/perfil.ts`.

## Español e inglés

El botón **EN / ES** de la navbar cambia todo el sitio de idioma y recuerda la elección.

- Cada texto del CV se escribe como `{ es: '...', en: '...' }`. Si falta uno de los dos,
  TypeScript marca error y el build no pasa.
- Los nombres que no cambian (React, SQL Server, Agencia Digital Web) pueden ser un `string`
  simple.
- Los textos de la interfaz ("Copiar", "Abrir menú", estados de proyectos) viven en
  `src/i18n/ui.ts`.
- Google indexa la versión en español, que es la que carga primero.

Ejemplo de proyecto nuevo:

```ts
{
  nombre: 'mi-proyecto.com',
  estado: 'En línea',
  descripcion: { es: 'Descripción en español.', en: 'English description.' },
  tecnologias: ['React', 'TypeScript'],
  enlace: 'https://mi-proyecto.com',
}
```

## Cómo actualizar el CV

1. Edita tu CV y expórtalo a PDF.
2. Reemplaza `public/cv-adrian-short.pdf` con el mismo nombre.
3. Sube el cambio:

   ```bash
   git add public/cv-adrian-short.pdf
   git commit -m "docs: actualiza CV"
   git push
   ```

Vercel publica el cambio solo en un par de minutos.
