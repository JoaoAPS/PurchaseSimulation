import { useContext } from "react"
import CartContext from "../context/CartContext"

function CartItemCard({ item }) {
  const { cartDispatch } = useContext(CartContext)

  return (
    <div className="cart-item">
      <img src={item.product.image} alt={item.product.title} />

      <p className="product-title">{item.product.title}</p>

      <span className="product-price">${item.product.price}</span>

      <i
        className="fas fa-trash"
        onClick={() =>
          cartDispatch({ type: "REMOVE_FROM_CART", payload: { product_id: item.product.id } })
        }
      ></i>

      {/* Quantity changer */}
      <div className="item-qnt-manager">
        <i
          className="fas fa-arrow-left"
          onClick={() =>
            cartDispatch({
              type: "UPDATE_CART_PRODUCT_QNT",
              payload: { product_id: item.product.id, qnt_change: -1 },
            })
          }
        ></i>
        <span className="item-qnt">{item.qnt}</span>
        <i
          className="fas fa-arrow-right"
          onClick={() =>
            cartDispatch({
              type: "UPDATE_CART_PRODUCT_QNT",
              payload: { product_id: item.product.id, qnt_change: 1 },
            })
          }
        ></i>
      </div>

      <span className="total-item-price">${item.qnt * item.product.price}</span>
    </div>
  )
}

export default CartItemCard
