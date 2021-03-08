import { Link } from "react-router-dom"

function ProductCard({ id, title, image, price }) {
  return (
    <article className="product-card">
      <Link to={`/products/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
      </Link>
      <div className="product-footer">
        <span className="product-price">${price}</span>
        <button type="button" className="btn btn-success">
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
