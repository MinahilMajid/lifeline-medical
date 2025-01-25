import React, { useState } from "react";
import { assets } from "../assets/assets";
import "./MyProfile.css";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Minahil",
    image: assets.profile_pica,
    email: "minahil357911@gmail.com",
    phone: "234354332436",
    adress: {
      line1: "",
      line2: "",
    },
    gender: "Female",
    dob: "2006-4-7",
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="profile-containerr">
      <img src={userData.image} alt="" className="profile-image" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="profile-name-input"
        ></input>
      ) : (
        <p className="profile-name">{userData.name}</p>
      )}
      <hr className="divider" />
      <div className="contact-info">
        <p className="section-title">CONTACT INFORMATION</p>
        <div className="contact-details">
          <p className="label">Email id:</p>
          <p className="value">{userData.email}</p>
          <p className="label">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="phone-input"
            ></input>
          ) : (
            <p>{userData.phone}</p>
          )}
          <p className="label">Adress:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    adress: { ...prev.adress, line1: e.target.value },
                  }))
                }
                value={userData.adress.line1}
                type="text"
                className="address-input"
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    adress: { ...prev.adress, line2: e.target.value },
                  }))
                }
                value={userData.adress.line2}
                type="text"
                className="address-input"
              />
            </p>
          ) : (
            <p className="value">
              {userData.adress.line1}
              <br />
              {userData.adress.line2}
            </p>
          )}
        </div>
      </div>
      <div className="basic-info">
        <p className="section-title">BASIC INFORMATION</p>
        <div className="basic-details">
          <p className="label">GENDER:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
              className="gender-select"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="value">{userData.gender}</p>
          )}
          <p className="label">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
              className="dob-input"
            ></input>
          ) : (
            <p className="value">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="action-buttons">
        {isEdit ? (
          <button onClick={() => setIsEdit(false)} className="save-button">
            Save Information
          </button>
        ) : (
          <button onClick={() => setIsEdit(true)} className="edit-button">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
