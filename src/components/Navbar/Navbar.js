import { Logo, Nav } from "./Style";
import ThemeMode from "../ThemeMode/ThemeMode";

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
