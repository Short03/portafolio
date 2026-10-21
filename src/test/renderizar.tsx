import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { IdiomaProvider } from '../i18n/IdiomaProvider'
import type { Idioma } from '../types'

/** Como render() de Testing Library, pero dentro del proveedor de idioma. */
export function renderizar(componente: ReactElement, idioma: Idioma = 'es') {
  return render(<IdiomaProvider inicial={idioma}>{componente}</IdiomaProvider>)
}
