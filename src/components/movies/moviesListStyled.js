import styled from "styled-components";
import media from "../../assets/media/media";

export const Movie = styled.div`
  flex: 0 0 auto;
  width: 24%;
  min-width: 150px;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  margin-top: 20px;
  min-height: 330px;

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
    min-height: 400px;
  }
  ${media.desktop} {
    margin-top: 40px;
    font-size: 18px;
    min-height: 500px;
  }
`;

export const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  align-items: center;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  margin: -2px 0px;
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
