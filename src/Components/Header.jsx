import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotosContext } from "../../src/PhotosContext";

export default function Header() {
  const { cart } = useContext(PhotosContext);

  return (
    <nav className="navbar">
      <Link to="/" className="page-link">
        Photos
      </Link>
      <Link to="/cart" className="page-link">
        <i className={`cart-icon-header ri-shopping-cart-2-${cart.length > 0 ? "fill" : "line"}`}>
          <span className="cart-items-count">{!!cart.length && cart.length}</span>
        </i>
      </Link>
    </nav>
  );
}
