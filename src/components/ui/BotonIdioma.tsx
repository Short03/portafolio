import { Languages } from 'lucide-react'
import { useIdioma } from '../../i18n/contexto'

/** Cambia entre español e inglés. Muestra el idioma al que cambia ("EN" o "ES"). */
export function BotonIdioma() {
  const { idioma, cambiarIdioma, ui } = useIdioma()
  const otro = idioma === 'es' ? 'en' : 'es'

  return (
    <button
      type="button"
      // El texto del botón está en el otro idioma: lang hace que el lector de pantalla lo pronuncie bien.
      lang={otro}
      onClick={() => cambiarIdioma(otro)}
      className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-linea bg-transparent px-2.5 font-mono text-[13px] text-tinta hover:border-tinta"
    >
      <Languages aria-hidden="true" className="size-4" />
      {ui.etiquetaOtroIdioma}
      <span className="sr-only">{ui.cambiarIdioma}</span>
    </button>
  )
}
