import media from "../../assets/media/media";
import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 80vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  padding: 100px 0px;
  width: 100%;
  margin: -2px 0px;

  img {
    height: 90%;
    width: 100%;
  }

  .arrow {
    cursor: pointer;
    position: absolute;
    bottom: 50%;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    padding: 10px;
    font-size: 21px;
    border: 1px solid ${(props) => props.theme.text};
  }

  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }

  ${media.tablet} {
    img {
      height: 100%;
    }
  }
  ${media.desktop} {
    height: 85vh;
    img {
      height: 100%;
    }
  }
`;

export const SliderBox = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  position: absolute;
  bottom: 3%;
  width: auto;

  margin: 0px 20px 10px 20px;
  padding: 10px 0px;

  h2 {
    text-align: center;
    padding-top: 10px;
  }
  p {
    text-align: center;
    max-width: 90%;
    margin: auto;
    padding: 15px 0px;
  }

  ${media.tablet} {
    right: 50%;
    width: 100%;
    max-width: 500px;
    transform: translate(50%, 0%);
  }

  ${media.desktop} {
    right: 50%;
    width: 100%;
    max-width: 675px;
    transform: translate(50%, 0%);
  }
`;
