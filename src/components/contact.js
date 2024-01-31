import React from "react";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2># Contact Us</h2>

        <div className="contact-container">
          <div className="contact-details">
            <div className="contact-box">
              <div className="contact-box-1">
                <div className="contact-box-1-left">
                  <FaLocationDot />
                </div>
                <div className="contact-box-1-right">
                  <h3>XYZ ROAD, ABC Building</h3>
                  <p>Maharajgunj,kathmandu</p>
                </div>
              </div>
              <div className="contact-box-2">
                <div className="contact-box-2-left">
                  <FaPhoneAlt />
                </div>
                <div className="contact-box-2-right">
                  <h3>+977 9745959622</h3>
                  <p>Monday to Friday</p>
                </div>
              </div>
              <div className="contact-box-3">
                <div className="contact-box-3-left">
                  <SiMinutemailer />
                </div>
                <div className="contact-box-3-right">
                  <h3>@sandeep_khadka_Official</h3>
                  <p>Email for query</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <form method="post">
              <input
                type="text"
                placeholder="Enter your name"
                value=""
                message="name"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value=""
                message="email"
                required
              />
              <input
                type="number"
                placeholder="Enter your number"
                value=""
                required
              />
              <textarea placeholder="message" value="" required></textarea>
              <button type="submit" className="new-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
