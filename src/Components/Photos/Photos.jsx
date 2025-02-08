import React, { useRef, useEffect } from "react";
import "./Photos.css";
import Grev1 from "../../assets/rev1.jpg";
import Grev2 from "../../assets/rev2.jpg";
import Grev3 from "../../assets/rev3.jpg";
import Grev4 from "../../assets/rev4.jpg";
import Grev5 from "../../assets/rev5.jpg";
import Grev6 from "../../assets/rev6.jpg";
import Lrev1 from "../../assets/img1.png";
import Lrev2 from "../../assets/img2.png";
import Lrev3 from "../../assets/img3.png";
import Lrev4 from "../../assets/img4.png";
import Lrev5 from "../../assets/img5.png";
import Lrev6 from "../../assets/img6.png";

const bottomImages = [
  Lrev1, Lrev2, Lrev3, Lrev4, Lrev5, Lrev6, 
  Grev1, Grev2, Grev3, Grev4, Grev5, Grev6
];

const Photos = () => {
  const bottomSliderRef = useRef(null);

  const startAutoScroll = (sliderRef, direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 2; // Amount to scroll in each step
    const scrollSpeed = 50; // Speed of scrolling in milliseconds

    let scrollInterval = setInterval(() => {
      if (direction === "left") {
        slider.scrollLeft += scrollAmount;
      } else {
        slider.scrollLeft -= scrollAmount;
      }

      const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth;
      const isAtStart = slider.scrollLeft <= 0;

      if (isAtEnd) {
        // If we reach the end, reset scroll to the beginning
        slider.scrollLeft = 0;
      } else if (isAtStart) {
        // If we reach the start, reset scroll to the end
        slider.scrollLeft = slider.scrollWidth - slider.offsetWidth;
      }
    }, scrollSpeed);

    return scrollInterval;
  };

  useEffect(() => {
    const bottomScrollInterval = startAutoScroll(bottomSliderRef, "right");

    return () => {
      clearInterval(bottomScrollInterval);
    };
  }, []);

  return (
    <div className="success-stories">
      <h1 className="title">Success Stories Our Students</h1>
      <p className="desc">"You can take reference of our alumni network who have spoken along for their success stories by working in many reputed organizations at diverse levels worldwide. Then after that, you can seek registration in the Craw Security's CEH v13 AI Certified Ethical Hacker Training and Certification Course."</p>
      {/* Second Carousel - Bottom Images */}
      <div className="carousel-wrapper">
        <div className="carousel" ref={bottomSliderRef}>
          {bottomImages.map((img, index) => (
            <div key={index} className="carousel-item small">
              <img src={img} alt={`Bottom Success ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
