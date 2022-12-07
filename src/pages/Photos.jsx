import React, { useContext } from "react";
import { PhotosContext } from "../PhotosContext";

export default function Photos() {
  const { photos } = useContext(PhotosContext);

  const photosElements = photos.map((photo) => (
    <div key={photo.id} className="photo">
      <img src={photo.url} />
    </div>
  ));
  return <div className="photos-container">{photosElements}</div>;
}
