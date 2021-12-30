import React from "react";
import { Container, Box } from "./aboutBoxStyled";

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

export default AboutBox;
