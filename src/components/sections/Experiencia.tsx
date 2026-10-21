import { experiencia } from '../../data/experiencia'
import { secciones } from '../../data/perfil'
import { useIdioma } from '../../i18n/contexto'
import { Seccion } from '../ui/Seccion'

export function Experiencia() {
  const { t } = useIdioma()

  return (
    <Seccion info={secciones.experiencia}>
      <div className="grid gap-10">
        {experiencia.map((trabajo) => (
          <article key={trabajo.puesto.es}>
            <header className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="m-0 font-display text-[21px] font-semibold tracking-[-0.01em]">
                {t(trabajo.puesto)}
              </h3>
              {trabajo.fecha && (
                <p className="m-0 font-mono text-[13px] text-tenue tabular-nums">
                  {t(trabajo.fecha)}
                </p>
              )}
            </header>
            <p className="mt-0.5 mb-2.5 font-semibold text-acento">{t(trabajo.organizacion)}</p>
            <ul className="m-0 grid max-w-[68ch] list-disc gap-1.5 pl-[18px]">
              {trabajo.logros.map((logro) => (
                <li key={logro.es}>{t(logro)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Seccion>
  )
}
