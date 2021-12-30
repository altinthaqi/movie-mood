import styled from "styled-components";
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.body};
  box-shadow: 0 3px 5px rgba(36, 36, 36, 0.1);

  .themeIcon {
    font-size: 18px;
    margin: 0px 20px;
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;

  span {
    height: 2px;
    width: 25px;
    background-color: ${(props) => props.theme.text};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10px;

  @media (max-width: 768px) {
    overflow: hidden;

    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
export const MenuLink = styled.p`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
`;
