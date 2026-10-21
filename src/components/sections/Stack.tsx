import { secciones } from '../../data/perfil'
import { stack } from '../../data/stack'
import { Chip, ListaChips } from '../ui/Chip'
import { Seccion } from '../ui/Seccion'

export function Stack() {
  return (
    <Seccion info={secciones.stack}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
        {stack.map((grupo) => (
          <div key={grupo.titulo}>
            <h3 className="mt-0 mb-2.5 font-display text-base font-semibold">{grupo.titulo}</h3>
            <ListaChips>
              {grupo.tecnologias.map((t) => (
                <Chip key={t.nombre} destacada={t.destacada}>
                  {t.nombre}
                </Chip>
              ))}
            </ListaChips>
          </div>
        ))}
      </div>
    </Seccion>
  )
}
