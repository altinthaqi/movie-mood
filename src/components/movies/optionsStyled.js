import styled from "styled-components";
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.body};
  margin: -2px 0px;

  button {
    padding: 8px;
    margin: 10px;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};

    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
    border: 1px solid ${(props) => props.theme.text};

    &:hover {
      transition: all 0.5s;
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
      border: 1px solid ${(props) => props.theme.text};
    }
  }

  .active {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
