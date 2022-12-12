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

  return <PhotosContext.Provider value={{ photos, cart, addToCart }}>{children}</PhotosContext.Provider>;
}

export { PhotosContext, PhotosContextProvider };
