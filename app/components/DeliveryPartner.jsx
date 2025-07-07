"use client";

import { useState } from "react";
import ScrollUpAnimation from "../animation-utils/ScrollUpAnimation";
import ScaleUpAnimation from "../animation-utils/ScaleUpAnimation";
import { partnerImg } from "../utils/consts";
import { FrontArrow, BackArrow } from "../Icons/icon";

const DeliveryPartner = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % partnerImg.length); // wrap to 0
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + partnerImg.length) % partnerImg.length); // wrap to last
  };

  return (
    <ScaleUpAnimation>
      <section className="partner">
        <ScrollUpAnimation>
          <h1 className="partner__heading">
            Delivering over 3M policies monthly for world's leading brands
          </h1>
        </ScrollUpAnimation>
        <div className="partner__carousel">
          <button className="carousel__arrow" onClick={handlePrev}>
            <FrontArrow />
          </button>
          <div className="carousel__figure">
            <div
              className="carousel__figure--slider"
              style={{
                transform: `translateX(-${index * 150}px)`,
              }}
            >
              {partnerImg.map((item, index) => (
                <div className="carousel__figure--img" key={index}>
                  <img src={item} alt="new Image" width={"100%"} />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel__arrow" onClick={handleNext}>
            <BackArrow />
          </button>
        </div>
      </section>
    </ScaleUpAnimation>
  );
};

export default DeliveryPartner;
