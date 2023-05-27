import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const DarkMode = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 7rem;
  padding: 0.5rem 0.5rem;
  background: transparent;
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
`;

export const lightTheme = {
  body: "#FFF",
  nav: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};
export const darkTheme = {
  body: "#363537",
  nav: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  boxShadow: "0 0 7px 1px #fff",
};

export const GlobalStyles = createGlobalStyle`
  body,
  section,
  nav,
  button,
  *:before,
  *:after
   {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color:${({ theme }) => `${theme.text} !important`};
  }
  `;
