"use client";

import { useRef, useEffect } from "react";

const ScrollUpAnimation = ({ children }) => {
  const containerRef = useRef(null);

  // IntersectionObserver callback
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scrollup__visible");
        // observer.unobserve(entry.target); // optional: only run once
      }
    });
  };

  // Observer options
  const options = {
    threshold: 0.2, // Trigger when 10% of element is visible
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <div className="scrollup" ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollUpAnimation;
