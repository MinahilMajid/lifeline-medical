import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

import "./Appointment.css";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const getAvailableSlots = () => {
    let today = new Date();
    let newSlots = []; // Store all slots temporarily to avoid state mutation issues.

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      newSlots.push(timeSlots);
    }

    setDocSlots(newSlots); // Replace state with the new slots array.
  };

  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots(); // Ensure slots are generated only when docInfo is available.
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div className="appointment-container">
        <div className="appointment-header">
          <h1>Doctor Details</h1>
        </div>

        <div className="appointment-image-container">
          <div className="appointment-image">
            <img src={docInfo.image} alt={docInfo.name} />
          </div>

          <div className="appointment-info-container">
            <div className="doctor-name">
              <p>{docInfo.name}</p>
              <img src={assets.verified_icon} alt="Verified Icon" />
            </div>

            <div className="doctor-details">
              <p className="doctor-degree">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="doctor-experience">
                {docInfo.experience} years of experience
              </button>
            </div>

            <div className="appointment-about">
              <p>
                About <img src={assets.info_icon} alt="Info Icon" />
              </p>
              <p>{docInfo.about}</p>
            </div>

            <p className="appointment-fees">
              Appointment Fee:{" "}
              <span>
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        <div className="appointment-slots">
          <p className="slots-header">Booking Slots</p>
          <div className="slots-days">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  className={`slot-day ${
                    slotIndex === index ? "active-slot" : ""
                  }`}
                  onClick={() => setSlotIndex(index)}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="slots-times">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  key={index}
                  className={`slot-time ${
                    slotTime === item.time ? "selected-time" : ""
                  }`}
                  onClick={() => setSlotTime(item.time)}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
        </div>

        <button className="appointment-book-btn">Book an Appointment</button>
        {/* Listing related doctors */}
        <RelatedDoctors
          docId={docId}
          speciality={docInfo.speciality}
        ></RelatedDoctors>
      </div>
    )
  );
};

export default Appointment;
