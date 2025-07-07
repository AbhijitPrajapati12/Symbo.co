"use client";
import { useState, useEffect } from "react";
import Button from "../utils/Button";
import { Menu, Close } from "../Icons/icon";
import HeaderMenu from "../utils/HeaderMenu";
import { companyList, resourcesList, industryList } from "../utils/consts";
import ShortMenu from "./ShortMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setMenuSelected((prevState) => !prevState);
  };

  return (
    <header
      className={`header ${scrolled ? "header--white" : "header--yellow"}`}
    >
      <img
        src="https://www.symbo.co/wp-content/webp-express/webp-images/uploads/2022/05/SYMBO-LOGO-PNG-01-1536x407.png.webp"
        className="header--logo"
        alt="Symbo Logo"
      />
      <div className="header--list">
        <HeaderMenu
          isScrolled={scrolled}
          title={"Industries"}
          description={
            "Our Insurance expertise ensure carefully designed, relevant & intuitive insurance covers for industries spanning from e-commerce to fintech"
          }
          listitems={industryList}
        />
        <li
          className={`menu--list-item ${
            scrolled ? "no-hover-effect" : undefined
          }`}
        >
          <span>Platform</span>
        </li>
        <HeaderMenu
          isScrolled={scrolled}
          title={"Resources"}
          description={
            " Our Insurance expertise ensure carefully designed, relevant & intuitive insurance covers for industries spanning from e-commerce to fintech"
          }
          listitems={resourcesList}
        />
        <HeaderMenu
          isScrolled={scrolled}
          title={"Company"}
          description={
            "Symbo's mission is to transform the Insurance experience for our partners as well as their customers. We are focusing on giving our partners end-to-end service with our fully digitalized policy & claim management products."
          }
          listitems={companyList}
        />
      </div>
      <div className="header--button">
        <Button className="btn--green">Request a Demo</Button>
        <Button className="btn--green">Manage Policies</Button>
      </div>
      <div className="header__menu" onClick={handleMenu}>
        {menuSelected ? <Close /> : <Menu />}
      </div>
      {menuSelected && <ShortMenu />}
    </header>
  );
};

export default Header;
