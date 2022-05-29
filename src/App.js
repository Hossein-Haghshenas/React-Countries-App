import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  const [theme, setTheme] = useState(false);

  const darkModeHandler = (mode) => {
    setTheme(mode);
  };

  return (
    <>
      <Navbar darkModeHandler={darkModeHandler} />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
