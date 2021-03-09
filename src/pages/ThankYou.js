import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

function ThankYou() {
  const { cartDispatch } = useContext(CartContext)

  // Clear the cart
  useEffect(() => cartDispatch({ type: "CLEAR_CART" }), [])

  return (
    <div className="thank-you-page">
      <h2>Thank you for your purchase! =D</h2>
      <h4>We hope to see you soon again.</h4>

      <Link to="/products" className="go-back-link">
        &#8592; Go back shopping
      </Link>
    </div>
  )
}

export default ThankYou
