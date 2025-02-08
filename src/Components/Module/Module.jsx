import React, { useState } from "react";
import "./Module.css";
import Exam from "../Exam/Exam";


const modules = [
  { "title": "Module 1 : Introduction to Ethical Hacking", "hours": 5 },
  { "title": "Module 2 : Footprinting and Reconnaissance", "hours": 5 },
  { "title": "Module 3 : Scanning Networks", "hours": 5 },
  { "title": "Module 4 : Enumeration", "hours": 5 },
  { "title": "Module 5 : Vulnerability Analysis", "hours": 5 },
  { "title": "Module 6 : System Hacking", "hours": 5 },
  { "title": "Module 7 : Malware Threats", "hours": 5 },
  { "title": "Module 8 : Sniffing", "hours": 5 },
  { "title": "Module 9 : Social Engineering", "hours": 5 },
  { "title": "Module 10 : Denial-of-Service", "hours": 5 },
  { "title": "Module 11 : Session Hijacking", "hours": 5 },
  { "title": "Module 12 : Evading IDS, Firewalls, and Honeypots", "hours": 5 },
  { "title": "Module 13 : Hacking Web Servers", "hours": 5 },
  { "title": "Module 14 : Hacking Web Applications", "hours": 5 },
  { "title": "Module 15 : SQL Injection", "hours": 5 },
  { "title": "Module 16 : Hacking Wireless Networks", "hours": 5 },
  { "title": "Module 17 : Hacking Mobile Platforms", "hours": 5 },
  { "title": "Module 18 : IoT and OT Hacking", "hours": 5 },
  { "title": "Module 19 : Cloud Computing", "hours": 5 },
  { "title": "Module 20 : Cryptography", "hours": 5 }
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
              <p>{module.hours} hours</p>
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
          <div className="google-icon" >
            {""}
          </div>
          <div>
            <h2>Ec Counsil Certificates</h2>
            <p>CyberDentech • 325 Courses • 1000+ learners</p>
          </div>
        </div>
      </div>

    <Exam></Exam>
    </div>
  );
};

export default Module;
