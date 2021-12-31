import React from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../apis/tmdb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MovieContainer, Movie, Pagination } from "./moviesListStyled";

function MoviesList({ movies, wlStar, changePagination, paginationPage }) {
  return (
    <>
      <MovieContainer>
        {movies.map((m) => (
          <Movie key={m.id}>
            <NavLink to={`/movies/${m.id}`}>
              <img src={`${api.original_img_url}${m.poster_path}`} alt="" />
              <p className="movie-title">{m.original_title}</p>
            </NavLink>
            {wlStar(m)}
          </Movie>
        ))}
      </MovieContainer>
      <Pagination>
        <FaArrowLeft className="arrow" onClick={() => changePagination(-1)} />
        {paginationPage > 1 && (
          <p onClick={() => changePagination(-1)}>{paginationPage - 1}</p>
        )}
        <p className="first" onClick={() => changePagination(-1)}>
          {paginationPage}
        </p>

        <p onClick={() => changePagination(+1)}>{paginationPage + 1}</p>
        <FaArrowRight className="arrow" onClick={() => changePagination(+1)} />
      </Pagination>
    </>
  );
}

export default MoviesList;
