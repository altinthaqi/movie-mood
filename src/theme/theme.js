import { createGlobalStyle } from "styled-components";
import bannerLight from "../assets/img/banner-light.jpg";
import bannerDark from "../assets/img/banner-dark.jpg";

export const lightTheme = {
  body: "#fff",
  text: "#000",
  bannerImg: bannerLight,
};

export const darkTheme = {
  body: "#000",
  text: "#fff",
  bannerImg: bannerDark,
};

// export const GlobalStyles = createGlobalStyle`
//     body{
//         background-color: ${(props) => props.theme.body}
//     }
// `;
