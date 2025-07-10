"use client";

import { useState, useEffect } from "react";
import { SmallUpArrow } from "./Icon";

const DragToTop = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrolled && (
        <div
          className="dragbutton"
          onClick={moveToTop}
          style={{
            position: "fixed",
            right: "5rem",
            bottom: "5rem",
            height: "4rem",
            width: "4rem",
            backgroundColor: "#00C98F",
            padding: "5px",
            zIndex: "10",
            color: "white",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <SmallUpArrow />
        </div>
      )}
    </>
  );
};

export default DragToTop;
