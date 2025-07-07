"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PosterImage from "../utils/PosterImage";
import insurancelady from "../img/insurance-lady.png";
import Description from "../utils/Description";
import Button from "../utils/Button";
import { businessNames } from "../utils/consts";
import useWindowSize from "./useWindowSize";

const StartingAd = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % businessNames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [businessNames.length]);

  return (
    <section className="startingad__1">
      <div className="heading-details">
        <div className="heading">
          <div className="heading__header">
            Embedded <br /> Insurance for your <br />
            <div className="dynamic-text" key={index}>
              <span className="text text-slide">{businessNames[index]}</span>
            </div>{" "}
            Business
          </div>
          <div className="heading__description">
            <Description>
              Offer relevant and comprehensive protection plans to your
              customers for the products they are buying, right at the point of
              purchase.
            </Description>
          </div>
          <div className="heading__buttons">
            <Button className="btn--green">Request a Demo</Button>
            <Button className="btn--transparent">How it works</Button>
          </div>
        </div>
      </div>
      <PosterImage />
    </section>
  );
};

export default StartingAd;
