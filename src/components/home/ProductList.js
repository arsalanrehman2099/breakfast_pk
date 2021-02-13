import React from "react";
import {useHistory} from 'react-router-dom'
import ProductArray from "../../models/product";
import ProductItem from "../product/ProductItem";

function ProductList() {
  
  const history = useHistory();

  return (
    <div className="home-product-list-container">
      <div className="heading">
        <div className="text">
          <h3>Products</h3>
        </div>
        <div className="btn">
          <button onClick={()=>history.push('/products')}>More</button>
        </div>
      </div>

      {ProductArray.slice(0,5).map(function (p) {
       
        return (
          <ProductItem
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            imgUrl={p.imgUrl}
            quantity={p.quantity}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
