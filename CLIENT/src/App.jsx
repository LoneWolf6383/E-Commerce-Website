import React from 'react';
import { ProductList } from "./pages/productList";
import { Productpage } from "./pages/product_page";
import { Register } from "./pages/register";
import { LogIn } from "./pages/login";
import { Cart } from "./pages/cart";
import { Pay } from "./pages/pay";
import {Home} from "./pages/home"
import { BrowserRouter as Router,
         Routes, Route , Navigate} from "react-router-dom";

const App = () => {
  const user = true
  return(   
    <Router>
      <Routes>    
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/products/:id" element={<Productpage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LogIn/>}>
          {user ? <Navigate to="/"/> : <LogIn/>}
        </Route>
        <Route path="/register" element={<Register/>}>
          {user ?  <Route path="/" element={<Navigate replace to="/" />} /> : <Register/>}
        </Route>
      </Routes>
    </Router>
  );
};
export default App;