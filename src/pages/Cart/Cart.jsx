import React, { useContext } from "react";
import { PhotosContext } from "../../PhotosContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart } = useContext(PhotosContext);

  const cartElements = cart.map((photo) => {
    return (
      <div key={photo.id} className="cart-item">
        <i className="delete-icon ri-delete-bin-6-line" onClick={() => removeFromCart(photo)}></i>
        <div className="photo-thumbnail">
          <img src={photo.url} />
        </div>
        <p className="price">$5</p>
      </div>
    );
  });

  return (
    <div className="cart-container">
      {cart.length ? cartElements : <p className="cart-empty">Cart is empty. Please add some photos</p>}
      {cart.length > 0 && <p className="total">Total: <span className="total-sum">${cart.length * 5}</span></p>}
    </div>
  );
}
