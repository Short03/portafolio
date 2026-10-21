import { screen } from '@testing-library/react'
import { renderizar } from '../../test/renderizar'
import { expect, test } from 'vitest'
import { Hero } from './Hero'

test('el botón "Descargar CV" apunta al PDF y tiene el atributo download', () => {
  renderizar(<Hero />)

  const enlace = screen.getByRole('link', { name: 'Descargar CV' })

  expect(enlace).toHaveAttribute('href', '/cv-adrian-short.pdf')
  expect(enlace).toHaveAttribute('download')
})
