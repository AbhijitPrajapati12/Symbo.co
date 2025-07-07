"use client";

import "./Carousel.css";
import { useState } from "react";
import { partnerImg as images } from "../utils/consts";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length); // wrap to 0
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length); // wrap to last
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={handlePrev}>
        ◀
      </button>

      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * 200}px)`,
          }}
        >
          {images.map((src, i) => (
            <img key={i} src={src} alt={`img-${i}`} className="carousel-img" />
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
}
