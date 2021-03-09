const localStorageCart = localStorage.getItem("cart")
const initialCart = localStorageCart ? JSON.parse(localStorageCart) : []

function cartReducer(prev, action) {
  // Add an item to the cart
  if (action.type === "ADD_TO_CART") {
    // If it is already on the cart, do nothing
    if (prev.some(item => item.product.id === action.payload.product.id)) return prev

    const new_cart = [...prev, { product: action.payload.product, qnt: 1 }]

    localStorage.setItem("cart", JSON.stringify(new_cart))
    return new_cart
  }

  // Change the quantity of products in the cart by an amount action.payload.qnt_change
  if (action.type === "UPDATE_CART_PRODUCT_QNT") {
    // If the product is not already on the cart, do nothing
    if (!prev.some(item => item.product.id === action.payload.product_id)) return prev

    const new_cart = prev.map(item => {
      if (item.product.id === action.payload.product_id) {
        let new_qnt = item.qnt + action.payload.qnt_change
        return { ...item, qnt: new_qnt < 0 ? 0 : new_qnt }
      }
      return item
    })

    localStorage.setItem("cart", JSON.stringify(new_cart))
    return new_cart
  }

  // Remove an item from the cart
  if (action.type === "REMOVE_FROM_CART") {
    // If the product is not already on the cart, do nothing
    if (!prev.some(item => item.product.id === action.payload.product_id)) return prev

    const new_cart = prev.filter(item => item.product.id !== action.payload.product_id)

    localStorage.setItem("cart", JSON.stringify(new_cart))
    return new_cart
  }

  // Clear the cart
  if (action.type === "CLEAR_CART") {
    localStorage.setItem("cart", "[]")
    return []
  }

  return prev
}

export { cartReducer, initialCart }
