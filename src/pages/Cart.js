import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"
import CartItemCard from "../components/CartItemCard"

function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart && cart.length > 0 ? <CartNotEmpty cart={cart} /> : <CartEmpty />}
    </div>
  )
}

// Shown when there are no items in the cart
const CartEmpty = () => (
  <>
    <p>It seems yout cart is empty.</p>
    <Link to="/products" className="go-back-link">
      &#8592; Go back shopping
    </Link>
  </>
)

// Shown when there are items in the cart
const CartNotEmpty = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.qnt * item.product.price, 0)

  return (
    <div className="cart-page">
      <div className="cart-item-list">
        {cart.map(item => (
          <CartItemCard item={item} key={item.product.id} />
        ))}
      </div>

      <h3 className="cart-total">
        Total: <span className="total-price">${totalPrice.toFixed(2)}</span>
      </h3>

      <Link to="/thank-you" className="btn btn-success finish-btn">
        Finish Order
      </Link>
    </div>
  )
}

export default Cart
