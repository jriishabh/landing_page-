import React, { useEffect } from "react";


import "./Whyus.css";
import isaca from '../../assets/ISACA.png';
import isc2 from '../../assets/ISC2.png';
import microsoft from '../../assets/Microsoft.png';
import comptia from '../../assets/CompTIA .png';
import offsec from '../../assets/OffSec.jpg';
import pecb from '../../assets/PECB.png';
import cisco from '../../assets/Cisco.png';
import eccounsil from '../../assets/Ec_counsil.png';

const Whyus = () => {
  

  return (
    <div className="whyus-container" >
      <div className="whyus-text">
        <h2 className="whyus-heading">
          Our Authorised <br /> Training Partners
        </h2>
        
        <p className="whyus-description" >
          Earn world-class certifications trusted and highly valued globally by
          government bodies, private organizations, and the defense.
        </p>
        <p className="whyus-description" >
          Advance your career with our expert guidance.
        </p>
        
        <button
          className="whyus-button"
          onClick={() => {
            const formSection = document.getElementById("booking-form");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get CEH Certified Now
        </button>
      </div>

      <div className="whyus-logos" >
        <div className="logo-container">
          <img src={isaca} alt="isaca"  />
          <img src={isc2} alt="isc2"  />
          <img src={microsoft} alt="microsoft"  />
          <img src={comptia} alt="comptia"  />
          <img src={offsec} alt="offsec"  />
          <img src={pecb} alt="pecb"  />
          <img src={cisco} alt="cisco"  />
          <img src={eccounsil} alt="ec counsil"  />
        </div>
      </div>
    </div>
  );
};

export default Whyus;
