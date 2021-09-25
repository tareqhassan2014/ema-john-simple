import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/order">Review order</a>
        <a href="/inventory">Mange inventory</a>
      </nav>
    </div>
  );
};

export default Header;
