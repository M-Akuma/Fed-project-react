import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import "./home.css";
import { FaDollarSign } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import Homeproduct from "./homeproduct";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const [homeProduct, setHomeProduct] = useState(Homeproduct);
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
          <div className="image-box-3">
            <img src="images/slider3.png" alt="banner" />
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <div className="box">
            <div className="image-box">
              <img src="images/item1.png" />
            </div>
            <div className="detials">
              <p>63 products</p>
            </div>
          </div>

          <div className="box">
            <div className="image-box">
              <img src="images/item3.png" />
            </div>
            <div className="detials">
              <p>45 products</p>
            </div>
          </div>

          <div className="box">
            <div className="image-box">
              <img src="images/item2.png" />
            </div>
            <div className="detials">
              <p>23 products</p>
            </div>
          </div>

          <div className="box">
            <div className="image-box-1">
              <img src="images/item4.png" />
            </div>
            <div className="detials">
              <p>78 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container-wrapper">
          <div className="box-1">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="details">
              <h3> Free shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className="box-1">
            <div className="icon">
              <FaDollarSign />
            </div>
            <div className="details">
              <h3> Return & Refund</h3>
              <p> With in 7 days</p>
            </div>
          </div>
          <div className="box-1">
            <div className="icon">
              <FaPercent />
            </div>
            <div className="details">
              <h3> Member discount</h3>
              <p>On every order</p>
            </div>
          </div>
          <div className="box-1">
            <div className="icon">
              <FaHeadphones />
            </div>
            <div className="details">
              <h3> Customer support</h3>
              <p>24/7 customer support care</p>
            </div>
          </div>
        </div>
      </div>
      {/* products */}
      <div>
        <div className="product">
          <h2> Our Products</h2>
          <div className="product-container">
            {homeProduct.map((curElm) => (
              <div className="box" key={curElm.id}>
                <div className="img-box">
                  <img src={curElm.Img} alt={curElm.Title} />
                  {/* <div className="product-icons">
                    <li>
                      <FaShoppingCart />
                    </li>
                    <li>
                      <HiOutlineEye />
                    </li>
                    <li>
                      <FaHeart />
                    </li>
                  </div> */}
                  <div className="detail">
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <p>{curElm.Price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="box"></div>
      </div>

      {/* banner */}
      <div className="banner">
        <div className="banner-container">
          <div className="banner-details">
            <h4>Latest Technology</h4>
            <h3>Ipad Pro 2nd Gen M2 chip -2021 </h3>
            <p>
              <FaDollarSign /> 1999
            </p>
            <Link to="/product" className="btn-1">
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="image-box-banner">
            <img src="./images/slider3.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
