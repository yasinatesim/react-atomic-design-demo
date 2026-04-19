import { expect, userEvent, within } from '@storybook/test'
import ProductCard from './ProductCard'

export default {
  title: 'Organisms/ProductCard',
  component: ProductCard,
  args: {
    product: {
      id: 1,
      emoji: '⌨️',
      title: 'Mechanical Keyboard',
      description: 'Hot-swappable, RGB destekli kompakt klavye.',
      price: 2499,
    },
  },
}

export const Default = {}

export const WithInteraction = {
  args: {
    product: {
      id: 1,
      emoji: '⌨️',
      title: 'Mechanical Keyboard',
      description: 'Hot-swappable, RGB destekli kompakt klavye.',
      price: 2499,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Sepete Ekle' })
    await userEvent.click(button)
    await expect(button).toBeInTheDocument()
  },
}
