import { useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { DarkMode } from "./Style";

export const Dark = () => {
  return (
    <>
      <FaRegMoon />
      Dark Mode
    </>
  );
};
export const Light = () => {
  return (
    <>
      <FaSun />
      Light Mode
    </>
  );
};

const ThemeMode = ({ modeHandler }) => {
  const [theme, setTheme] = useState(false);

  const themeHandler = () => {
    setTheme(!theme);
    modeHandler(theme);
  };
  return (
    <DarkMode onClick={themeHandler}>{theme ? <Dark /> : <Light />}</DarkMode>
  );
};

export default ThemeMode;
