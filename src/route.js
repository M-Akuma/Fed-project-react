import React from "react";
import Home from "./components/home";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";
import { LuContact } from "react-icons/lu";
import Product from "./components/product";
import Contact from "./components/contact";

const route = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default route;
