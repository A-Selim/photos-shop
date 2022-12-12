import React, { useState, useEffect } from "react";

const PhotosContext = React.createContext();

function PhotosContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  function addToCart(photo) {
    setCart((oldCart) => [...oldCart, photo]);
  }

  function removeFromCart(clickedPhoto) {
    setCart((oldCart) => oldCart.filter((photo) => photo.id !== clickedPhoto.id));
  }

  return (
    <PhotosContext.Provider value={{ photos, cart, addToCart, removeFromCart }}>{children}</PhotosContext.Provider>
  );
}

export { PhotosContext, PhotosContextProvider };
