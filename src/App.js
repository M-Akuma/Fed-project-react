import React from "react";
import Nav from "./components/nav";
import { BrowserRouter } from "react-router-dom";
import HOme from "./components/home";
import Rout from "./route";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </div>
  );
};

export default App;
