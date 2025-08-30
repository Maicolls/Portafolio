import { useRef } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import ScrollButton from "./Components/ScrollButton";
import "./Styles/ScrollButton.css"

function App() {

  const heroRef = useRef(null);


  const sections = [heroRef];
  
  return (
    <>
      <Navbar />
      <section ref={heroRef} id="hero"> <Hero /> </section>

      <ScrollButton sections={sections}  offset={0}/>
    </>
  );
}

export default App;
