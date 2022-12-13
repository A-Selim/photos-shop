import React, { useContext, useState } from "react";
import { PhotosContext } from "../PhotosContext";

export default function Photos() {
  const { photos, cart, toggleFavorite, addToCart } = useContext(PhotosContext);

  const photosElements = photos.map((photo) => (
    <div key={photo.id} className="photo">
      <i
        className={`heart-icon ri-heart-${photo.isFavorite ? "fill" : "line"}`}
        onClick={() => toggleFavorite(photo)}
      ></i>
      ></i>
      <img src={photo.url} />
    </div>
  ));

  return <div className="photos-container">{photosElements}</div>;
}
