import Home from "./pages/home";
import React from 'react';
import { ProductList } from "./pages/productList";
import { Productpage } from "./pages/product_page";
import { Register } from "./pages/register";
import { LogIn } from "./pages/login";
import { Cart } from "./pages/cart";

const App = () => {
  return(   
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;