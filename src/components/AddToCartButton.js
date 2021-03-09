import { useContext } from "react"
import CartContext from "../context/CartContext"

function AddToCartButton({ id, product }) {
  const { cart, cartDispatch } = useContext(CartContext)

  // If product is not yet on cart, show "Add to Cart"
  if (!cart || !cart.some(item => item.product.id === id)) {
    return (
      <button
        type="button"
        className="btn btn-success"
        onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: { product } })}
      >
        Add to Cart
      </button>
    )
  }

  // Otherwise show it is added
  return (
    <button type="button" className="btn btn-primary added-to-cart-btn">
      <i className="fas fa-check"></i> Added to Cart
    </button>
  )
}

export default AddToCartButton
