"use client";

import { useState } from "react";
import { SmallUpArrow, SmallDownArrow } from "../Icons/Icon";

const MenuItem = ({ title, options }) => {
  const [menuSelected, setMenuSelected] = useState(false);

  const handleSelect = () => {
    setMenuSelected((prevState) => !prevState);
  };

  return (
    <li className="shortmenu__item" onClick={handleSelect}>
      <div className="shortmenu__content">
        {title} {menuSelected ? <SmallUpArrow /> : <SmallDownArrow />}
      </div>
      <div
        className={`shortmenu__options ${menuSelected ? "shortmenu--active" : undefined
          }`}
      >
        <ul className="shortmenu__list">
          {options.map((item, index) => (
            <li className="shortmenu__item" key={index}>
              <div className="shortmenu__content">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default MenuItem;
