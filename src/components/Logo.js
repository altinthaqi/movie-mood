import React from "react";
import styled from "styled-components";

function Logo() {
  return <LogoText>Movie Mood</LogoText>;
}

const LogoText = styled.p`
  font-family: "Cinzel", serif;
  font-weight: 600;
  font-size: 21px;
  color: ${(props) => props.theme.text};
`;

export default Logo;
