"use client";

import { useState, useEffect } from "react";
import { DownArrow } from "../Icons/Icon";

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
  return (
    <>
      {size.height > 700 && (
        <div
          className="dragbutton"
          style={{
            height: "20px",
            width: "20px",
            backgroundColor: "#00C98F",
            padding: "5px",
          }}
        >
          <DownArrow />
        </div>
      )}
    </>
  );
};

export default DragToTop;
