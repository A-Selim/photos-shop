import React, { useContext, useState } from "react";
import { PhotosContext } from "../PhotosContext";

export default function Photos() {
  const { photos, addToCart } = useContext(PhotosContext);

  const photosElements = photos.map((photo) => (
    <div key={photo.id} className="photo">
      <i className={`heart-icon ri-heart-${photo.isFavorite === true ? "fill" : "line"}`}></i>
      <i className="cart-icon ri-shopping-cart-2-line" onClick={() => addToCart(photo)}></i>
      <img src={photo.url} />
    </div>
  ));

  return <div className="photos-container">{photosElements}</div>;
}
