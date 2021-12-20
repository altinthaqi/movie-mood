import React, { useState } from "react";
import { HeaderStyled } from "./headerStyled";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

function Header({ themeToggler, theme }) {
  return (
    <HeaderStyled>
      <nav>
        <p id="logo">Movie Mood</p>
        <ul>
          <li>
            {theme === "light" ? (
              <BsFillMoonFill
                className="themeIcon"
                onClick={() => themeToggler()}
              />
            ) : (
              <MdLightMode
                className="themeIcon"
                onClick={() => themeToggler()}
              />
            )}
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
