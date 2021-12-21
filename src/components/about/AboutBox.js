import React from "react";
import styled from "styled-components";

function AboutBox({ id, title, text, onDelete }) {
  return (
    <Container onClick={() => onDelete(id)}>
      <div className="box">
        <h3>{title && title}</h3>
        <p>{text && text}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  transition: all 0.5s;
  height: auto;
  background-color: ${(props) => props.theme.body};

  max-width: 80%;
  margin: auto;

  .box {
    border: 1px solid ${(props) => props.theme.text};
    margin-bottom: 25px;
    padding: 10px;
    h3 {
      font-weight: 700;
      margin: 10px 0px;
      font-size: 21px;
      color: ${(props) => props.theme.text};
    }
    p {
      font-weight: 400;
      color: ${(props) => props.theme.text};
    }
  }
`;
export default AboutBox;
