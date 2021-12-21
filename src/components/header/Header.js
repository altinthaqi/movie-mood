import React, { useState } from "react";
import { Nav, Hamburger, Menu, MenuLink } from "./headerStyled";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import Logo from "../Logo.js";

function Header({ themeToggler, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo />
      {theme === "light" ? (
        <BsFillMoonFill className="themeIcon" onClick={() => themeToggler()} />
      ) : (
        <MdLightMode className="themeIcon" onClick={() => themeToggler()} />
      )}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="#">Watch</MenuLink>
        <MenuLink href="#">Suggest</MenuLink>
        <MenuLink href="#">Suggested</MenuLink>
        <MenuLink href="#">Login</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Header;
