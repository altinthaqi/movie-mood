import React from "react";
// import BannerImg from "../assets/img/banner.jpg";
import styled from "styled-components";

function About() {
  return (
    <>
      <Banner>
        <Title>Cinema is a mirror by which we often see ourselves.</Title>
      </Banner>
      <IntroSection>
        <p>
          At Movie Mood, we want to entertain the world. Whatever your taste,
          and no matter where you live, we give you access to best-in-class TV
          shows, movies and documentaries. Our members control what they want to
          watch, when they want it, with no ads, in one simple subscription.
          We're streaming in more than 30 languages and 190 countries, because
          great stories can come from anywhere and be loved everywhere. We are
          the world's biggest fans of entertainment, and we're always looking to
          help you find your next favorite story.
        </p>
      </IntroSection>
    </>
  );
}

const IntroSection = styled.div`
  transition: all 0.5s;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body};
  width: 100%;

  p {
    padding: 0px 50px;
    text-align: center;
    font-weight: 500;
    max-width: 960px;
    color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 30px;
  padding: 0 52px;
  max-width: 960px;
  font-weight: 700;
`;

const Banner = styled.div`
  transition: all 0.5s;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${(props) => props.theme.bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default About;