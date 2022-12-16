import React, { useContext, useState, useRef } from "react";
import { PhotosContext } from "../../PhotosContext";
import "./Cart.css";

export default function Cart() {
  const { cart, setCart, removeFromCart } = useContext(PhotosContext);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isOrderDone, setIsOrderDone] = useState(false);
  const loadingRef = useRef(null);

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

  function placeOrder() {
    setIsOrdered(true);

    setTimeout(() => {
      loadingRef.current.style.visibility = "hidden";
      setIsOrderDone(true);
    }, 2000);

    setTimeout(() => {
      setCart([]);
      setIsOrdered(false);
      setIsOrderDone(false);
    }, 5000);
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Check out</h1>

      {cart.length ? cartElements : <p className="cart-empty">Cart is empty. Please add some photos</p>}

      {!!cart.length && (
        <>
          <p className="total">
            Total: <span className="total-sum">${cart.length * 5}</span>
          </p>

          {isOrdered ? (
            <div ref={loadingRef} className="loading-spinner lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <button className="order-btn" onClick={placeOrder}>
              Place Order
            </button>
          )}

          {isOrderDone && <p className="successful-order">Thank you for ordering</p>}
        </>
      )}
    </div>
  );
}
