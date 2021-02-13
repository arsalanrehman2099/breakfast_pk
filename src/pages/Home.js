import React from "react";
import Slideshow from "../components/home/Slideshow";
import ProductList from "../components/home/ProductList";
import DealList from "../components/home/DealList";

function Home() {
  return (
    <div>
      <Slideshow />
      <ProductList />
      <hr className="home-hr"/>
      <DealList/>
    </div>
  );
}

export default Home;
