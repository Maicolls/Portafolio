import { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";
import logo from "../../assets/Img/Logo2.png";




function Navbar() {

    useEffect(() => { 
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100){
            setSticky(true);
        } else {
            setSticky(false);   
        }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);

   const [isSticky, setSticky] = useState(false);

   // Determine the navbar classes based on the sticky state
   const navbarClasses = isSticky ? `${Styles.navbar} ${Styles.sticky}` : Styles.navbar;


    // El estado ahora viene de App
    const [isActivate, setIsActive] = useState(false);

    //Add the activete class 
    const toggleActiveClass = () => {
        setIsActive(!isActivate);
    };

    //Clean up function to remove the active class 
    const removeActive = () => {
        setIsActive(false);
    }

    return (
      
       <nav className={navbarClasses}>
            <div className={Styles.navbarContent}>
                    <a href="home">
                        <img src={logo} alt="logo" className={`${Styles.navbarLogo}`}/>
                    </a>
                    <ul className= {`${Styles.navMenu} ${isActivate ? 
                        Styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <a href="#experiencia" className={ `${Styles.navLink}`}>Experiencia </a>
                        </li>
                         <li onClick={removeActive}>
                            <a href="#techicons" className={ `${Styles.navLink}`}>Habilidades</a>
                            </li>
                        <li onClick={removeActive}>
                            <a href="#projects" className={ `${Styles.navLink}`}>Repositorios</a>
                            </li>
                        <li onClick={removeActive}>
                            <a href="#conoceme" className={ `${Styles.navLink}`}>Sobre mí</a>
                          </li>     
                           <li onClick={removeActive}>
                            <a href="#contact" className={ `${Styles.navLink}`}>Contacta conmigo</a>
                          </li>                  
                    </ul>
                    <div className={`${Styles.hamburger} ${isActivate ? 
                        Styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span>
                    </div>
              
            </div>
  </nav>
    );
};
export default Navbar;