import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Sepete Ekle',
    variant: 'primary',
  },
}

export const Primary = {}

export const Secondary = {
  args: {
    children: 'Detay',
    variant: 'secondary',
  },
}
