import styled from "styled-components";

import ThemeMode from "./ThemeMode";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
  background: #999;
  box-shadow: 0 0 7px 1px #444;
`;

const Logo = styled.h3`
  position: relative;
  font-family: "Raleway", sans-serif;

  &:before {
    position: absolute;
    right: 1.6rem;
    bottom: -0.4rem;
    content: "";
    width: 1.5rem;
    height: 1.5px;
    background: #333;
    border-radius: 1rem;
  }
  &:after {
    position: absolute;
    right: 1.1rem;
    bottom: -0.2rem;
    content: "";
    width: 2.5rem;
    height: 1.5px;
    background: #333;
  }
`;

const Navbar = ({ darkModeHandler }) => {
  return (
    <>
      <Nav>
        <Logo>Where in the world ?</Logo>
        <ThemeMode modeHandler={darkModeHandler} />
      </Nav>
    </>
  );
};

export default Navbar;
