import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const Navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDocs] = useState([]);
  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div>
      <div className="doctors-container">
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className="doctors-grid">
          {relDoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {
                Navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
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
    </div>
  );
};

export default RelatedDoctors;
