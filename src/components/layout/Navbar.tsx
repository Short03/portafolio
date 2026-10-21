import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { perfil, secciones } from '../../data/perfil'
import { useSeccionActiva } from '../../hooks/useSeccionActiva'
import { useIdioma } from '../../i18n/contexto'
import { BotonIdioma } from '../ui/BotonIdioma'

const enlaces = Object.values(secciones)
// Incluye "inicio" para que, al estar en el hero, ningún enlace quede marcado.
const idsObservados = ['inicio', ...enlaces.map((s) => s.id)] as const

export function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const botonRef = useRef<HTMLButtonElement>(null)
  const activa = useSeccionActiva(idsObservados)
  const { t, ui } = useIdioma()

  // Con el menú abierto, Escape lo cierra y regresa el foco al botón.
  useEffect(() => {
    if (!abierto) return
    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        setAbierto(false)
        botonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', alPresionar)
    return () => document.removeEventListener('keydown', alPresionar)
  }, [abierto])

  const cerrar = () => setAbierto(false)

  const claseEnlace = (id: string) =>
    clsx(
      'inline-flex min-h-11 items-center no-underline hover:text-tinta',
      activa === id
        ? 'text-tinta underline decoration-acento decoration-2 underline-offset-8'
        : 'text-tenue',
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-fondo/80 backdrop-blur-md">
      <nav
        aria-label={ui.navegacion}
        className="mx-auto flex h-16 max-w-[1040px] items-center justify-between gap-4 px-5 font-mono text-[13px]"
      >
        <a
          href="#inicio"
          className="inline-flex min-h-11 items-center text-tenue no-underline hover:text-tinta"
        >
          {perfil.dominio}
        </a>

        <div className="flex items-center gap-[18px]">
          <ul className="m-0 hidden list-none gap-[18px] p-0 md:flex">
            {enlaces.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={claseEnlace(s.id)}
                  aria-current={activa === s.id ? 'location' : undefined}
                >
                  {t(s.titulo)}
                </a>
              </li>
            ))}
            <li>
              <a href={perfil.cv.ruta} download className={claseEnlace('cv')}>
                {perfil.cv.etiquetaCorta}
              </a>
            </li>
          </ul>

          {/* Fuera del menú: en móvil se ve sin tener que abrirlo. */}
          <BotonIdioma />

          <button
            ref={botonRef}
            type="button"
            className="-mr-2.5 -ml-2 inline-grid size-11 cursor-pointer place-items-center rounded-md text-tinta md:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? ui.cerrarMenu : ui.abrirMenu}
            onClick={() => setAbierto((a) => !a)}
          >
            {abierto ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </nav>

      <div id="menu-movil" hidden={!abierto} className="border-t border-linea bg-fondo md:hidden">
        <ul className="m-0 flex list-none flex-col p-0 px-5 py-2 font-mono text-[15px]">
          {enlaces.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={cerrar}
                className={clsx(claseEnlace(s.id), 'w-full')}
                aria-current={activa === s.id ? 'location' : undefined}
              >
                {t(s.titulo)}
              </a>
            </li>
          ))}
          <li>
            <a
              href={perfil.cv.ruta}
              download
              onClick={cerrar}
              className={clsx(claseEnlace('cv'), 'w-full')}
            >
              {t(perfil.cv.etiqueta)}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
