import { useMemo, useState } from 'react'
import ProductCard from '../components/organisms/ProductCard'
import MainLayout from '../components/templates/MainLayout'
import { products } from '../data/products'

export default function HomePage() {
  const [query, setQuery] = useState('')

  const filteredProducts = useMemo(
    () => products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  const handleSearch = () => {
    console.log(`Searching for: ${query}`)
  }

  return (
    <MainLayout query={query} onQueryChange={setQuery} onSearch={handleSearch}>
      <section className="page-intro">
        <h1>Öne Çıkan Ürünler</h1>
        <p>Atomic Design yaklaşımıyla oluşturulmuş örnek katalog ekranı.</p>
      </section>
      <section className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </MainLayout>
  )
}
