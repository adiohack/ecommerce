import React from "react";
import "./styles.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header__navigation">
          <a href="/">Women</a>
          <a href="/">Men</a>
          <a href="/">Kids</a>
        </div>
        <div className="actions">
          <a href="/">$</a>
          <a href="/">
            <img src="./icons8-cart-24.png" alt="cart" />
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
