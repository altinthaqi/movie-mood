import React, { useState } from "react";
import slider0 from "../../assets/img/slider0.jpg";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";
import { slides } from "../../data/data";
import { SliderContainer, SliderBox } from "./aboutSliderStyled";

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

export default AboutSlider;
