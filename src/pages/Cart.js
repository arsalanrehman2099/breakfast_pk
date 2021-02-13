import React from "react";
import PageHeader from "../components/others/PageHeader";
import CartList from "../components/cart/CartList";
import CartAmount from "../components/cart/CartAmount";

function Cart() {
  return (
    <div className="cart-page">
      <PageHeader title="Cart" />
      <CartList />
      
      <CartAmount/>
    </div>
  );
}

export default Cart;

//JSON.parse(localStorage.getItem("myCart"))
