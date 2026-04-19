import Button from '../atoms/Button'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__emoji" aria-hidden="true">
        {product.emoji}
      </div>
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__description">{product.description}</p>
      <div className="product-card__footer">
        <strong>{product.price} TL</strong>
        <Button>Sepete Ekle</Button>
      </div>
    </article>
  )
}
