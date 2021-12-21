import React from "react";
import styled from "styled-components";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import Logo from "../Logo";

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

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;

  .socials {
    margin: 10px;

    .social {
      margin: 10px;
      font-size: 21px;
      color: ${(props) => props.theme.text};
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 10px;
      font-weight: 700;
      color: ${(props) => props.theme.text};
    }
  }
  .logo {
    margin: 20px 0px;
  }

  .cpr {
    font-size: 14px;
    color: ${(props) => props.theme.text};
  }
`;

export default Footer;
