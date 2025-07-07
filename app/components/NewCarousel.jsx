import React, { useState, useRef, useEffect } from "react";
import { carouselSwipedAnalytics } from "containers/Standalone/templatePagesConfig/analytics";
import "./ImageCarousel.css";

const ImageCarousel = ({
  padding,
  marginRight,
  data,
  showButton = false,
  showPreviewOfNextSlide = 40,
  adjustment = 0,
  updateActivity,
  brand,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const autoScrollRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    // carouselSwipedAnalytics(updateActivity, brand);
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      //   carouselSwipedAnalytics(updateActivity, brand);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    clearInterval(autoScrollRef.current); // Stop auto sliding on touch
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(autoScrollRef.current);
  }, [data.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(calc(${-1 * currentIndex * 100}vw +
${currentIndex * padding}px + ${currentIndex * showPreviewOfNextSlide}px + ${
            adjustment
              ? currentIndex * (adjustment / 2) + currentIndex * marginRight
              : 0
          }px))`,
          display: "flex",
          width: `calc(${data.length * 100}vw - ${
            data.length * padding * 2
          }px + ${data.length * showPreviewOfNextSlide}px -
${data.length * showPreviewOfNextSlide}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{
              flex: `0 0 calc(100vw - ${
                padding * 2
              }px - ${showPreviewOfNextSlide}px -
                ${adjustment}px)`,
              marginRight,
            }}
          >
            <img
              src={item.imageURL}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                maxWidth: "460px",
              }}
            />
          </div>
        ))}
      </div>

      {showButton && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="carousel-button left"
            disabled={currentIndex === 0}
          >
            ❮
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="carousel-button right"
            disabled={data.length === 0}
          >
            ❯
          </button>
        </>
      )}

      <div className="carousel-dots">
        {data.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
