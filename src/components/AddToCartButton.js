import { useContext } from "react"
import CartContext from "../context/CartContext"

function AddToCartButton({ id, product }) {
  const { cart, cartDispatch } = useContext(CartContext)

  // If the item is already on the cart, show it is added
  if (cart && cart.some(item => item.product.id === id)) {
    return (
      <button
        type="button"
        className="btn btn-primary added-to-cart-btn"
        onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: { product_id: id } })}
      >
        <i className="fas fa-check"></i> Added to Cart
      </button>
    )
  }

  // Otherwise, show "Add to Cart"
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

export default AddToCartButton
