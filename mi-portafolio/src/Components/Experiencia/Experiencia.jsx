import { experience } from '../../data/experiencia';


const Experiencia = () => { 
    return (
      <>
      <h2 className="text-3xl font-bold mb-4 text-left mt-" id="experiencia">
            Experiencia
            </h2>
            <div className="space-y-6 max-w-3xl mx-1">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4  shadow-lg hover:scale-110 transition">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-black">{exp.company} 
                      <br />• {exp.period}</p>
                    <p className="mt-3 text-black">{exp.description}</p>

                  </div>
                ))}
            </div> 
        </>
    );
    };
  
  export default Experiencia;
