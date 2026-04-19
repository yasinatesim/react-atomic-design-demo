import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input value="" onChange={() => {}} placeholder="Ürün ara" />)
    expect(screen.getByPlaceholderText('Ürün ara')).toBeInTheDocument()
  })

  it('calls onChange when value changes', () => {
    const onChange = vi.fn()
    render(<Input value="" onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'klavye' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('shows the current value', () => {
    render(<Input value="test" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toHaveValue('test')
  })
})
