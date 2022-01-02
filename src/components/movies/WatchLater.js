import React from "react";
import { api } from "../../apis/tmdb";
import { AiFillStar } from "react-icons/ai";
import { MovieContainer, Movie } from "./watchLaterStyled";
import { NavLink } from "react-router-dom";

function WatchLater({ watchLater, deleteFavoritesHandler }) {
  return (
    <MovieContainer>
      {watchLater.length !== 0 ? (
        watchLater.map((m) => (
          <Movie key={m.id}>
            <NavLink to={`/movies/${m.id}`}>
              <img src={`${api.original_img_url}${m.poster_path}`} alt="" />
              <p className="movie-title">{m.original_title}</p>
            </NavLink>
            <AiFillStar onClick={() => deleteFavoritesHandler(m.id)} />
          </Movie>
        ))
      ) : (
        <p style={{ margin: "40px 0px" }}>Watch Later is empty!</p>
      )}
    </MovieContainer>
  );
}

export default WatchLater;
