import { render, screen, fireEvent } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders all products initially', () => {
    render(<HomePage />)
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument()
    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument()
    expect(screen.getByText('Wireless Headset')).toBeInTheDocument()
  })

  it('filters products when query matches title', () => {
    render(<HomePage />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'mouse' } })
    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument()
    expect(screen.queryByText('Mechanical Keyboard')).not.toBeInTheDocument()
    expect(screen.queryByText('Wireless Headset')).not.toBeInTheDocument()
  })

  it('shows no products when query matches nothing', () => {
    render(<HomePage />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'zzzzz' } })
    expect(screen.queryByText('Mechanical Keyboard')).not.toBeInTheDocument()
    expect(screen.queryByText('Gaming Mouse')).not.toBeInTheDocument()
  })

  it('filter is case-insensitive', () => {
    render(<HomePage />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'MOUSE' } })
    expect(screen.getByText('Gaming Mouse')).toBeInTheDocument()
  })
})
