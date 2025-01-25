import React from "react";

import "./TopDoctors.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="doctors-container">
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div className="doctors-grid">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="doctor-card"
            key={index}
          >
            <img className="doctor-image" src={item.image} alt="" />
            <div className="doctor-info">
              <div className="availability">
                <span className="dot"></span>
                <p>Available</p>
              </div>
              <p className="doctor-name">{item.name}</p>
              <p className="doctor-speciality">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
        }}
        className="load-more"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
