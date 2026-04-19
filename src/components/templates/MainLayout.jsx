import Header from '../organisms/Header'

export default function MainLayout({ query, onQueryChange, onSearch, children }) {
  return (
    <div className="layout">
      <Header
        query={query}
        onQueryChange={onQueryChange}
        onSearch={onSearch}
      />
      <main className="layout__content">{children}</main>
    </div>
  )
}
