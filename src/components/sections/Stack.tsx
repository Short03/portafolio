import { secciones } from '../../data/perfil'
import { stack } from '../../data/stack'
import { traducir, useIdioma } from '../../i18n/contexto'
import { Chip, ListaChips } from '../ui/Chip'
import { Seccion } from '../ui/Seccion'

export function Stack() {
  const { t } = useIdioma()

  return (
    <Seccion info={secciones.stack}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
        {stack.map((grupo) => (
          <div key={grupo.titulo.es}>
            <h3 className="mt-0 mb-2.5 font-display text-base font-semibold">{t(grupo.titulo)}</h3>
            <ListaChips>
              {grupo.tecnologias.map((tecnologia) => (
                // La key usa el nombre en español: no cambia al cambiar de idioma.
                <Chip key={traducir(tecnologia.nombre, 'es')} destacada={tecnologia.destacada}>
                  {t(tecnologia.nombre)}
                </Chip>
              ))}
            </ListaChips>
          </div>
        ))}
      </div>
    </Seccion>
  )
}
