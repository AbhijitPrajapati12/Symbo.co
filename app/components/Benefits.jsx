import { benefitsArr } from "../utils/consts";
import { Image } from "./Image";
import Description from "../utils/Description";
import ScrollUpAnimation from "../animation-utils/ScrollUpAnimation";

const Benefits = () => {
  return (
    <div className="benefits">
      {benefitsArr.map((item, index) => (
        <div className="benefits__item" key={index}>
          <Image
            src={item.img}
            alt={`${item.title}-${index}`}
            className="benefits__img"
          />
          <ScrollUpAnimation>
            <div className="benefits__title">{item.title}</div>
          </ScrollUpAnimation>
          <ScrollUpAnimation>
            <Description className="des des--centre">{item.des}</Description>
          </ScrollUpAnimation>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
