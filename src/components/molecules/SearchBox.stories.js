import SearchBox from './SearchBox'

export default {
  title: 'Molecules/SearchBox',
  component: SearchBox,
  args: {
    query: '',
    onQueryChange: () => {},
    onSearch: () => {},
  },
}

export const Default = {}
