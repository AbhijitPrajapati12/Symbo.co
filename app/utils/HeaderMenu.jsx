import { DownArrow } from "../Icons/icon";

const HeaderMenu = ({ title, description, listitems, isScrolled }) => {
  return (
    <li
      className={`menu--list-item ${
        isScrolled ? "no-hover-effect" : undefined
      }`}
    >
      <span>{title}</span>
      <DownArrow className="down-arrow" />
      <div className="menu--list-item-hidden">
        <div className="hidden-content industry">
          <h4 className="hidden-content--title">{title}</h4>
          <p className="hidden-content--description">{description}</p>
          <ul className="hidden-content--list">
            {listitems.map((item, index) => {
              return (
                <li className="hidden-content--list-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default HeaderMenu;
