import { useContext } from "react"
import Popup from "reactjs-popup"
import CartContext from "../context/CartContext"

function CartItemCard({ item }) {
  const { cartDispatch } = useContext(CartContext)

  return (
    <div className="cart-item">
      <img src={item.product.image} alt={item.product.title} />

      <p className="product-title">{item.product.title}</p>

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

        <button className="btn btn-primary" onClick={handleConfirm}>
          Remove it
        </button>
        <button className="btn btn-danger" onClick={close}>
          Cancel
        </button>
      </div>
    )}
  </Popup>
)

export default CartItemCard
