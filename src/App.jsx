import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import MyCareers from "./components/MyCareers";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
      <MyCareers />
      <Footer />
    </>
  );
}

export default App;
