import React, { useState, useEffect } from "react";

const PhotosContext = React.createContext();

function PhotosContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return <PhotosContext.Provider value={{ photos }}>{children}</PhotosContext.Provider>;
}

export { PhotosContext, PhotosContextProvider };
