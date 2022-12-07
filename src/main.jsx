import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PhotosContextProvider } from "./PhotosContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PhotosContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PhotosContextProvider>
);
