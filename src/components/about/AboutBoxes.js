import React from "react";
import styled from "styled-components";
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

const BoxesContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 90vh;

  flex-direction: column;
`;

export default AboutBoxes;
