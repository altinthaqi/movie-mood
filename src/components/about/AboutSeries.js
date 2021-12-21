import React from "react";
import serie1 from "../../assets/img/serie1.jpg";
import serie2 from "../../assets/img/serie2.jpg";
import serie3 from "../../assets/img/serie3.jpg";
import serie4 from "../../assets/img/serie4.jpg";
import styled from "styled-components";
import media from "../../assets/media/media";

function AboutSeries() {
  return (
    <SeriesContainer>
      <SeriesIntro>
        <span>included in all plans</span>
        <h2>All The Movices You Love</h2>
        <p>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, kids shows, and more.
        </p>
      </SeriesIntro>
      <Series>
        <img src={serie1} alt="" />
        <img src={serie2} alt="" />
        <img src={serie3} alt="" />
        <img src={serie4} alt="" />
      </Series>
    </SeriesContainer>
  );
}

const Series = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    width: 40%;
    margin: 10px;
    opacity: 0.8;
    max-height: 430px;
    max-width: 274px;

    &:hover {
      opacity: 1;
    }
  }

  ${media.tablet} {
    img {
      width: 30%;
    }
  }

  ${media.desktop} {
    img {
      width: 30%;
    }
  }
`;

const SeriesIntro = styled.div`
  color: ${(props) => props.theme.text};
  text-align: center;
  width: 90%;

  span {
    font-size: 12px;
  }
  h2 {
    margin: 10px 0px;
    font-weight: 900 !important;
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }

  ${media.tablet} {
    span {
      font-size: 16px;
    }
    h2 {
    }
    font-size: 31px;
    p {
      font-size: 18px;
    }
  }

  ${media.desktop} {
    span {
      font-size: 18px;
    }
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 21px;
    }
  }
`;

const SeriesContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default AboutSeries;
