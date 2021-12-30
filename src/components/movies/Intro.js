import React from "react";
import { IntroContainer, Title } from "./introStyled";

function Intro({ inputHandler }) {
  return (
    <IntroContainer>
      <Title>MOVIES MOVE US</Title>
      <p>
        Movies move us like nothing else can, whether they're scary, funny,
        dramatic, romantic or anywhere in-between. So many titles, so much to
        experience!
      </p>
      <input type="text" placeholder="Search Movie" onChange={inputHandler} />;
    </IntroContainer>
  );
}

export default Intro;
