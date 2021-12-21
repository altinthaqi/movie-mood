import React from "react";
import styled from "styled-components";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <FooterWrapper>
      <div className="socials">
        <BsTwitter />
        <BsInstagram />
        <BsFacebook />
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;

export default Footer;
