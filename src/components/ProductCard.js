import { Link } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"

function ProductCard({ product }) {
  const { id, title, image, price } = product

  return (
    <article className="product-card">
      <Link to={`/products/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
      </Link>

      <div className="product-footer">
        <span className="product-price">${price.toFixed(2)}</span>

        <AddToCartButton id={id} product={product} />
      </div>
    </article>
  )
}

export default ProductCard
