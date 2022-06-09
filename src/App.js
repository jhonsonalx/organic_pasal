import React from "react";
import { Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
import About from "./components/other/About";
import Contact from "./components/other/Contact";
import Cart from "./components/pages/Cart";
import Wishlist from "./components/pages/Wishlist";
import Product from "./components/product/Product-details";



export default function App() {
  return (
    <React.Fragment>
      <Switch>
        {/* Main Pages */}
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/wishlist">
          <Wishlist/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/product">
          <Product/>
        </Route>
         <Route exact path="/">
           <Checkout/>
         </Route>


           
      </Switch>
    </React.Fragment>
  );
}

