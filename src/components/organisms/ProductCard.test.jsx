import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

const mockProduct = {
  id: 1,
  emoji: '⌨️',
  title: 'Mechanical Keyboard',
  description: 'Hot-swappable, RGB destekli kompakt klavye.',
  price: 2499,
}

describe('ProductCard', () => {
  it('renders product title', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument()
  })

  it('renders product description', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Hot-swappable, RGB destekli kompakt klavye.')).toBeInTheDocument()
  })

  it('renders product price', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('2499 TL')).toBeInTheDocument()
  })

  it('renders sepete ekle button', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByRole('button', { name: 'Sepete Ekle' })).toBeInTheDocument()
  })
})
