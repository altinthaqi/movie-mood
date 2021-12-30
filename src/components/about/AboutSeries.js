import React from "react";
import serie1 from "../../assets/img/serie1.jpg";
import serie2 from "../../assets/img/serie2.jpg";
import serie3 from "../../assets/img/serie3.jpg";
import serie4 from "../../assets/img/serie4.jpg";
import { SeriesContainer, SeriesIntro, Series } from "./aboutSeriesStyled";

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

export default AboutSeries;
