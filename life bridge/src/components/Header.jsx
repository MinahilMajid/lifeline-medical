import React from "react";
import { assets } from "../assets/assets";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <div className="header-container">
      {/* Left Side */}
      <div className="header-left">
        <p className="header-title">
          Book Appointment
          <br />
          With Trusted Doctors
        </p>
        <div className="header-info">
          <img
            className="header-group-profiles"
            src={assets.group_profiles}
            alt="Group Profiles"
          />
          <p className="header-description">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a className="header-button" href="">
          Book appointment
          <img
            className="header-arrow-icon"
            src={assets.arrow_icon}
            alt="Arrow Icon"
          />
        </a>
      </div>

      {/* Right Side */}
      <div className="header-right">
        <img className="header-image" src={assets.header_img} alt="Header" />
      </div>
    </div>
  );
};

export default Header;
