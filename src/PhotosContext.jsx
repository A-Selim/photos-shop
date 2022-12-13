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

  function toggleFavorite(clickedPhoto) {
    setPhotos((oldPhotos) =>
      oldPhotos.map((photo) => (photo.id === clickedPhoto.id ? { ...photo, isFavorite: !photo.isFavorite } : photo))
    );
  }

  function addToCart(clickedPhoto) {
    const alreadyInCart = cart.find((item) => item.id === clickedPhoto.id);

    if (alreadyInCart === undefined) {
      setCart((oldCart) => [...oldCart, clickedPhoto]);
    } else {
      removeFromCart(clickedPhoto);
    }
  }

  function removeFromCart(clickedPhoto) {
    setCart((oldCart) => oldCart.filter((photo) => photo.id !== clickedPhoto.id));
  }

  return (
    <PhotosContext.Provider value={{ photos, cart, toggleFavorite, addToCart, removeFromCart }}>
      {children}
    </PhotosContext.Provider>
  );
}

export { PhotosContext, PhotosContextProvider };
