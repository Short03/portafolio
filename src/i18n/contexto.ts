import { createContext, useContext } from 'react'
import type { Idioma, Texto } from '../types'
import { textosUi } from './ui'

/** Devuelve el texto en el idioma pedido; un string simple es igual en ambos. */
export function traducir(texto: Texto, idioma: Idioma): string {
  return typeof texto === 'string' ? texto : texto[idioma]
}

export interface ValorIdioma {
  idioma: Idioma
  cambiarIdioma: (idioma: Idioma) => void
}

export const ContextoIdioma = createContext<ValorIdioma | null>(null)

/** Idioma actual, función para traducir datos y textos de la interfaz. */
export function useIdioma() {
  const valor = useContext(ContextoIdioma)
  if (!valor) throw new Error('useIdioma debe usarse dentro de <IdiomaProvider>')

  const { idioma, cambiarIdioma } = valor
  return {
    idioma,
    cambiarIdioma,
    t: (texto: Texto) => traducir(texto, idioma),
    ui: textosUi[idioma],
  }
}
