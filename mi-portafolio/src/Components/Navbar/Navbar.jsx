import { useState } from "react";
import Styles from "../../styles/Navbar.module.css";


function Navbar() {
    
    //Adding th state to the menu 
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
        <div className="Navbar">
            <header className="Navbar-header">
                <nav className={ `${Styles.navbar}`}>
                    {/*Add logo*/}
                    <a href="home" className={`${Styles.logo}`}>
                        Dev.
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
                            <a href="#conoceme" className={ `${Styles.navLink}`}>Sobre mi</a>
                          </li>     
                           <li onClick={removeActive}>
                            <a href="#contact" className={ `${Styles.navLink}`}>Contacta me</a>
                          </li>                  
                    </ul>
                    <div className={`${Styles.hamburger} ${isActivate ? 
                        Styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span>
                    </div>
                </nav>
            </header>
        </div>
    );
};
export default Navbar;