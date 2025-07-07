// import { Image } from "./Image";
// import Image from "next/image";
import Description from "../utils/Description";
const BusinessHelp = () => {
  return (
    <section className="businesshelp">
      <div className="businesshelp__content">
        <h5 className="businesshelp__content-heading">
          We help businesses of all kinds access insurance
        </h5>
        <Description>
          From retailers to financial services, we work with any business that
          wants to design & sell insurance. We can get you up and running in
          weeks with our cloud-based technology and extensive network of leading
          insurance providers
        </Description>
      </div>
      <img
        src={
          "https://www.symbo.co/wp-content/webp-express/webp-images/uploads/2024/04/Without-text-40.png.webp"
        }
        // src="https://www.symbo.co/wp-content/webp-express/webp-images/uploads/2024/04/Without-text-40.png.webp"
        alt="New image"
        className="businesshelp__img"
      />
    </section>
  );
};

export default BusinessHelp;
