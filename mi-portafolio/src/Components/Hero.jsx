import React from "react";
import "../styles/Herostiles.css";

function Hero(){

    return (
        <>
            <section className="Hero">
                <div className="Hero__content">
                    <div className="Hero__text">
                        <h1 className="Hero__title">
                            ¡Hola y Bienvenido/a! 
                        </h1>
                        <h2 className="Hero__subtitle">
                            Soy <span className="Hero__name">Maycol Gutieterrez</span> 
                            </h2>
                        <p className="Hero__description">Desarrollador Web Full Stack apasionado por crear soluciones digitales modernas y efectivas. 🚀  
                            Aquí podrás explorar mis proyectos, trabajos y parte de mi camino en el mundo del desarrollo.  
                            Si quieres ponerte en contacto, solo da clic en el botón y ¡hablemos!
                        </p>
                    </div>
                            <a href="#contact" className="Hero__button">
                            Contáctame
                        </a> 
                </div>
                <div className="ImgHero"> 
                    <img className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" 
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
                        alt="image description" 
                    />
                </div>
            </section>
        </>
    );
}

export default Hero;




