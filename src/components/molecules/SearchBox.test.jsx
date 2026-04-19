import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SearchBox from './SearchBox'

describe('SearchBox', () => {
  it('renders input and button', () => {
    render(<SearchBox query="" onQueryChange={() => {}} onSearch={() => {}} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ara' })).toBeInTheDocument()
  })

  it('calls onQueryChange when typing', () => {
    const onQueryChange = vi.fn()
    render(<SearchBox query="" onQueryChange={onQueryChange} onSearch={() => {}} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'klavye' } })
    expect(onQueryChange).toHaveBeenCalledWith('klavye')
  })

  it('calls onSearch when button clicked', () => {
    const onSearch = vi.fn()
    render(<SearchBox query="test" onQueryChange={() => {}} onSearch={onSearch} />)
    fireEvent.click(screen.getByRole('button', { name: 'Ara' }))
    expect(onSearch).toHaveBeenCalledTimes(1)
  })
})
