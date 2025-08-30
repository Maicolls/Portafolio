import { useState } from "react";
import Styles from "../Styles/Navbar.module.css";


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
                            <a href="#About" className={ `${Styles.navLink}`}>About Me </a>
                        </li>
                        <li onClick={removeActive}>
                            <a href="Repositorios" className={ `${Styles.navLink}`}>Repositorios</a>
                            </li>
                        <li onClick={removeActive}>
                            <a href="#Estudios" className={ `${Styles.navLink}`}>Estudios</a>
                            </li>
                        <li onClick={removeActive}>
                            <a href="#Contact" className={ `${Styles.navLink}`}>Contacta Me</a>
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