"use client";

import { useState, useRef } from "react";
import { insurTechArr } from "../utils/consts";

const InsurTech = () => {
  // const pageRefs = [useRef(null), useRef(null), useRef(null)];
  const [selectPage, setSelectPage] = useState(0);
  const pageDetails = insurTechArr[selectPage];

  const handleSelect = (pageNum) => {
    setSelectPage(pageNum);
    // pageRefs[pageNum].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="insurtech">
      <div className="insurtech__heading">
        <h1 className="insurtech__heading-header">
          Powerful insurtech to turbocharge your business
        </h1>
      </div>
      <div className="insurtech__pagenums">
        <button
          onClick={() => handleSelect(0)}
          className={`pagebtn ${
            selectPage === 0 ? "pagebtn--active" : undefined
          }`}
        >
          01
        </button>
        <button
          onClick={() => handleSelect(1)}
          className={`pagebtn ${
            selectPage === 1 ? "pagebtn--active" : undefined
          }`}
        >
          02
        </button>
        <button
          onClick={() => handleSelect(2)}
          className={`pagebtn ${
            selectPage === 2 ? "pagebtn--active" : undefined
          }`}
        >
          03
        </button>
      </div>
      <div className="insurtech__page">
        <div className="insurtech__page--details">
          <h3>{pageDetails.title}</h3>
          <p>{pageDetails.subtitle}</p>
        </div>
        <div className="insurtech__page--img">
          <img
            src={pageDetails.img}
            alt={`${pageDetails.title} image`}
            className="insurtechimage"
          />
        </div>
      </div>
    </section>
  );
};

export default InsurTech;

{
  /* <div className="insurtech__pagescroll">
          <div className="insurtech__page" ref={pageRefs[0]}>
            <div className="insurtech__page--details">
              <h3>{pageDetails[0].title}</h3>
              <p>{pageDetails[0].subtitle}</p>
            </div>
            <div className="insurtech__page--img">
              <img
                src={pageDetails[0].img}
                alt={`${pageDetails[0].title} image`}
                className="insuretechimage"
              />
            </div>
          </div>
          <div className="insurtech__page" ref={pageRefs[1]}>
            <div className="insurtech__page--details">
              <h3>{pageDetails[1].title}</h3>
              <p>{pageDetails[1].subtitle}</p>
            </div>
            <div className="insurtech__page--img">
              <img
                src={pageDetails[1].img}
                alt={`${pageDetails[1].title} image`}
                className="insuretechimage"
              />
            </div>
          </div>
          <div className="insurtech__page" ref={pageRefs[2]}>
            <div className="insurtech__page--details">
              <h3>{pageDetails[2].title}</h3>
              <p>{pageDetails[2].subtitle}</p>
            </div>
            <div className="insurtech__page--img">
              <img
                src={pageDetails[2].img}
                alt={`${pageDetails[2].title} image`}
                className="insuretechimage"
              />
            </div>
          </div>
        </div> */
}
