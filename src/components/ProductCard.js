import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

function ProductCard({ product }) {
  const { cartDispatch } = useContext(CartContext)
  const { id, title, image, price } = product

  return (
    <article className="product-card">
      <Link to={`/products/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
      </Link>
      <div className="product-footer">
        <span className="product-price">${price}</span>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: { product } })}
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
