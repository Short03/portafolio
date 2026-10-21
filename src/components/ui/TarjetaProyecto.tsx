import clsx from 'clsx'
import { useIdioma } from '../../i18n/contexto'
import type { EstadoProyecto, Proyecto } from '../../types'
import { Chip, ListaChips } from './Chip'

// Record obliga a dar estilo a cada estado: si agregas uno nuevo al tipo, TypeScript lo exige aquí.
const estiloEstado: Record<EstadoProyecto, string> = {
  'Código abierto': 'bg-acento-suave text-acento',
  'En línea': 'bg-acento-suave text-acento',
  'En desarrollo': 'border border-sello text-sello',
}

export function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  const { nombre, estado, descripcion, tecnologias, enlace } = proyecto
  const { t, ui } = useIdioma()

  return (
    <article className="flex flex-col gap-2.5 rounded-xl border border-linea bg-superficie p-[22px]">
      <span
        className={clsx(
          'self-start rounded px-2 py-[3px] font-mono text-[11px] tracking-[0.06em] uppercase',
          estiloEstado[estado],
        )}
      >
        {ui.estados[estado]}
      </span>
      <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em]">
        {enlace ? (
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-tinta no-underline hover:text-acento"
          >
            {t(nombre)}
          </a>
        ) : (
          t(nombre)
        )}
      </h3>
      <p className="m-0 text-[15px] text-tenue">{t(descripcion)}</p>
      <ListaChips className="mt-auto pt-1.5">
        {tecnologias.map((tecnologia) => (
          <Chip key={tecnologia} tamano="chico">
            {tecnologia}
          </Chip>
        ))}
      </ListaChips>
    </article>
  )
}
