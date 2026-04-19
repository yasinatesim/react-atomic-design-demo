import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Sepete Ekle</Button>)
    expect(screen.getByRole('button', { name: 'Sepete Ekle' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Tıkla</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies primary variant class by default', () => {
    render(<Button>Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('button--primary')
  })

  it('applies secondary variant class when specified', () => {
    render(<Button variant="secondary">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('button--secondary')
  })
})
