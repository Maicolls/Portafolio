import { useRef } from "react"
import Navbar from "../src/Components/Navbar/Navbar"
import Hero from "../src/Components/Hero/Hero"
import Experience from "../src/Components/Experiencia/Experiencia";
import Projects from "../src/Components/Projects/Projects";
import ScrollButton from "../src/Components/ScrollButton/ScrollButton";
import AboutMe from "../src/Components/AboutMe/AboutMe";
import ContacMe from "../src/Components/ContacMe/ContacMe";
import TechIcons from "../src/Components/TechIcons/TechIcons";
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
