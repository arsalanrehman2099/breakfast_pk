import React from "react";
import Header from "./components/others/Header";
import Footer from "./components/others/Footer";
import Home from "./pages/Home";
import Products from "./pages/Product";
import Deals from "./pages/Deal";
import Cart from "./pages/Cart";
import AboutUs from "./pages/Aboutus";
import OrderForm from './pages/OrderForm'
import OrderSubmit from './pages/OrderSubmit'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/deals" component={Deals} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/order-form" component={OrderForm} />
          <Route exact path="/order-submit" component={OrderSubmit} />
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
