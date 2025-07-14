"use client";

import React, { useEffect, useRef, useState } from "react";
import PosterImage from "../utils/PosterImage";
import Description from "../utils/Description";
import Button from "../utils/Button";
import { businessNames } from "../utils/consts";
import VideoPortal from "../utils/VideoPortal";

const StartingAd = () => {
  const dialog = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % businessNames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [businessNames.length]);

  const handleOpenVideo = () => {
    dialog.current.open();
    // dialog.current.showModal();
  };

  return (
    <>
      <VideoPortal ref={dialog} />
      <section className="startingad__1">
        <div className="heading-details">
          <div className="heading">
            <div className="heading__header">
              Embedded <br /> Insurance for your <br />
              <div className="dynamic-text" key={index}>
                <span className={`text text-slide`}>
                  {businessNames[index]}
                </span>
              </div>{" "}
              Business
            </div>
            <div className="heading__description">
              <Description>
                Offer relevant and comprehensive protection plans to your
                customers for the products they are buying, right at the point
                of purchase.
              </Description>
            </div>
            <div className="heading__buttons">
              <Button
                className="btn--green"
                url={"https://www.symbo.co/contact/"}
              >
                Request a Demo
              </Button>
              <button
                className="btn btn--transparent"
                onClick={handleOpenVideo}
              >
                How it works
              </button>
            </div>
          </div>
        </div>
        <PosterImage />
      </section>
    </>
  );
};

export default StartingAd;
