import styled from "styled-components";
import media from "../../assets/media/media";
import { api } from "../../apis/tmdb";

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.text};
  margin-top: 100px;
  font-weight: 500;
  font-family: "Cinzel", serif;
`;

export const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;
  margin: auto;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  ${media.tablet} {
    max-width: 800px;
  }
  ${media.desktop} {
    max-width: 900px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Videos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Video = styled.div`
  max-width: 200px;
  margin: 20px;
  iframe {
    width: 100%;
  }

  ${media.tablet} {
    max-width: 300px;
  }
  ${media.desktop} {
    max-width: 500px;
  }
`;

export const Movies = styled.div`
  flex: 0 0 auto;
  width: 24%;
  min-width: 140px;
  text-align: center;
  margin: 30px 10px 10px 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    margin: 10px 0px;
    color: ${(props) => props.theme.text};
  }

  ${media.tablet} {
    margin-top: 40px;
    font-size: 18px;
  }
  ${media.desktop} {
    margin-top: 40px;
    font-size: 18px;
  }
`;

export const Back = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 9;
  border: 1px solid white;
  padding: 7px 20px;
  cursor: pointer;
  color: white;
  font-weight: 500;

  &:hover {
    transition: all 0.5s;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const Genres = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  button {
    border: 1px solid white;
    background: none;
    color: white;
    padding: 10px;
    margin: 10px;
    transition: all 0.5s;
    font-weight: 500;

    &:hover {
      transition: all 0.5s;
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${api.original_img_url}${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;

  h1 {
    color: white;
    font-size: 31px;
    max-width: 70%;
    padding: 15px;
    border: 2px solid white;
    font-family: "Cinzel", serif;
  }

  p {
    color: white;
    max-width: 80%;
    font-weight: 600;
    font-size: 18px;
    margin: 50px 10px 50px 10px;
    font-family: "Cinzel", serif;
  }

  ${media.tablet} {
    h1 {
      font-size: 51px;
      max-width: 800px;
      padding: 15px;
    }
    p {
      max-width: 800px;
    }
  }
  ${media.desktop} {
    h1 {
      font-size: 51px;
      max-width: 800px;
      padding: 15px;
    }
    p {
      max-width: 800px;
    }
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;
