import React, { useState, useEffect } from "react";
import "./Labs.css";

import lab1 from "../../assets/lab1.jpg";
import lab2 from "../../assets/lab2.jpg";
import lab3 from "../../assets/lab3.jpg";
import lab4 from "../../assets/lab4.jpg";
import lab5 from "../../assets/lab5.jpg";
import lab6 from "../../assets/lab6.jpg";
import lab7 from "../../assets/lab7.jpg";

const Labs = () => {
  const images = [lab1, lab2, lab3, lab4, lab5, lab6, lab7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(3);

  useEffect(() => {
    // Change images per page based on screen size
    const updateImagesPerPage = () => {
      setImagesPerPage(window.innerWidth <= 768 ? 1 : 3);
    };

    updateImagesPerPage();
    window.addEventListener("resize", updateImagesPerPage);

    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, []);

  const totalSlides = Math.ceil(images.length / imagesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="labs-container">
      <h2 className="labs-heading">Our High-End CEH Labs by EC-Council</h2>
      <div className="slider-container">
        <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
        <div className="image-row">
          {images
            .slice(currentIndex * imagesPerPage, (currentIndex + 1) * imagesPerPage)
            .map((img, index) => (
              <img key={index} src={img} alt={`Lab ${index + 1}`} className="slide-image" />
            ))}
        </div>
        <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="dots-container">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Labs;
