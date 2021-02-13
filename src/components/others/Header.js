import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [clickedTag, setClickedTag] = useState("Home");
  let location = useLocation();

  const clickedStyle = {
    border: "1px solid white",
    color: "white",
    borderRadius: "5px",
  };

  useEffect(() => {
    if (location.pathname === "/home") setClickedTag("Home");
    else if (location.pathname === "/products") setClickedTag("Products");
    else if (location.pathname === "/deals") setClickedTag("Deals");
    else if (location.pathname === "/cart") setClickedTag("Cart");
    else if (location.pathname === "/aboutus") setClickedTag("Aboutus");
  },[location.pathname]);

  return (
    <div className="header">
      <h1>breakfast.pk</h1>
      <ul>
        <Link to="/" className="link">
          <li style={clickedTag === "Home" ? clickedStyle : {}}>Home</li>
        </Link>
        <Link to="/products" className="link">
          <li style={clickedTag === "Products" ? clickedStyle : {}}>
            Products
          </li>
        </Link>
        <Link to="/deals" className="link">
          <li style={clickedTag === "Deals" ? clickedStyle : {}}>Deals</li>
        </Link>
        <Link to="/cart" className="link">
          <li style={clickedTag === "Cart" ? clickedStyle : {}}>Cart</li>
        </Link>
        <Link to="/aboutus" className="link">
          <li style={clickedTag === "Aboutus" ? clickedStyle : {}}>About Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
