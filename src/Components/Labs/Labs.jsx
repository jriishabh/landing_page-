import React, { useState } from "react";
import "./Labs.css";

import lab1 from "../../assets/lab1.jpg";
import lab2 from "../../assets/lab5.jpg";
import lab3 from "../../assets/lab3.jpg";
import lab4 from "../../assets/lab4.jpg";
import lab5 from "../../assets/lab2.jpg";
import lab6 from "../../assets/lab6.jpg";
import lab7 from "../../assets/lab7.jpg";

const Labs = () => {
  const images = [lab1, lab2, lab3, lab4, lab5, lab6, lab7];
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    return [
      images[startIndex % images.length],
      images[(startIndex + 1) % images.length],
      images[(startIndex + 2) % images.length],
    ];
  };

  return (
    <div className="labs-container">
      <h2 className="labs-heading">Our High-End CEH Labs by EC-Council</h2>
      <div className="slider-container">
        <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
        <div className="image-row">
          {getVisibleImages().map((img, index) => (
            <img key={index} src={img} alt={`Lab ${index + 1}`} className="slide-image" />
          ))}
        </div>
        <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Labs;
