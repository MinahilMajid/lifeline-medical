import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./MyAppointment.css";
const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="appointments-containerrr">
      <p className="appointments-titleee">My appointment</p>
      <div className="appointments-listt">
        {doctors.slice(0, 3).map((item, index) => (
          <div className="appointment-carddd" key={index}>
            <div className="doctor-image-containerr">
              <img className="doctor-imageee" src={item.image} alt="" />
            </div>
            <div className="doctor-detailsss">
              <p className="doctor-nameeee">{item.name}</p>
              <p className="doctor-specialityyy">{item.speciality}</p>

              {/* <p className="doctor-address-line">{item.adress.line1}</p>
              <p className="doctor-address-line">{item.adress.line2}</p> */}
              <p className="appointment-datetimee">
                <span className="datetime-labelll">Date & Time:</span> 25 Jan,
                2025 | 10:30
              </p>
            </div>

            <div className="appointment-actionss">
              <button className="pay-button">Pay Online</button>
              <button className="cancel-button">Cancle appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
