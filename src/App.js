import React from "react";
import Nav from "./components/nav";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Rout from "./route";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Rout />

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
