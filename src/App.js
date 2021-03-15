import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
// Context
import CartContext from "./context/CartContext"
import { cartReducer, initialCart } from "./context/cartReducer"
// Components
import Catalog from "./pages/Catalog"
import ProductPage from "./pages/ProductPage"
import Cart from "./pages/Cart"
import ThankYou from "./pages/ThankYou"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [cart, cartDispatch] = React.useReducer(cartReducer, initialCart)

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      <BrowserRouter>
        <div id="App">
          <Header />

          <Switch>
            <Route path="/" exact>
              <Redirect to="/products" />
            </Route>

            <Route path="/cart" exact>
              <Cart />
            </Route>

            <Route path="/products" exact>
              <Catalog />
            </Route>

            <Route path="/products/:id" children={<ProductPage />}></Route>

            <Route path="/thank-you">
              <ThankYou />
            </Route>
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
