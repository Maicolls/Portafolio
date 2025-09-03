import foto from '../../assets/Img/Foto.png'; 


const AboutMe = () => {
  return (

    <div class="relative flex flex-col md:flex-row w-full my-12  shadow-sm border  rounded-lg w-106" id="conoceme">
      <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src={foto}
            alt="card-image"
            class="  rounded-full md:rounded-lg object-cover"
          />
        </div>
        <div class="p-6">
          <h4 class="mb-2 text-2xl text-slate-900 font-bold  ">
            Hola nuevamente,  dejame presentarme ahora si
          </h4>
          <p class="mb-8 text-2xl leading-normal font-sans">
          Soy Maycol Gutierrez, Desarrollador web Full Stack, apasionado por la programación y el aprendizaje continuo. Para mí, programar no es solo escribir código: es diseñar y construir experiencias digitales modernas, atractivas y fáciles de usar, que conecten con las personas y generen un impacto positivo.
          Me mantengo en constante evolución, explorando nuevas tecnologías y ampliando mi stack para fortalecer mis habilidades. Creo en el valor del trabajo colaborativo, donde compartir y recibir conocimiento enriquece tanto el proceso como el resultado.
          Más allá del código, disfruto jugar y ver fútbol —especialmente ir al estadio—, pasar tiempo con mi familia, compartir juegos de mesa, hacer ciclismo, ver series y películas fascinantes.
          Espero que este espacio te permita conocerme mejor y descubrir cómo puedo contribuir a tus proyectos con dedicación y pasión, por lo que no dudes en contactarme.
          </p>
        </div>
    </div> 
  );
};

export default AboutMe;
