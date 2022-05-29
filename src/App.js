import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/ThemeMode/Style";
import { lightTheme, darkTheme } from "./components/ThemeMode/Style";

function App() {
  const [theme, setTheme] = useState(true);

  const darkModeHandler = (mode) => {
    setTheme(mode);
  };

  return (
    <ThemeProvider theme={!theme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar darkModeHandler={darkModeHandler} />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
