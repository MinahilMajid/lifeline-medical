import React from "react";
import { assets } from "../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        {/* left section */}
        <div className="left-section">
          <img src={assets.logo} alt="" />
          <p>
            we aim to make healthcare accessible, convenient, and stress-free.
            Whether you’re looking for a general physician, a specialist, or
            routine health check-ups, our platform connects you with 100+
            trusted doctors who are dedicated to your well-being.
          </p>
        </div>
        {/* center section */}
        <div className="center-section">
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div className="right-section">
          <p>GET IN TOUCH</p>
          <ul>
            <li>+924-93792-2679</li>
            <li>minahil2477@gmail.com</li>
          </ul>
        </div>
      </footer>
      {/* copyright text */}
      <div className="copyright">
        <p>Copyright 2025 @minahil2477 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
