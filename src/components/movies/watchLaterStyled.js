import styled from "styled-components";
export const Movie = styled.div`
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
    color: ${(props) => props.theme.text};
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
