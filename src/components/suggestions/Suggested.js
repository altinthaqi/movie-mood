import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function Suggested({ suggestions }) {
  const [openedMovieDetails, setOpenedMovieDetails] = useState();

  return (
    <Container>
      <Title>View Suggested:</Title>
      {suggestions &&
        suggestions.map((item) => (
          <Suggestion key={item.id}>
            {openedMovieDetails !== item.id ? (
              <RiArrowDownSLine
                className="arrow"
                onClick={() => setOpenedMovieDetails(item.id)}
              />
            ) : (
              <RiArrowUpSLine
                className="arrow"
                onClick={() => setOpenedMovieDetails()}
              />
            )}

            {openedMovieDetails !== item.id ? (
              ""
            ) : (
              <img src={item.img} alt="" />
            )}
            <h2>{item.title}</h2>
            {openedMovieDetails !== item.id ? "" : <p>{item.description}</p>}
            <span>suggested: {item.name}</span>
          </Suggestion>
        ))}

      {/*  */}
    </Container>
  );
}

export const Suggestion = styled.div`
  transition: all 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 80%;
  border: 1px solid gray;
  margin: 20px 0px;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  .arrow {
    position: absolute;
    font-size: 41px;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  img {
    max-height: 250px;
    height: 100%;
    align-self: center;
  }

  span {
    color: gray;
    cursor: pointer;
    font-size: 14px;
  }

  h2 {
    margin: 20px 0px;
    max-width: 70%;

    font-family: "Cinzel", serif;
  }

  p {
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
`;

export const Title = styled.h2`
  align-self: flex-start;
  color: ${(props) => props.theme.text};
  font-family: "Cinzel", serif;
  margin: 50px 0px 20px 0px;
  align-self: center;
`;

export default Suggested;
