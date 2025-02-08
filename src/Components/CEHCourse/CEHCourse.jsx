import React from "react";
import "./CEHCourse.css";
import whatsapp from "../../assets/whatsapp.jpg";

const CEHCourse = () => {
  return (
    <div className="ceh-container">
      <h2 className="ceh-heading">
        Expand Your Career Opportunity in CEH v13 AI Ethical Hacker Course
      </h2>
      <p className="ceh-description">
        Treat yourself to the gift of becoming knowledgeable about the core
        principles of ethical hacking with the EC-Council Certified Ethical
        Hacker Training and Certification Course. This finest cyber security
        line may be chosen by selecting the top CEH v13 AI Certified Ethical
        Hacker Course in Delhi, where proactive mentors and trainers with more
        than 10 years of information security industry expertise in numerous
        well-known firms worldwide will guide the student.
      </p>
      <div className="ceh-btn-container">
        <button className="ceh-button">Connect with CEH Expert</button>
        <img className="whatsapp-icon" src={whatsapp} alt="whatsapp_icon" /> 
      </div>
    </div>
  );
};

export default CEHCourse;
