import React from "react";
import {useHistory} from 'react-router-dom'

function CartAmount() {
  var amount = 0;
  var fetchedCart = localStorage.getItem("myCart");
  var cartList = JSON.parse(fetchedCart);

  const history = useHistory();

  function generateAmount() {
    Object.entries(cartList).map(([key, value]) => {
      var q = value.qty;
      var price = parseInt(value.unit_price);
      var res = q * price;
      amount = amount + res;
    });

    return amount;
  }

  if (isEmpty(cartList)) {
    return <div></div>;
  } else {
    return (
      <div className="cart-amt-container">
        <hr />
        <p>
          Total Amount : <span>Rs {generateAmount()} /-</span>
        </p>
        <button onClick={()=>history.push('/order-form', 'access')}>Confirm Order  <span >→</span></button>
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

export default CartAmount;
