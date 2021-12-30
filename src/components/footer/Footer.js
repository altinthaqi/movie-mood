import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import Logo from "../Logo";
import { FooterWrapper } from "./footerStyled";

function Footer() {
  return (
    <FooterWrapper>
      <div className="socials">
        <BsTwitter className="social" />
        <BsInstagram className="social" />
        <BsFacebook className="social" />
      </div>
      <ul className="links">
        <li>Help Center</li>
        <li>Privacy</li>
        <li>Cookie Preference</li>
      </ul>
      <span className="logo">
        <Logo />
      </span>
      <p className="cpr">© 2021 MOVIE MOOD</p>
    </FooterWrapper>
  );
}

export default Footer;
