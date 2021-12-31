import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../apis/tmdb";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

//Components
import Intro from "../components/movies/Intro";
import Options from "../components/movies/Options";
import WatchLater from "../components/movies/WatchLater";
import MoviesList from "../components/movies/MoviesList";

function Movies() {
  //States
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [activeBtn, setActiveBtn] = useState("popular");
  const [paginationPage, setPaginationPage] = useState(1);
  const [watchLater, setWatchLater] = useState([]);

  //Makes API Call. Type depends on parameters
  const makeApiCall = (params) => {
    axios
      .get(params)
      .then((data) => setMovies(data.data.results))
      .catch((err) => console.log(err));
  };

  //useEffect for each type of API calls
  useEffect(() => {
    if (searchMovie === "") {
      if (activeBtn === "popular") {
        makeApiCall(
          `${api.base_url}${api.by_popularity}&${api.key}${api.page}${paginationPage}`
        );
      } else if (activeBtn === "highest") {
        makeApiCall(
          `${api.base_url}${api.search_movie}${api.highest_rated}&${api.key}${api.page}${paginationPage}`
        );
      } else if (activeBtn === "lowest") {
        makeApiCall(
          `${api.base_url}${api.search_movie}${api.lowest_rated}&${api.key}${api.page}${paginationPage}`
        );
      }
    } else {
      //Waits 1s for API request (mos me e ngarku sistemin per qdo shkronje...)
      const identifier = setTimeout(() => {
        makeApiCall(
          `${api.base_url}${api.search_title}${api.key}${api.query}=${searchMovie}`
        );
      }, 1000);

      return () => {
        clearTimeout(identifier);
      };
    }
  }, [searchMovie, paginationPage, activeBtn]);

  //Handlers
  const inputHandler = (e) => {
    setSearchMovie(e.target.value);
  };
  const popularHandler = () => {
    setActiveBtn("popular");
    setPaginationPage(1);
  };
  const highestRatedHandler = () => {
    setActiveBtn("highest");
    setPaginationPage(1);
  };
  const lowestRatedHandler = () => {
    setActiveBtn("lowest");
    setPaginationPage(1);
  };
  const watchLaterHandler = () => {
    setActiveBtn("watchLater");
  };
  const deleteFavoritesHandler = (id) => {
    const filteredMovies = watchLater.filter((m) => m.id !== id);
    setWatchLater(filteredMovies);
  };

  //Change page for another 20 movies
  const changePagination = (numb) => {
    setPaginationPage(
      paginationPage + numb >= 1 ? paginationPage + numb : paginationPage
    );
  };

  //Watch Later Stars logic
  const wlStar = (obj) => {
    //Accepts a movie obj. If watchLater contains movie, return the filled (no onclick)
    const filteredList = watchLater.filter((m) => m.id === obj.id);
    if (filteredList.length !== 0) {
      return <AiFillStar />;
    } else {
      return (
        //If watchLater !== contains movie, return outline (w/onclick)
        <AiOutlineStar onClick={() => setWatchLater([obj, ...watchLater])} />
      );
    }
  };

  return (
    <>
      <Intro inputHandler={inputHandler} />

      <Options
        activeBtn={activeBtn}
        popularHandler={popularHandler}
        highestRatedHandler={highestRatedHandler}
        lowestRatedHandler={lowestRatedHandler}
        watchLaterHandler={watchLaterHandler}
      />

      {activeBtn !== "watchLater" && (
        <MoviesList
          movies={movies}
          wlStar={wlStar}
          changePagination={changePagination}
          paginationPage={paginationPage}
        />
      )}

      {activeBtn === "watchLater" && (
        <WatchLater
          watchLater={watchLater}
          deleteFavoritesHandler={deleteFavoritesHandler}
        />
      )}
    </>
  );
}

export default Movies;
