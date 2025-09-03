

export default function Experience() {
    const experiences = [
      {
        id: 1,
        title: "Desarrollador en Prácticas - SENA",
        company: "SENA",
        period: "Octubre 2024 - Mayo 2025",
        description: "Desarrollé e implementé un sistema de inventario para el almacén del centro de formación, incluyendo un módulo de generación de reportes que optimizó la gestión y el control administrativo.",
        
      }
    ];

    return (
        <section id="experiencia" className="py-10 px-6 bg-#f6dfef text-black">
          <h2 className="text-3xl font-bold mb-2 text-left pl-12 ">
            Experiencia
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto bg-[#6e9459]">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl shadow-lg bg-[#bb9f8c] hover:scale-105 transition"
                  >
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-black">{exp.company} 
                      <br />• {exp.period}</p>
                    <p className="mt-2 text-black">{exp.description}</p>
                    
                  </div>
                ))}
            </div>
        </section>
    );
  };
