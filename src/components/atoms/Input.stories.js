import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {
    value: '',
    placeholder: 'Ürün ara...',
    onChange: () => {},
  },
}

export const Default = {}

export const WithValue = {
  args: {
    value: 'Mechanical Keyboard',
  },
}
