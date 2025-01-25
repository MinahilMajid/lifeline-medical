import React from "react";
import { assets } from "../assets/assets";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* left side */}
      <div className="banner">
        <div className="text-content">
          <h1>Book Appointment</h1>
          <h1>With 100+ Trusted Doctors</h1>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Create Account
          </button>
        </div>

        {/* right side */}
        <div className="image-content">
          <img src={assets.appointment_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
