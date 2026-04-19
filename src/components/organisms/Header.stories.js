import { expect, fn, userEvent, within } from '@storybook/test'
import Header from './Header'

export default {
  title: 'Organisms/Header',
  component: Header,
  args: {
    query: '',
    onQueryChange: fn(),
    onSearch: fn(),
  },
}

export const Default = {}

export const WithInteraction = {
  args: {
    onSearch: fn(),
    onQueryChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'klavye')
    const button = canvas.getByRole('button', { name: 'Ara' })
    await userEvent.click(button)
    await expect(args.onSearch).toHaveBeenCalled()
  },
}
