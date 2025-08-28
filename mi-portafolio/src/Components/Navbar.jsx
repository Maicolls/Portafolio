import { useState } from "react";
import Styles from "../Styles/Navbar.module.css";


function Navbar() {
    
    //Adding th state to the menu 
    const [isOpen, setIsOpen] = useState(false);

    //Add the activete class 
    function toggleActiveClass() {
        setIsOpen(!isOpen);
    }

    //Clean up function to remove the active class 
    const removeActive = () => {
        setIsOpen(false);
    }

    return (
        <div className="Navbar">
            <header className="Navbar-header">
                <nav className={ `${Styles.navbar}`}>
                    {/*Add logo*/}
                    <a href="">
                        Dev.
                    </a>
                    <ul className= {`${Styles.navMenu} ${isOpen ? 
                        Styles.activate :''}`}>
                        <li onClick={removeActive}>
                            <a href="" className={ `${Styles.navLink}`}>HOME</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href="" className={ `${Styles.navLink}`}>About Me</a>
                            </li>
                        <li onClick={removeActive}>
                            <a href="" className={ `${Styles.navLink}`}>Repositorios</a>
                            </li>
                        <li onClick={removeActive}>
                            <a href="" className={ `${Styles.navLink}`}>Contac ME</a>
                          </li>                      
                    </ul>
                    <div className={`${Styles.hamburger} ${isOpen ? 
                        Styles.activate: ''}`}  onClick={toggleActiveClass}></div>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span> 
                </nav>
            </header>
        </div>
    );
};
export default Navbar;