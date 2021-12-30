import React from "react";
import { OptionsContainer } from "./optionsStyled";

function Options({
  activeBtn,
  popularHandler,
  highestRatedHandler,
  lowestRatedHandler,
  watchLaterHandler,
}) {
  return (
    <OptionsContainer>
      <button
        className={activeBtn === "popular" ? "active" : ""}
        onClick={popularHandler}
      >
        Most Popular
      </button>
      <button
        className={activeBtn === "highest" ? "active" : ""}
        onClick={highestRatedHandler}
      >
        Highest Rated
      </button>
      <button
        className={activeBtn === "lowest" ? "active" : ""}
        onClick={lowestRatedHandler}
      >
        Lowest Rated
      </button>
      <button
        onClick={watchLaterHandler}
        className={activeBtn === "watchLater" ? "active" : ""}
      >
        Watch Later
      </button>
    </OptionsContainer>
  );
}

export default Options;
