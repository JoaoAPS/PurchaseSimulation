import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

function Header() {
  const { cart } = useContext(CartContext)

  return (
    <header>
      <Link to="/" className="site-logo">
        My Site
      </Link>

      <Link to="/cart" className="left-header">
        <i className="fas fa-shopping-cart"></i>
        <span>{cart.length}</span>
      </Link>
    </header>
  )
}

export default Header
