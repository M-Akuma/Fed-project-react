import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="top-banner">
        <div className="container">
          <div className="details">
            <h2>The Best Ipad Collection Sales 2023.</h2>
            <Link to="/product" className="btn">
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="image-box">
            <img src="images/slider3.png" alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
