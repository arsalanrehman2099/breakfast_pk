import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

function QtyModal(props) {
  const history = useHistory();
  const [qtyCounter, setCounter] = useState(1);
  const [pStyle, setStyle] = useState({
    fontSize: "12px",
    marginBottom: "10px",
    fontFamily: "Raleway, sans-serif",
    display: "none",
    transition:' 0.3s',
    color:'green'
  })

  const paddingStyle = {
    padding: props.padding,
  };

  useEffect(() => {
    setCounter(getPrevQty());
  }, []);

  function insertCart() {
    //     localStorage.clear();
    var fetchedCart = localStorage.getItem("myCart");
    var cart = JSON.parse(fetchedCart);

    cart = {
      ...cart,
      [props.id]: {
        id: props.id,
        name: props.name,
        desc: props.quantity,
        unit_price: props.price,
        imgUrl: props.imgUrl,
        qty: qtyCounter,
      },
    };

    setStyle( {
      ...pStyle,
      display: "block",
    });
    localStorage.setItem("myCart", JSON.stringify(cart));
  }

  function showCart() {
    history.push('/cart')
  }

  function getPrevQty() {
    var fetchedCart = localStorage.getItem("myCart");
    var cart = JSON.parse(fetchedCart);

    var qty = 1;

    if (cart) {
      if (cart[props.id]) {
        qty = cart[props.id].qty;
      }
    }

    return qty;
  }


  return (
    <div className="qty-container" style={paddingStyle}>
      <p style={pStyle}>Item has been added.</p>
      <img src={props.imgUrl} alt="" />

      <h4 className="name">{props.name}</h4>
      <p className="qty">{props.quantity}</p>

      <hr />
      <p className="price">Rs {props.price}.00 /-</p>

      <hr />
      <div className="qty-inp">
        <button onClick={() => qtyCounter > 1 && setCounter(qtyCounter - 1)}>
          -
        </button>
        <p>{qtyCounter}</p>
        <button onClick={() => setCounter(qtyCounter + 1)}>+</button>
      </div>

      <button onClick={insertCart} className="add-to-cart">
        Add To Cart
      </button>

      <button onClick={showCart} className="add-to-cart">
        Show Cart
      </button>

      <button className="close" onClick={props.close}>
        X
      </button>
    </div>
  );
}

export default QtyModal;
