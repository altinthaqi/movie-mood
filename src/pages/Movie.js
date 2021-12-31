import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../apis/tmdb";
import { NavLink } from "react-router-dom";
import {
  Container,
  Genres,
  Banner,
  Back,
} from "../components/movies/movieStyled";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState();

  const makeApiCall = (params) => {
    axios
      .get(params)
      .then((data) => setMovie(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const thePath = window.location.pathname;
    const pathId = thePath.substring(thePath.lastIndexOf("/") + 1);
    setMovieId(pathId);

    makeApiCall(`${api.base_url}${api.specific_movie}/${movieId}?${api.key}`);
  }, [movieId]);

  return (
    <Container>
      <Banner img={movie.backdrop_path}>
        <NavLink to="/movies">
          <Back>back</Back>
        </NavLink>
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
        <Genres>
          {movie.genres &&
            movie.genres.map((genre) => (
              <button key={genre.id}>{genre.name}</button>
            ))}
        </Genres>
      </Banner>
    </Container>
  );
}

export default Movie;
