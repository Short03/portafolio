import { formacion } from '../../data/formacion'
import { secciones } from '../../data/perfil'
import { useIdioma } from '../../i18n/contexto'
import { Seccion } from '../ui/Seccion'

export function Formacion() {
  const { t } = useIdioma()

  return (
    <Seccion info={secciones.formacion}>
      <div className="grid gap-[18px]">
        {formacion.map((estudio) => (
          <div key={estudio.titulo.es}>
            <h3 className="m-0 font-display text-[21px] font-semibold tracking-[-0.01em]">
              {t(estudio.titulo)}
            </h3>
            <p className="m-0 text-tenue">{t(estudio.detalle)}</p>
          </div>
        ))}
      </div>
    </Seccion>
  )
}
