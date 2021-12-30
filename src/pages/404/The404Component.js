import React from "react";
import styled from "styled-components";
import media from "../../assets/media/media";
import image from "../../assets/img/error404.png";

function The404Component() {
  return (
    <Container>
      <img src={image} alt="" />
    </Container>
  );
}

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body};

  img {
    margin: auto;
    max-width: 250px;
  }
  ${media.tablet} {
    img {
      max-width: 400px;
    }
  }

  ${media.desktop} {
    img {
      max-width: 400px;
    }
  }
`;

export default The404Component;
