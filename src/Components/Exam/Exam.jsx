import React, { useState } from "react";
import "./Exam.css";

const Exam = () => {
  const [activeTab, setActiveTab] = useState("knowledge");

  return (
    
      <div className="exam-container">
        <h2 className="exam-title">Exam Details</h2>
        <p className="exam-description">
          Certification is awarded when the knowledge exam is passed. In order to achieve CEH Master Level certification, an additional practical exam needs to be taken. This practical exam is optional.
        </p>

        {/* Tab Buttons */}
        <div className="exam-tabs">
          <div
            className={`exam-tab ${activeTab === "knowledge" ? "active" : ""}`}
            onClick={() => setActiveTab("knowledge")}
          >
            Knowledge Exam
          </div>
          <div
            className={`exam-tab ${activeTab === "practical" ? "active" : ""}`}
            onClick={() => setActiveTab("practical")}
          >
            Practical Exam
          </div>
        </div>

        {/* Knowledge Exam Details */}
        <div className={`exam-section ${activeTab === "knowledge" ? "active" : ""}`}>
          <h3 className="exam-subtitle">Knowledge Exam</h3>
          <ul className="exam-list">
            <li>Information security threats and attack vectors</li>
            <li>Attack detection</li>
            <li>Attack prevention</li>
            <li>Procedures</li>
            <li>Methodologies</li>
          </ul>
          <p className="exam-info"><strong>Format:</strong> Multiple choice</p>
          <p className="exam-info"><strong>Duration:</strong> 4 hours</p>
          <p className="exam-info"><strong>Questions:</strong> 125</p>
          <p className="exam-info"><strong>Delivery:</strong> Online via the ECC exam portal</p>
          <p className="exam-info"><strong>Passing Score:</strong> 60% to 85%</p>
        </div>

        {/* Practical Exam Details */}
        <div className={`exam-section ${activeTab === "practical" ? "active" : ""}`}>
          <h3 className="exam-subtitle">Practical Exam</h3>
          <p className="exam-description">
            The practical exam is optional but recommended for a higher level of certification. It assesses practical skills in various cybersecurity areas.
          </p>
          <ul className="exam-list">
            <li>Port scanning tools (e.g., Nmap, Hping)</li>
            <li>Vulnerability detection</li>
            <li>Attacks on a system (DoS, DDoS, session hijacking, web server and web application attacks, SQL injection, and wireless threats)</li>
            <li>SQL injection methodology and evasion techniques</li>
            <li>Web application security tools (e.g., Acunetix WVS)</li>
            <li>SQL injection detection tools (e.g., IBM Security AppScan)</li>
            <li>Communication protocols</li>
          </ul>
          <p className="exam-info"><strong>Duration:</strong> 6 hours</p>
          <p className="exam-info"><strong>Questions:</strong> 20 challenges</p>
          <p className="exam-info"><strong>Delivery:</strong> iLabs Cyber Range</p>
          <p className="exam-info"><strong>Passing Score:</strong> 60% to 85%</p>
        </div>

      
    </div>
  );
};

export default Exam;
