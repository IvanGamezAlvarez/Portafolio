import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
