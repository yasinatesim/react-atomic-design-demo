import Button from '../atoms/Button'
import SearchBox from '../molecules/SearchBox'

export default function Header({ query, onQueryChange, onSearch }) {
  return (
    <header className="header">
      <div className="header__brand">ShopSphere</div>
      <SearchBox
        query={query}
        onQueryChange={onQueryChange}
        onSearch={onSearch}
      />
      <Button variant="secondary">Sepetim</Button>
    </header>
  )
}
