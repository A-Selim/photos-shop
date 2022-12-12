import React, { useContext } from "react";
import { PhotosContext } from "../../PhotosContext";
import "./Cart.css";

export default function Cart() {
  const { cart } = useContext(PhotosContext);

  const cartElements = cart.map((photo) => {
    return (
      <div key={photo.id} className="cart-item">
        <i className="delete-icon ri-delete-bin-6-line"></i>
        <div className="photo-thumbnail">
          <img src={photo.url} />
        </div>
        <p className="price">$5</p>
      </div>
    );
  });

  return <div className="cart-container">{cartElements}</div>;
}
