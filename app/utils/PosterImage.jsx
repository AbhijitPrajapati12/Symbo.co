import { useEffect, useRef } from "react";

const PosterImage = () => {
  const imgRef = useRef();

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const rotateX = (offsetY / centerY) * -12;
    const rotateY = (offsetX / centerX) * 12;

    imgRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseEnter = () => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    window.removeEventListener("mousemove", handleMouseMove);

    if (imgRef.current) {
      imgRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  //   useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       const centerX = window.innerWidth / 2;
  //       const centerY = window.innerHeight / 2;

  //       const offsetX = e.clientX - centerX;
  //       const offsetY = e.clientY - centerY;

  //       const rotateX = (offsetY / centerY) * -10; // invert Y
  //       const rotateY = (offsetX / centerX) * 10;

  //       imgRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //     };

  //     const handleMouseLeave = () => {
  //       if (imgRef.current) {
  //         imgRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  //       }
  //     };

  //     window.addEventListener("mousemove", handleMouseMove);
  //     window.addEventListener("mouseleave", handleMouseLeave);

  //     return () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //       window.removeEventListener("mouseleave", handleMouseLeave);
  //     };
  //   }, []);

  return (
    <div
      className="poster"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src="https://www.symbo.co/wp-content/webp-express/webp-images/uploads/2024/08/image-02-03.png.webp"
        alt="Symbo"
        className="poster__img"
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default PosterImage;
