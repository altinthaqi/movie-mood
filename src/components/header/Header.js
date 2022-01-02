import React, { useState } from "react";
import { Nav, Hamburger, Menu, MenuLink } from "./headerStyled";
import { NavLink } from "react-router-dom";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import Logo from "../Logo.js";

function Header({ themeToggler, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLink to="/">
        <Logo />
      </NavLink>

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
        <NavLink
          onClick={() => (isOpen === true ? setIsOpen(!isOpen) : "")}
          to="/movies"
        >
          <MenuLink>Movies</MenuLink>
        </NavLink>

        <NavLink
          onClick={() => (isOpen === true ? setIsOpen(!isOpen) : "")}
          to="/suggestions"
        >
          <MenuLink>Suggestions</MenuLink>
        </NavLink>

        <MenuLink>Login</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Header;
