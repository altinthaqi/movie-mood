import React, { useState } from "react";
import styled from "styled-components";
import slider0 from "../../assets/img/slider0.jpg";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";
import { slides } from "../../data/data";
import media from "../../assets/media/media";

function AboutSlider() {
  const [slide, setSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <SliderContainer>
      <FcPrevious className="arrow prev" onClick={prevSlide} />

      {slide === 0 && <img alt="" src={slider0} />}
      {slide === 1 && <img alt="" src={slider1} />}
      {slide === 2 && <img alt="" src={slider2} />}
      <SliderBox>
        <h2>{slides[slide].title}</h2>
        <p>{slides[slide].text}</p>
      </SliderBox>
      <FcNext className="arrow next" onClick={nextSlide} />
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  height: 80vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  padding: 100px 0px;
  width: 100%;

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

const SliderBox = styled.div`
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
export default AboutSlider;
