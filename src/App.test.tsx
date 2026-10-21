import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('dibuja la app', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})
