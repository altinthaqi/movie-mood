import styled from "styled-components";
import media from "../../assets/media/media";

export const HeaderStyled = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap");
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.body};
  transition: all 0.5s;
  position: sticky;
  top: 0;

  nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 1.5rem;

    ul {
      display: flex;
      align-items: center;

      li {
        button {
          border: 1px solid gray;
          background: none;
          padding: 7px 12px;
          cursor: pointer;
          transition: 1s all;
          color: ${(props) => props.theme.text};

          &:hover {
            transition: 1s all;
          }
        }
      }
    }
  }
  .themeIcon {
    font-size: 18px;
    margin: 0px 20px;
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }
  #logo {
    font-family: "Cinzel", serif;
    font-weight: 600;
    font-size: 21px;
    color: ${(props) => props.theme.text};
  }

  ${media.tablet} {
    nav {
      margin: 0px 4rem;
    }
    .themeIcon {
      margin: 0px 4rem;
    }
  }
`;
