import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./Doctors.css";

const Doctors = () => {
  const { speciality } = useParams(); // Get speciality from URL
  const { doctors } = useContext(AppContext); // Get doctors from context
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);

  // Function to apply the filter
  const applyFilter = () => {
    if (speciality) {
      const normalizedSpeciality = speciality.toLowerCase(); // Normalize URL speciality
      const filteredDoctors = doctors.filter(
        (doc) => doc.speciality.toLowerCase() === normalizedSpeciality
      );
      setFilterDoc(filteredDoctors);
    } else {
      setFilterDoc(doctors); // Show all doctors if no speciality is selected
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]); // Reapply filter whenever doctors or speciality changes

  return (
    <div className="main-container">
      <p className="pp">Browse through the doctors by their speciality.</p>
      <div>
        {/* Speciality Navigation */}
        <div className="speciality-navigate">
          <p
            onClick={() =>
              speciality === "General Physician"
                ? navigate("/doctors")
                : navigate("/doctors/General Physician")
            }
          >
            General Physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
          >
            Neurologist
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="doctor-cardd"
              key={index}
            >
              <img className="doctor-imagee" src={item.image} alt="" />
              <div className="doctor-infoo">
                <div className="availabilityy">
                  <span className="status-dot"></span>
                  <p style={{ color: "green", fontWeight: "normal" }}>
                    Available
                  </p>
                </div>
                <p className="doctor-namee">{item.name}</p>
                <p className="doctor-specialityy">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
