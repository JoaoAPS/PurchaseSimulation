const localStorageCart = localStorage.getItem("cart")
const initialCart = localStorageCart ? localStorageCart : []

function cartReducer(prev, action) {
  // Add an item to the cart
  if (action.type === "ADD_TO_CART") {
    // If it is already on the cart, do nothing
    if (prev.some(item => item.product.id === action.payload.product.id)) return prev

    const new_cart = [...prev, { product: action.payload.product, qnt: 1 }]

    localStorage.setItem("cart", new_cart)
    return new_cart
  }

  // Change the quantity of products in the cart by an amount action.payload.qny_change
  if (action.type === "UPDATE_CART_PRODUCT_QNT") {
    // If the product is not already on the cart, do nothing
    if (!prev.some(item => item.product.id === action.payload.product.id)) return prev

    const new_cart = prev.map(item => {
      if (item.product.id === action.payload.product_id) {
        item.qnt += action.payload.qnt_change
      }
      return item
    })

    localStorage.setItem("cart", new_cart)
    return new_cart
  }

  // Remove an item from the cart
  if (action.type === "REMOVE_FROM_CART") {
    // If the product is not already on the cart, do nothing
    if (!prev.some(item => item.product.id === action.payload.product.id)) return prev

    const new_cart = prev.filter(item => item.product.id !== action.payload.product_id)

    localStorage.setItem("cart", new_cart)
    return new_cart
  }

  return prev
}

export { cartReducer, initialCart }
