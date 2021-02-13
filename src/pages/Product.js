import React from "react";
import ProductArray from "../models/product";
import ProductItem from "../components/product/ProductItem";
import PageHeader from '../components/others/PageHeader'

function Product() {
  return (
    <div className="product-page">
      <PageHeader title="Products" />
      <div className="products">
        {ProductArray.map(function (p) {
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
    </div>
  );
}

export default Product;
