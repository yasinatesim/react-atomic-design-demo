import Button from '../atoms/Button'
import Input from '../atoms/Input'

export default function SearchBox({ query, onQueryChange, onSearch }) {
  return (
    <div className="search-box">
      <Input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Ürün ara"
      />
      <Button onClick={onSearch}>Ara</Button>
    </div>
  )
}
