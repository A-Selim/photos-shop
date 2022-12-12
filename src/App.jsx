import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
