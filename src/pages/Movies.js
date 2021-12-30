import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from "../apis/tmdb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Movies() {
  const [data, setData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [activeBtn, setActiveBtn] = useState("popular");
  const [paginationPage, setPaginationPage] = useState(1);
  const [watchLater, setWatchLater] = useState([]);

  const makeApiCall = (params) => {
    axios
      .get(params)
      .then((data) => setData(data.data.results))
      .catch((err) => console.log(err));
  };

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

  const changePagination = (numb) => {
    setPaginationPage(
      paginationPage + numb >= 1 ? paginationPage + numb : paginationPage
    );
  };

  const watchLaterHandler = () => {
    setActiveBtn("watchLater");
  };

  const deleteFavoritesHandler = (id) => {
    const filteredMovies = watchLater.filter((m) => m.id !== id);
    setWatchLater(filteredMovies);
  };

  const wlStar = (id, obj) => {
    const filteredList = watchLater.filter((m) => m.id === id);
    if (filteredList.length !== 0) {
      return <AiFillStar />;
    } else {
      return (
        <AiOutlineStar onClick={() => setWatchLater([obj, ...watchLater])} />
      );
    }
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
        <Options>
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
        </Options>
        {activeBtn !== "watchLater" && (
          <>
            <MovieContainer>
              {data.map((m) => (
                <Movie key={m.id}>
                  <img src={`${api.original_img_url}${m.poster_path}`} alt="" />
                  <p className="movie-title">{m.original_title}</p>
                  {wlStar(m.id, m)}
                </Movie>
              ))}
            </MovieContainer>

            <Pagination>
              <FaArrowLeft
                className="arrow"
                onClick={() => changePagination(-1)}
              />
              {paginationPage > 1 && (
                <p onClick={() => changePagination(-1)}>{paginationPage - 1}</p>
              )}
              <p className="first" onClick={() => changePagination(-1)}>
                {paginationPage}
              </p>

              <p onClick={() => changePagination(+1)}>{paginationPage + 1}</p>
              <FaArrowRight
                className="arrow"
                onClick={() => changePagination(+1)}
              />
            </Pagination>
          </>
        )}
        {activeBtn === "watchLater" && (
          <>
            <MovieContainer>
              {watchLater.map((m) => (
                <Movie key={m.id}>
                  <img src={`${api.original_img_url}${m.poster_path}`} alt="" />
                  <p className="movie-title">{m.original_title}</p>
                  <AiFillStar onClick={() => deleteFavoritesHandler(m.id)} />
                </Movie>
              ))}
            </MovieContainer>
          </>
        )}
      </Container>
    </>
  );
}

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  background-color: ${(props) => props.theme.body};

  p {
    margin: 0px 20px;
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }

  .first {
    font-size: 18px;
    font-weight: 900;
  }

  .arrow {
    cursor: pointer;
    color: ${(props) => props.theme.text};
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.body};
  /* color: ${(props) => props.theme.text}; */

  button {
    padding: 8px;
    margin: 10px;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};

    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
    border: 1px solid ${(props) => props.theme.text};

    &:hover {
      transition: all 0.5s;
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
      border: 1px solid ${(props) => props.theme.text};
    }
  }

  .active {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

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
    border: 1px solid black;
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
    height: 50px;
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
