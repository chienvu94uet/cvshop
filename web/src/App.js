import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Cart, Category, Home, ProductDetail, Profile } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product/*" element={<ProductDetail />} />
      <Route path="cart/*" element={<Cart />} />
      <Route path="category/*" element={<Category />} />
      <Route path="profile/*" element={<Profile />} />
    </Routes>
  );
};

export default App;
