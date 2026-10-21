import { Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { perfil, secciones } from '../../data/perfil'
import { Seccion } from '../ui/Seccion'

type EstadoCopia = 'inicial' | 'copiado' | 'manual'

const textoBoton: Record<EstadoCopia, string> = {
  inicial: 'Copiar',
  copiado: 'Copiado',
  manual: 'Selecciona y copia',
}

interface BotonCopiarProps {
  texto: string
  /** id del elemento con el texto: describe al botón y se selecciona si el portapapeles falla. */
  idObjetivo: string
  aviso: string
}

function BotonCopiar({ texto, idObjetivo, aviso }: BotonCopiarProps) {
  const [estado, setEstado] = useState<EstadoCopia>('inicial')

  // Después de copiar, regresa a "Copiar".
  useEffect(() => {
    if (estado !== 'copiado') return
    const temporizador = setTimeout(() => setEstado('inicial'), 1600)
    return () => clearTimeout(temporizador)
  }, [estado])

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto)
      setEstado('copiado')
    } catch {
      // Sin permiso de portapapeles: selecciona el texto para copiarlo a mano.
      const elemento = document.getElementById(idObjetivo)
      const seleccion = window.getSelection()
      if (elemento && seleccion) {
        const rango = document.createRange()
        rango.selectNodeContents(elemento)
        seleccion.removeAllRanges()
        seleccion.addRange(rango)
      }
      setEstado('manual')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copiar}
        aria-describedby={idObjetivo}
        className="inline-flex min-h-11 cursor-pointer items-center rounded-md border border-linea bg-transparent px-3 font-mono text-xs text-tenue hover:border-tinta hover:text-tinta"
      >
        {textoBoton[estado]}
      </button>
      <span role="status" className="sr-only">
        {estado === 'copiado' ? aviso : ''}
      </span>
    </>
  )
}

const claseDato =
  'inline-flex min-h-11 items-center gap-2 rounded-lg border border-linea bg-superficie px-3 font-mono text-[15px] [overflow-wrap:anywhere] no-underline'

export function Contacto() {
  const { correo, telefono, telefonoEnlace } = perfil.contacto

  return (
    <Seccion info={secciones.contacto}>
      <div className="grid gap-3.5">
        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${correo}`} className={claseDato}>
            <Mail aria-hidden="true" className="size-4 shrink-0" />
            <span id="dato-correo">{correo}</span>
          </a>
          <BotonCopiar texto={correo} idObjetivo="dato-correo" aviso="Correo copiado" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href={`tel:${telefonoEnlace}`} className={claseDato}>
            <Phone aria-hidden="true" className="size-4 shrink-0" />
            <span id="dato-telefono">{telefono}</span>
          </a>
          <BotonCopiar texto={telefono} idObjetivo="dato-telefono" aviso="Teléfono copiado" />
        </div>
      </div>
    </Seccion>
  )
}
