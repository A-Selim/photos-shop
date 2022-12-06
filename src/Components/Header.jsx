import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="page-link">
        Photos
      </Link>
      <Link to="/cart" className="page-link">
        Cart
      </Link>
    </nav>
  );
}
