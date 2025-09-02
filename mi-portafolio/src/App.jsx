import { useRef } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Experience from "./Components/Experiencia";
import Projects from "./Components/Projects";
import ScrollButton from "./Components/ScrollButton";
import TechIcons from "./Components/TechIcons";
import "./Styles/ScrollButton.css"


function App() {

  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const techIconsRef = useRef(null);
  const sections = [heroRef, experienceRef, projectsRef, techIconsRef];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2">
        <section ref={heroRef} id="hero"> <Hero /> </section>
        <section ref={experienceRef} id="experience"> <Experience /> </section>
        <section ref={techIconsRef} id="techicons"> <TechIcons /> </section>
        <section ref={projectsRef} id="projects"> <Projects /> </section>
      </div>
      <ScrollButton sections={sections} offset={0} />
    </>
  );
}

export default App;
