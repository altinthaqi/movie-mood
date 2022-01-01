import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../apis/tmdb";
import { NavLink } from "react-router-dom";
import {
  Container,
  Genres,
  Banner,
  Back,
  Movies,
  Videos,
  Video,
  SectionContainer,
  MovieContainer,
  SectionTitle,
} from "../components/movies/movieStyled";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState();
  const [movieVideos, setMovieVideos] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const makeApiCall = (params) => {
    axios
      .get(params)
      .then((data) => setMovie(data.data))
      .catch((err) => console.log(err));
  };

  const recommendedApiCall = (params) => {
    axios
      .get(params)
      .then((data) => setRecommendedMovies(data.data.results))
      .catch((err) => console.log(err));
  };

  const videosApiCall = (params) => {
    axios
      .get(params)
      .then((data) => setMovieVideos(data.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const thePath = window.location.pathname;
    const pathId = thePath.substring(thePath.lastIndexOf("/") + 1);
    setMovieId(pathId);

    makeApiCall(`${api.base_url}${api.specific_movie}/${movieId}?${api.key}`);

    recommendedApiCall(
      `${api.base_url}${api.specific_movie}/${movieId}${api.recommendations}?${api.key}&language=en-US&page=1`
    );

    videosApiCall(
      `${api.base_url}${api.specific_movie}/${movieId}/${api.videos}?${api.key}`
    );
  }, [movieId]);

  let i = 0;
  let v = 0;

  const increaseRecMovie = () => {
    i++;
  };

  const increaseVideo = () => {
    v++;
  };

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

      <SectionContainer>
        <SectionTitle>Trailer:</SectionTitle>
        <Videos>
          {movieVideos &&
            movieVideos.map((m) => (
              <>
                {increaseVideo()}
                {v < 3 ? (
                  <Video key={m.id}>
                    <iframe
                      title="Trailers"
                      src={`${api.youtube_watch}${m.key}`}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </Video>
                ) : (
                  ""
                )}
              </>
            ))}
        </Videos>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>More Like This:</SectionTitle>
        <MovieContainer>
          {recommendedMovies &&
            recommendedMovies.map((m) => (
              <>
                {increaseRecMovie()}
                {i < 6 ? (
                  <Movies key={m.id}>
                    <NavLink
                      to={`/movies/${m.id}`}
                      onClick={() => setMovieId(m.id)}
                    >
                      <img
                        src={`${api.original_img_url}${m.poster_path}`}
                        alt=""
                      />
                      <p className="movie-title">{m.original_title}</p>
                    </NavLink>
                  </Movies>
                ) : (
                  ""
                )}
              </>
            ))}
        </MovieContainer>
      </SectionContainer>
    </Container>
  );
}

export default Movie;
