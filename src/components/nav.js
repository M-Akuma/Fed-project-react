import React from "react";
import { FaDove, FaTruck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { LuLogIn, LuUser2 } from "react-icons/lu";
import "./nav.css";
import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineLogin } from "react-icons/md";

const Nav = () => {
  return (
    <>
      <div>
        <div className="free">
          <div className="icon">
            <FaTruck />
          </div>
          <p>Free Shipping when shopping up to $1000.</p>
        </div>
        <div className="main-header">
          <div className="container">
            <div className="logo">
              <img src="./../images/logo.png" alt="logo" />
            </div>
            <div className="search">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Enter your product name...."
                  autoComplete="off"
                />
                <button>Search</button>
              </div>
            </div>

            <div className="icons">
              <div className="account">
                <div className="user-icon">
                  <LuUser2 />
                </div>
                <p>Hello, user</p>
              </div>
              <FaRegHeart />
              <IoBagCheckSharp />
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/home" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            <button>
              <LuLogOut />
            </button>
            <button>
              <MdOutlineLogin />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
