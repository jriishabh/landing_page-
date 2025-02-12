import React, { useEffect, useState } from "react";
import "./Hero.css";
import whatsapp from "../../assets/whatsapp.jpg";
import callicon from "../../assets/callicon.png";
import CEHLOGO from "../../assets/Logo-CEH.png";
import ECLOGO from "../../assets/EC.png"


const sections = ["summary", "course", "why-us", "labs", "faqs"];

const Hero = () => {
  const [result, setResult] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0]); // Start with first section

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-container");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsSticky(window.scrollY > heroBottom);
      }

      let currentSection = activeSection; // Keep the last active section by default

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section; // Update to the new active section
            break;
          }
        }
      }

      setActiveSection(currentSection); // Update state only if there's a change
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Keep track of active section

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e0c8c3e0-172a-4eab-8158-3b59ae575f4e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-main">
        <div className="hero-content">
          <div className="logo-bg">
          <img className="hero-logo" src={ECLOGO} alt="" />
         <img className="hero-logo1" src={CEHLOGO} alt="" />
         
         </div>
          <h1>
            EC Council CEH v13 AI
            <br /> Training and <br />
            Certification Course
          </h1>
          <p>
            World’s No.1 ethical hacking certification,
            <br /> now with the power of AI
          </p>
          <button className="hero-button">Enquire</button>
          <button className="hero-button"
          onClick={() => window.location.href = "tel:+919205444320"}
          >Call Now : +91 9205444320</button>
        </div>

        <div className="form-container" id="booking-form">
          <h2>Book Your Slot Now</h2>
          <form onSubmit={onSubmit}>
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
            {result && <p className="form-message">{result}</p>}
          </form>
        </div>
      </div>

      {/* Navbar - it becomes sticky after scrolling */}
      <div className={`hero-nav ${isSticky ? "sticky" : ""}`}>
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={activeSection === section ? "active" : ""}
            >
              {section.toUpperCase().replace("-", " ")}
            </li>
          ))}
        </ul>

        <div className="call-section">
          <img src={callicon} alt="Call us" className="call-icon" />
          <div className="call-text">
            <span>Call Us</span>
            <br />
            <span>
              <a href="tel:+919205444320">+91 9205444320</a>
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
