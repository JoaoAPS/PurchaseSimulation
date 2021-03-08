import { BrowserRouter, Route, Switch } from "react-router-dom"
import Catalog from "./pages/Catalog"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <Switch>
          <Route path="/" exact>
            <Catalog />
          </Route>

          <Route path="/product/:id" children={<ProductPage />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
