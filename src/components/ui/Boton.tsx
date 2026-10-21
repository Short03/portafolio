import clsx from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variante = 'solido' | 'fantasma'

interface PropsComunes {
  variante?: Variante
  icono?: ReactNode
  children: ReactNode
  className?: string
}

// Unión discriminada: con `href` es un <a>; sin `href` es un <button>.
type PropsEnlace = PropsComunes &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string
    /** Abre en pestaña nueva con rel seguro. */
    externo?: boolean
  }

type PropsBoton = PropsComunes &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined
  }

export type BotonProps = PropsEnlace | PropsBoton

const estilos: Record<Variante, string> = {
  solido: 'border-tinta bg-tinta text-fondo',
  fantasma: 'border-linea bg-transparent text-tinta hover:border-tinta',
}

export function Boton(props: BotonProps) {
  const { variante = 'solido', icono, children, className, ...resto } = props
  const clases = clsx(
    'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border px-[18px] text-[15px] font-semibold no-underline motion-safe:transition-transform motion-safe:hover:-translate-y-px',
    estilos[variante],
    className,
  )
  const contenido = (
    <>
      {icono}
      {children}
    </>
  )

  if (resto.href !== undefined) {
    const { externo, ...enlace } = resto as Omit<PropsEnlace, keyof PropsComunes>
    return (
      <a
        {...enlace}
        className={clases}
        {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {contenido}
      </a>
    )
  }

  const boton = resto as Omit<PropsBoton, keyof PropsComunes>
  return (
    <button type="button" {...boton} className={clases}>
      {contenido}
    </button>
  )
}
