import React, { useState } from "react";
import styled from "styled-components";
import Suggest from "../components/suggestions/Suggest";
import Suggested from "../components/suggestions/Suggested";
import { suggested } from "../data/data";

function Suggestion() {
  const [currentChoice, setCurrentChoice] = useState();
  const [suggestions, setSuggestions] = useState(suggested);

  const submitHandler = (query) => {
    setSuggestions([query, ...suggestions]);
  };
  return (
    <Container>
      <Banner>
        {!currentChoice && (
          <>
            <h1>The movie you're looking for isn't included?</h1>
            <p>
              You can suggest it down below. You can also check suggested
              movies.
            </p>
          </>
        )}

        {currentChoice === "suggest" && (
          <>
            <h1>You are now suggesting a movie!</h1>
            <p>
              Make sure to type the movie informations correctly, our team will
              soon contact you!
            </p>
          </>
        )}

        {currentChoice === "suggested" && (
          <>
            <h1>You are now viewing suggested movies!</h1>
            <p>
              These are the movies that were suggested by our users. If there's
              a movie you want us add in our collection, make sure to "suggest"
              it.
            </p>
          </>
        )}

        <Choice>
          <button onClick={() => setCurrentChoice("suggest")}>Suggest</button>
          <button onClick={() => setCurrentChoice("suggested")}>
            Suggested
          </button>
        </Choice>
      </Banner>

      {currentChoice === "suggest" && (
        <Suggest submitHandler={submitHandler}></Suggest>
      )}
      {currentChoice === "suggested" && (
        <Suggested suggestions={suggestions}></Suggested>
      )}
    </Container>
  );
}

export const Choice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  button {
    border: 1px solid white;
    background-color: white;
    color: black;
    padding: 7px 10px;
    margin: 20px;
    transition: all 0.5s;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      transition: all 0.5s;
      background: none;
      color: white;
    }
  }
`;

const Banner = styled.div`
  height: 60vh;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("https://images3.alphacoders.com/606/606650.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 26px;
  }
  p {
    font-weight: 500;
  }

  h1,
  p {
    max-width: 400px;
    margin: 20px;

    text-align: center;

    font-family: "Cinzel", serif;
  }
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;

export default Suggestion;
