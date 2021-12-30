import styled from "styled-components";
import media from "../../assets/media/media";

export const Title = styled.h1`
  font-family: "Cinzel", serif;
  font-size: 26px;
  width: 60%;
  font-weight: 900;
  text-align: center;

  ${media.tablet} {
    font-size: 46px;
  }

  ${media.desktop} {
    font-size: 46px;
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("https://wallpapercave.com/wp/wp3982534.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 1rem;
    width: 85%;
    max-width: 600px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }

  input {
    margin-top: 2rem;
    padding: 10px;
    width: 50%;
    max-width: 300px;
    border: 1px solid black;
    font-weight: 700;

    &:focus {
      outline: none;
    }
  }

  ${media.tablet} {
    p {
      margin-top: 2rem;
      font-size: 21px;
    }
  }

  ${media.desktop} {
    p {
      margin-top: 2rem;
      font-size: 21px;
    }
  }
`;
