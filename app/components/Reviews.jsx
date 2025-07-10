"use client";

import { useState, useRef, useEffect } from "react";
import { BackArrow, FrontArrow } from "./Icon";
import { reviews } from "../utils/consts";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const intervalRef = useRef(null);

  // Auto-play function
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection("right");
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
  };

  // Start auto-play on mount
  useEffect(() => {
    startAutoPlay();

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset auto-play timer on manual navigation
  const resetAutoPlay = () => {
    clearInterval(intervalRef.current);
    startAutoPlay();
  };

  const handleClickFront = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % reviews.length);
    resetAutoPlay();
  };

  const handleClickBack = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    resetAutoPlay();
  };

  const handleClickStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleClickContinue = () => {
    startAutoPlay();
  };

  const handleDotIndicator = (ind) => {
    console.log("Index", ind);
    setIndex((prev) => (prev = ind));
    resetAutoPlay();
  };

  return (
    <section className="section-review">
      <div
        className="reviews"
        onMouseDown={handleClickStop}
        onMouseUp={handleClickContinue}
      >
        <button onClick={handleClickBack} className="reviews__back-arrow">
          <BackArrow />
        </button>
        <button onClick={handleClickFront} className="reviews__front-arrow">
          <FrontArrow />
        </button>
        <div className="reviews__track">
          {reviews.map((review, i) => (
            <div
              className={`review ${
                i === index
                  ? `review--active review--${direction}`
                  : "review--inactive"
              }`}
              key={i}
            >
              <div className="review__container">
                <div className="review__img">
                  <img
                    src={review.profilepic}
                    alt="Profile Pic"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div className="review__content">
                  <p className="review__heading">
                    Brands and their Customers ❤️ us
                  </p>
                  <div className="review__comment">{review.comment}</div>
                  <div className="review__profile">
                    <img
                      src={review.profilepic}
                      alt="Profile Pic"
                      height={50}
                      width={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <span>
                      {review.name} <p>{review.designation}</p>
                    </span>
                  </div>
                  <div className="review__achievements">
                    {review.achievements.map((item) => (
                      <div className="achievement__item" key={item.title}>
                        <div className="achievement__item-detail">
                          <img src={item.img} alt={item.title} />
                          <p>{item.number}</p>
                        </div>
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dotindicator">
        {reviews.map((item, i) => (
          <div
            className={`dotindicator__list ${
              i === index ? "dotindicator--active" : undefined
            }`}
            onClick={() => handleDotIndicator(i)}
            key={i}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
