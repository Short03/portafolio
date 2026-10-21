import { formacion } from '../../data/formacion'
import { secciones } from '../../data/perfil'
import { Seccion } from '../ui/Seccion'

export function Formacion() {
  return (
    <Seccion info={secciones.formacion}>
      <div className="grid gap-[18px]">
        {formacion.map((estudio) => (
          <div key={estudio.titulo}>
            <h3 className="m-0 font-display text-[21px] font-semibold tracking-[-0.01em]">
              {estudio.titulo}
            </h3>
            <p className="m-0 text-tenue">{estudio.detalle}</p>
          </div>
        ))}
      </div>
    </Seccion>
  )
}
