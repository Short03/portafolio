import { secciones } from '../../data/perfil'
import { proyectos } from '../../data/proyectos'
import { Seccion } from '../ui/Seccion'
import { TarjetaProyecto } from '../ui/TarjetaProyecto'

export function Proyectos() {
  return (
    <Seccion info={secciones.proyectos}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.nombre} proyecto={proyecto} />
        ))}
      </div>
    </Seccion>
  )
}
