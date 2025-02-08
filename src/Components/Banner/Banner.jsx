import React from "react";
import "./Banner.css";
import logo from "../../assets/cyberdefentech.png"; 
import whatsappIcon from "../../assets/whatsapp.jpg"; 

const Banner = () => {
  return (
    <div className="banner">
      <img src={logo} alt="Logo" className="banner-logo" />

      <div className="banner-right">
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="whatsapp-icon"
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=918448046612&text=Hi!+I+have+a+query.",
              "_blank"
            )
          }
        />
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Banner;
