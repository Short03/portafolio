import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { proyectos } from '../../data/proyectos'
import { Proyectos } from './Proyectos'

test('dibuja una tarjeta por cada proyecto de proyectos.ts', () => {
  render(<Proyectos />)

  const tarjetas = screen.getAllByRole('article')

  expect(tarjetas).toHaveLength(proyectos.length)
  for (const proyecto of proyectos) {
    expect(screen.getByRole('heading', { level: 3, name: proyecto.nombre })).toBeInTheDocument()
  }
})
