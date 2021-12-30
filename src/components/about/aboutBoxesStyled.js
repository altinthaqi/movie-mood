import styled from "styled-components";

export const BoxesContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 90vh;

  flex-direction: column;
`;
