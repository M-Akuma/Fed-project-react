import React from "react";
import Home from "./components/home";
import Product from "./components/product";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";

const route = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default route;
