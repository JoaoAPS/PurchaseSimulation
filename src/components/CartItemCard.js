import { useContext } from "react"
import { Link } from "react-router-dom"
import Popup from "reactjs-popup"
import CartContext from "../context/CartContext"

function CartItemCard({ item }) {
  const { cartDispatch } = useContext(CartContext)

  return (
    <div className="cart-item">
      <Link to={`products/${item.product.id}`} className="cart-item-img">
        <img src={item.product.image} alt={item.product.title} />
      </Link>

      <Link to={`products/${item.product.id}`} className="product-title">
        <p>{item.product.title}</p>
      </Link>

      <span className="product-price">${item.product.price.toFixed(2)}</span>

      {/* Remove icon */}
      <ConfirmRemovePopup
        trigger={<i className="fas fa-trash"></i>}
        handleConfirm={() =>
          cartDispatch({ type: "REMOVE_FROM_CART", payload: { product_id: item.product.id } })
        }
      />

      {/* Quantity changer */}
      <div className="item-qnt-manager">
        {/* Show confirmation modal if decreasing the quantity will remove the item */}
        {item.qnt === 1 ? (
          <ConfirmRemovePopup
            trigger={<i className="fas fa-arrow-left"></i>}
            handleConfirm={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: { product_id: item.product.id } })
            }
          />
        ) : (
          <i
            className="fas fa-arrow-left"
            onClick={() =>
              cartDispatch({
                type: "UPDATE_CART_PRODUCT_QNT",
                payload: { product_id: item.product.id, qnt_change: -1 },
              })
            }
          ></i>
        )}

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

      <span className="total-item-price">${(item.qnt * item.product.price).toFixed(2)}</span>
    </div>
  )
}

// Popup to confirm removing item
const ConfirmRemovePopup = ({ trigger, handleConfirm }) => (
  <Popup trigger={trigger} modal nested>
    {close => (
      <div className="confirm-modal">
        <h3>Remove item from the cart?</h3>

        <div className="btn-container">
          <button className="btn btn-danger" onClick={handleConfirm}>
            Remove it
          </button>
          <button className="btn btn" onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    )}
  </Popup>
)

export default CartItemCard
