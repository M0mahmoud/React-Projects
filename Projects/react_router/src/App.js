import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Products from "./components/Products";
import ProductsDetail from "./components/ProductsDetail";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductsDetail />
          </Route>
          <Route path="/" exact>
            <Redirect to="welcome" />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
