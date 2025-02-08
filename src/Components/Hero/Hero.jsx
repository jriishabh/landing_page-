import React from "react";
import "./Hero.css";
import whatsapp from "../../assets/whatsapp.jpg";
import callicon from "../../assets/callicon.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-main">
        <div className="hero-content">
          <h1>
            EC Counsil CEH v13 AI
            <br /> Training and <br />
            Certification Course
          </h1>
          <p>
            World’s No.1 ethical hacking certification,
            <br /> now with the power of AI
          </p>
          <button className="hero-button">Enquire</button>
          <button className="hero-button">Call Now : +91 9205625129</button>
        </div>

        <div className="form-container" id="booking-form">
          <h2>Book Your Slot Now</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contact"
                pattern="[0-9]{10}"
                title="Phone number must be 10 digits"
                required
              />
            </div>
            <div className="form-group">
              <label>Select Course</label>
              <select name="course" required>
                <option value="" disabled>
                  Select a course
                </option>
                <option value="CEH">Certified Ethical Hacker</option>
                <option value="CISSP">
                  Certified Information Systems Security Professional
                </option>
                <option value="Ethical Hacking">Ethical Hacking</option>
                <option value="Basic Networking">Basic Networking</option>
                <option value="Linux">Linux</option>
                <option value="Python">Python</option>
                <option value="Network Penetration Testing">
                  Network Penetration Testing
                </option>
                <option value="Web Application Penetration Testing">
                  Web Application Penetration Testing
                </option>
                <option value="Android Penetration Testing">
                  Android Penetration Testing
                </option>
                <option value="API Penetration Testing">
                  API Penetration Testing
                </option>
                <option value="Cloud Security">Cloud Security</option>
                <option value="Digital Forensic">Digital Forensic</option>
                <option value="Cyber Security Controls And Operation">
                  Cyber Security Controls And Operation
                </option>
                <option value="Security Operation And Response Management">
                  Security Operation And Response Management
                </option>
                <option value="Interview Preparation">
                  Interview Preparation
                </option>
              </select>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="hero-nav">
        <ul>
          <li>SUMMARY</li>
          <li>COURSE</li>
          <li>WHY US?</li>
          <li>CAREERS</li>
          <li>FAQs</li>
        </ul>
        <div className="call-section">
          <img src={callicon} alt="Call us" className="call-icon" />
          <div className="call-text">
            <span>Call Us</span>
            <br />
            <span>
              <a href="tel:+918448046612">+91 8448046612</a>
            </span>
          </div>
        </div>
      </div>

      <div
        className="whatsapp-logo"
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=918448046612",
            "_blank"
          )
        }
      >
        <img src={whatsapp} alt="WhatsApp" />
      </div>
    </div>
  );
};

export default Hero;
