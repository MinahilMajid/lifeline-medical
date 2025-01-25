import React from "react";
import { assets } from "../assets/assets";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <p className="contact-title">
          CONTACT <span className="highlight">US</span>
        </p>
      </div>
      <div className="contact-body">
        <img className="contact-image" src={assets.contact_image} alt="" />
        <div className="contact-info">
          <p className="contact-subtitle">OUR OFFICE</p>
          <p className="contact-address">
            Address: G-8/3, Islamabad
            <br />
            Description: The largest government hospital in Islamabad, offering
            various medical services and emergency care.
          </p>
          <p className="contact-details">
            Contact: (051) 9261170
            <br />
            Email: minahil357911@gmail.com
          </p>
          <p className="contact-careers">
            CAREERS AT Lifeline Medical Hospital
          </p>
          <p className="contact-careers-text">
            Learn more about our teams and job openings.
          </p>
          <button className="contact-button">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
