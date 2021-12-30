import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from "../apis/tmdb";

function Movies() {
  const [data, setData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    if (searchMovie === "") {
      axios
        .get(`${api.base_url}${api.by_popularity}&${api.key}`)
        .then((data) => setData(data.data.results))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `${api.base_url}${api.search_title}${api.key}${api.query}=${searchMovie}`
        )
        .then((data) => setData(data.data.results))
        .catch((err) => console.log(err));
    }
  }, [searchMovie]);

  const inputHandler = (e) => {
    setSearchMovie(e.target.value);
  };

  return (
    <>
      <Container>
        <Intro>
          <h1>Movies Move Us</h1>
          <p>
            Movies move us like nothing else can, whether they're scary, funny,
            drmatic, romantic or anywhere in-between. So many titles, so mych to
            expeirence
          </p>
          <input
            type="text"
            placeholder="Search Movie"
            onChange={inputHandler}
          />
        </Intro>

        <MovieContainer>
          {data.map((m) => (
            <Movie key={m.id}>
              <img src={`${api.original_img_url}${m.poster_path}`} alt="" />
              <p className="movie-title">{m.original_title}</p>
            </Movie>
          ))}
        </MovieContainer>
      </Container>
    </>
  );
}

const Intro = styled.div`
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://wallpapercave.com/wp/wp3982534.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 41px;
    margin-left: 2rem;
    width: 60%;

    font-weight: 900;
  }
  p {
    margin-left: 2rem;
    margin-top: 2rem;
    width: 60%;
    max-width: 600px;
    font-weight: 700;
    font-size: 21px;
  }

  input {
    margin-left: 2rem;
    margin-top: 2rem;
    padding: 10px;
    width: 50%;
    max-width: 300px;
  }
`;

const Movie = styled.div`
  flex: 0 0 auto;
  width: 24%;
  min-width: 150px;

  text-align: center;
  margin: 5px;
  cursor: pointer;
  margin-top: 40px;

  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
  }

  p {
    height: 20px;
    font-weight: 700;
    font-size: 18px;
    width: 100%;
    margin: 10px 0px;
  }
`;

const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  /* overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth; */
`;

const Container = styled.div``;

export default Movies;
