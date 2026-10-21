import clsx from 'clsx'
import type { ReactNode } from 'react'

interface ChipProps {
  children: string
  destacada?: boolean
  tamano?: 'normal' | 'chico'
}

/** Etiqueta de tecnología. Se usa dentro de una lista <ul>. */
export function Chip({ children, destacada = false, tamano = 'normal' }: ChipProps) {
  return (
    <li
      className={clsx(
        'rounded-md border font-mono',
        tamano === 'normal' ? 'px-2.5 py-[5px] text-[13px]' : 'px-2 py-[3px] text-xs',
        destacada ? 'border-transparent bg-acento-suave text-tinta' : 'border-linea bg-superficie',
      )}
    >
      {children}
    </li>
  )
}

/** Lista de chips con el espaciado de la referencia. */
export function ListaChips({ children, className }: { children: ReactNode; className?: string }) {
  return <ul className={clsx('m-0 flex list-none flex-wrap gap-2 p-0', className)}>{children}</ul>
}
