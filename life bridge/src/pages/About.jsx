import React from "react";
import { assets } from "../assets/assets";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <p>
          About <span>Us</span>
        </p>
      </div>
      <div className="about-section">
        <img src={assets.about_image} alt="" />
        <div className="about-text">
          <p>
            Welcome to Lifeline Medical Hospital, your trusted partner in
            managing your healthcare needs conveniently and efficiently. At
            Lifeline Medical Hospital, we understand the challenges individuals
            face when it comes to scheduling doctor appointments and managing
            their health records.
          </p>
          <p>
            Lifeline Medical Hospital is committed to excellence in healthcare
            technology. We continuously strive to enhance our platform,
            integrating the latest advancements to improve user experience and
            deliver superior service. Whether you're booking your first
            appointment or managing ongoing care,Lifeline Medical Hospital is
            here to support you every step of the way.
          </p>
          <b>Our Vision</b>
          <p>
            Our vision at Lifeline Medical Hospital is to create a seamless
            healthcare experience for every user. We aim to bridge the gap
            between patients and healthcare providers, making it easier for you
            to access the care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="choose-us-header">
        <p>
          Why <span>Choose Us</span>{" "}
        </p>
      </div>
      <div className="choose-us-section">
        <div className="choose-us-card">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="choose-us-card">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="choose-us-card">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
