import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState(false);

  const darkModeHandler = (mode) => {
    setTheme(mode);
  };

  return (
    <div className="App">
      {console.log(theme)}
      <Navbar darkModeHandler={darkModeHandler} />
    </div>
  );
}

export default App;
