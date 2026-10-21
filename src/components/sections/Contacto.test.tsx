import { screen } from '@testing-library/react'
import { renderizar } from '../../test/renderizar'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import { perfil } from '../../data/perfil'
import { Contacto } from './Contacto'

test('el botón "Copiar" del correo copia el correo y cambia su texto a "Copiado"', async () => {
  // userEvent.setup() instala un portapapeles falso; lo espiamos para verificar qué se copió.
  const user = userEvent.setup()
  const escribir = vi.spyOn(navigator.clipboard, 'writeText')
  renderizar(<Contacto />)

  // aria-describedby une el botón con el correo, así distinguimos los dos botones "Copiar".
  const boton = screen.getByRole('button', {
    name: 'Copiar',
    description: perfil.contacto.correo,
  })
  await user.click(boton)

  expect(escribir).toHaveBeenCalledWith(perfil.contacto.correo)
  expect(boton).toHaveTextContent('Copiado')
  // El aviso para lectores de pantalla vive en una región role="status".
  expect(screen.getByText('Correo copiado')).toHaveAttribute('role', 'status')
})
