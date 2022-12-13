import React, { useContext } from "react";
import { PhotosContext } from "../PhotosContext";

export default function Photos() {
  const { photos, cart, toggleFavorite, addToCart } = useContext(PhotosContext);

  const photosElements = photos.map((photo) => (
    <div key={photo.id} className="photo">
      <i
        className={`heart-icon ri-heart-${photo.isFavorite ? "fill" : "line"}`}
        onClick={() => toggleFavorite(photo)}
      ></i>
      <i
        className={`cart-icon ri-shopping-cart-2-${cart.find((item) => item.id === photo.id) ? "fill" : "line"}`}
        onClick={() => addToCart(photo)}
      ></i>
      <img src={photo.url} />
    </div>
  ));

  return <div className="photos-container">{photosElements}</div>;
}
