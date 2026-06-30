import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Statistics from "./components/Statistics";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <CustomCursor />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Statistics />
      <Timeline />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;