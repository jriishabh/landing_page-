import React, { useState } from "react";
import "./Module.css";
import Exam from "../Exam/Exam";

const modules = [
  { "title": "Module 1 : Introduction to Ethical Hacking" },
  { "title": "Module 2 : Footprinting and Reconnaissance" },
  { "title": "Module 3 : Scanning Networks" },
  { "title": "Module 4 : Enumeration" },
  { "title": "Module 5 : Vulnerability Analysis" },
  { "title": "Module 6 : System Hacking" },
  { "title": "Module 7 : Malware Threats" },
  { "title": "Module 8 : Sniffing" },
  { "title": "Module 9 : Social Engineering" },
  { "title": "Module 10 : Denial-of-Service" },
  { "title": "Module 11 : Session Hijacking" },
  { "title": "Module 12 : Evading IDS, Firewalls, and Honeypots" },
  { "title": "Module 13 : Hacking Web Servers" },
  { "title": "Module 14 : Hacking Web Applications" },
  { "title": "Module 15 : SQL Injection" },
  { "title": "Module 16 : Hacking Wireless Networks" },
  { "title": "Module 17 : Hacking Mobile Platforms" },
  { "title": "Module 18 : IoT and OT Hacking" },
  { "title": "Module 19 : Cloud Computing" },
  { "title": "Module 20 : Cryptography" }
];

const Module = () => {
  const [displayCount, setDisplayCount] = useState(5);

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 5, modules.length));
  };

  const loadLess = () => {
    setDisplayCount(prev => Math.max(prev - 5, 5));
  };

  return (
    <div className="module-page">
      <div className="module-container">
        <h2 className="module-title">Ethical Hacking Modules</h2>
        <div className="module-list">
          {modules.slice(0, displayCount).map((module, index) => (
            <div key={index} className="module-item">
              <h4>{module.title}</h4>
            </div>
          ))}
        </div>

        <div className="load-buttons">
          {displayCount > 5 && (
            <button onClick={loadLess} className="submit-btn load-less-btn">
              Load Less
            </button>
          )}
          {displayCount < modules.length && (
            <button onClick={loadMore} className="submit-btn load-more">
              Load More
            </button>
          )}
        </div>

        <div className="instructor">
          <div className="google-icon"></div>
          <div>
            <h2>EC-Council Certificates</h2>
            <p>CyberDentech • 325 Courses • 1000+ learners</p>
          </div>
        </div>
      </div>

      <Exam />
    </div>
  );
};

export default Module;
