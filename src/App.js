import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Catalog from "./pages/Catalog"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>

          <Route path="/products" exact>
            <Catalog />
          </Route>

          <Route path="/products/:id" children={<ProductPage />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
