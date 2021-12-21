import React from "react";
import serie1 from "../../assets/img/serie1.jpg";
import serie2 from "../../assets/img/serie2.jpg";
import serie3 from "../../assets/img/serie3.jpg";
import serie4 from "../../assets/img/serie4.jpg";
import styled from "styled-components";

function AboutSeries() {
  return (
    <SeriesContainer>
      <div className="seriesIntro">
        <span>included in all plans</span>
        <h2>All The Movices You Love</h2>
        <p>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, kids shows, and more.
        </p>
      </div>
      <div className="series">
        <img src={serie1} alt="" />
        <img src={serie2} alt="" />
        <img src={serie3} alt="" />
        <img src={serie4} alt="" />
      </div>
    </SeriesContainer>
  );
}

const SeriesContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .seriesIntro {
    color: ${(props) => props.theme.text};
    text-align: center;
    width: 90%;

    span {
      font-size: 12px;
    }
    h2 {
      margin: 10px 0px;
      font-weight: 900 !important;
    }
  }

  .series {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    img {
      width: 40%;
      margin: 10px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default AboutSeries;
