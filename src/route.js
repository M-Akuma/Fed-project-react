import React from "react";
import Home from "./components/home";
import Product from "./components/product";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";
import { LuContact } from "react-icons/lu";

const route = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default route;
