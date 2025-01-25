import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
import "./SpecialityMenu.css";
const SpecialityMenu = () => {
  return (
    <div id="speciality">
      <h1> Find by Speciality</h1>
      <p>
        {" "}
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div>
        {specialityData.map((item, index) => (
          <Link className="link" key={index} to={`/doctors/${item.speciality}`}>
            <img src={item.image} alt="" />
            <p className="doctorsname">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
