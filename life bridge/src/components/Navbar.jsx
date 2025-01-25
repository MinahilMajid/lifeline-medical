// Navbar.jsx
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const Navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="navbar">
      <img
        onClick={() => Navigate("/")}
        className="logo"
        src={assets.logo}
        alt="Logo"
      />
      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <NavLink to="/" onClick={() => setShowMenu(false)} className="home">
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="/doctors"
          onClick={() => setShowMenu(false)}
          className="home"
        >
          <li>ALL DOCTORS</li>
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setShowMenu(false)}
          className="home"
        >
          <li>ABOUT</li>
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setShowMenu(false)}
          className="home"
        >
          <li>CONTACT</li>
        </NavLink>
      </ul>
      <div className="profile-section">
        {token ? (
          <div className="profile-dropdown">
            <img className="profile-pic" src={assets.profile_pica} alt="" />
            <img className="dropdown-icon" src={assets.dropdown_icon} alt="" />
            <div className="box">
              <div className="dropdown-menu">
                <p
                  className="dropdown-item"
                  onClick={() => Navigate("my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="dropdown-item"
                  onClick={() => Navigate("my-appointments")}
                >
                  My Appointments
                </p>
                <p className="dropdown-item" onClick={() => setToken(false)}>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button className="login-button" onClick={() => Navigate("/login")}>
            Create account
          </button>
        )}
      </div>
      <div className="menu-icon-container">
        <img
          className="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
          src={showMenu ? assets.cross_icon : assets.menu_icon}
          alt="Menu Icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
