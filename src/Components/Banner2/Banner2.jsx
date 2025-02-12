import React from "react";
import "./Banner2.css";

const Banner2 = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-heading">
          CEH v13 AI Training and Certification Course in Delhi
        </h1>
        <p className="banner-description">
          After completing your CEH v13 AI Training Classes at Craw Security and passing the exams, you will receive your CEH v13 AI Certification.
        </p>
      </div>
      <button className="banner-button"
       onClick={() => {
        const formSection = document.getElementById("booking-form");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      }}>Get In Touch!!</button>
    </div>
  );
};

export default Banner2;
