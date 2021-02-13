import React, { useState } from "react";

function CartItem(props) {
  const [qtyCounter, setCounter] = useState(props.qty);

  var fetchedCart = localStorage.getItem("myCart");
  var cart = JSON.parse(fetchedCart);

  function increaseQty() {
    setCounter(qtyCounter + 1);
    cart[props.id].qty = qtyCounter + 1;
    localStorage.setItem("myCart", JSON.stringify(cart));
    window.location.reload(false);
  }

  function decreaseQty() {
    if (qtyCounter > 1) {
      setCounter(qtyCounter - 1);
      cart[props.id].qty = qtyCounter - 1;
      localStorage.setItem("myCart", JSON.stringify(cart));
      window.location.reload(false);
    }
  }

  function removeItem() {
    delete cart[props.id];
    localStorage.setItem("myCart", JSON.stringify(cart));
    window.location.reload(false);
  }
  return (
    <div className="cart-container">
      <div className="img-div">
        <img src={props.imgUrl} alt="" />
      </div>
      <p>
        <span className="name">{props.name}</span> -{" "}
        <span className="price">Rs {props.unit_price} /-</span>
      </p>
      <div className="qty-div">
        <button onClick={removeItem} className="remove-cart">
          Remove
        </button>
        <button onClick={decreaseQty}>-</button>
        <p>{qtyCounter}</p>
        <button onClick={increaseQty}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
