import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('renders brand name', () => {
    render(<Header query="" onQueryChange={() => {}} onSearch={() => {}} />)
    expect(screen.getByText('ShopSphere')).toBeInTheDocument()
  })

  it('renders search box', () => {
    render(<Header query="" onQueryChange={() => {}} onSearch={() => {}} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders sepetim button', () => {
    render(<Header query="" onQueryChange={() => {}} onSearch={() => {}} />)
    expect(screen.getByRole('button', { name: 'Sepetim' })).toBeInTheDocument()
  })
})
