import React from "react";
import CartItem from "./CartItem";

function CartList() {
  const cartList = JSON.parse(localStorage.getItem("myCart"));
  
  if (isEmpty(cartList)) {
    return (
      <div className="empty-cart-container">
        <div>
          <img src="images/empty-cart2.png" alt="" />
        </div>
        <p>"cart is empty"</p>
      </div>
    );
  } else {
    return (
      <div className="cart-list-container">
        {Object.entries(cartList).map(([key, value]) => {
          return (
            <CartItem
              key={value.id}
              id={value.id}
              name={value.name}
              imgUrl={value.imgUrl}
              desc={value.desc}
              unit_price={value.unit_price}
              qty={value.qty}
            />
          );
        })}
      </div>
    );
  }

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
}

export default CartList;
