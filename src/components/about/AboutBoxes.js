import React from "react";
import { BoxesContainer } from "./aboutBoxesStyled";
import AboutBox from "./AboutBox";

function AboutBoxes({ boxData, onDelete }) {
  return (
    <BoxesContainer>
      {boxData.map((box) => (
        <AboutBox
          key={box.id}
          onDelete={onDelete}
          id={box.id}
          title={box.title}
          text={box.text}
        />
      ))}
      {boxData.length === 0 && (
        <AboutBox
          title={"What you waiting for?"}
          onDelete={() => ""}
          text={
            "Sign Up now and fix your Mood with the latest movies and series inside your favorite User Friendly app, Movie Mood. Even for Students."
          }
        />
      )}
    </BoxesContainer>
  );
}

export default AboutBoxes;
