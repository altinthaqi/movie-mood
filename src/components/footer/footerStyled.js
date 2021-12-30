import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;
  margin-top: -2px;

  .socials {
    margin: 10px;

    .social {
      margin: 10px;
      font-size: 21px;
      color: ${(props) => props.theme.text};
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 10px;
      font-weight: 700;
      color: ${(props) => props.theme.text};
    }
  }
  .logo {
    margin: 20px 0px;
  }

  .cpr {
    font-size: 14px;
    color: ${(props) => props.theme.text};
  }
`;
