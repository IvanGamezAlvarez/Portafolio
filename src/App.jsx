import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Projects />
    </>
  );
}

export default App;
