import React from "react";
import styled from "styled-components";
import media from "../../assets/media/media";

function AboutBox({ id, title, text, onDelete }) {
  return (
    <Container onClick={() => onDelete(id)}>
      <Box>
        <h3>{title && title}</h3>
        <p>{text && text}</p>
      </Box>
    </Container>
  );
}

const Box = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  margin-bottom: 25px;
  padding: 20px;
  max-width: 600px;

  h3 {
    font-weight: 700;
    margin: 10px 0px;
    font-size: 21px;
    color: ${(props) => props.theme.text};
  }
  p {
    font-weight: 500;
    color: ${(props) => props.theme.text};
    font-size: 16px;
  }

  ${media.tablet} {
    padding: 40px;
    h3 {
      font-size: 23px;
    }
    p {
      font-size: 17px;
    }
  }

  ${media.desktop} {
    padding: 40px;
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
  }
`;

const Container = styled.div`
  cursor: pointer;
  transition: all 0.5s;
  height: auto;
  background-color: ${(props) => props.theme.body};

  max-width: 80%;
  margin: auto;
`;
export default AboutBox;
