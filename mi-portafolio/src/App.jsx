import { useRef } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Experience from "./Components/Experiencia";
import Projects from "./Components/Projects";
import ScrollButton from "./Components/ScrollButton";
import AboutMe from "./Components/AboutMe";
import ContacMe from "./Components/ContacMe";
import TechIcons from "./Components/TechIcons";
import "./Styles/ScrollButton.css"


function App() {

  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const techIconsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactarmeRef = useRef(null);
  const sections = [heroRef, experienceRef, projectsRef, techIconsRef, aboutMeRef, contactarmeRef];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2" id="aboutme">
        <section ref={heroRef} id="hero"> <Hero /> </section>
        <section ref={experienceRef} id="experience"> <Experience /> </section>
        <section ref={techIconsRef} id="techicons"> <TechIcons /> </section>
        <section ref={projectsRef} id="projects"> <Projects /> </section>
        <section ref={aboutMeRef} id="conoceme"> <AboutMe /> </section>
        <section ref={contactarmeRef} id="contact"> <ContacMe /> </section>
      </div>
      <ScrollButton sections={sections} offset={0} />
    </>
  );
}

export default App;
