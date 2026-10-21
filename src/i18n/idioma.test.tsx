import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, test } from 'vitest'
import { Navbar } from '../components/layout/Navbar'
import { Experiencia } from '../components/sections/Experiencia'
import { renderizar } from '../test/renderizar'

afterEach(() => {
  localStorage.clear()
})

test('el botón de idioma cambia la página a inglés y de regreso a español', async () => {
  const user = userEvent.setup()
  renderizar(
    <>
      <Navbar />
      <Experiencia />
    </>,
  )
  expect(screen.getByRole('heading', { level: 2, name: 'Experiencia' })).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: /switch to english/i }))

  expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'Freelance full stack developer' }),
  ).toBeInTheDocument()
  expect(document.documentElement.lang).toBe('en')
  expect(document.title).toBe('Adrián Short · Full Stack .NET Developer')
  expect(localStorage.getItem('idioma')).toBe('en')

  await user.click(screen.getByRole('button', { name: /cambiar a español/i }))

  expect(screen.getByRole('heading', { level: 2, name: 'Experiencia' })).toBeInTheDocument()
  expect(document.documentElement.lang).toBe('es')
})
