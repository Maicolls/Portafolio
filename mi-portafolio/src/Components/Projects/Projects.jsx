import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto px-1 py-5" id="projects">
     <h2 className='text-3xl font-bold  mb-12 font-bold text-yellow-400'>My Projects</h2>
      <div className='flex justify-center flex-wrap gap-16 p-6'>
        {projects.map((project, idx) => (
          <div key={idx} className="max-w-sm rounded-xl overflow-hidden transition-all duration-900 cursor-pointer hover:shadow-xl hover:shadow-yellow-500/50 
            bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 shadow-2xl">
            
            <img className={project.imageClass} src={project.image} alt={project.title} />
            
            <div className="px-6 py-4 bg-gray-900/30 backdrop-blur-sm border-t border-gray-700/20">
              <div className="font-bold text-xl mb-4 text-yellow-400">{project.title}</div>
              <p className="text-gray-200 text-base leading-relaxed">{project.description}</p>
            </div>
            
            {project.github && (
              <div className="flex justify-center pb-6 pt-2 bg-gray-900/20 backdrop-blur-sm border-t border-gray-700/10">
                <button
                   onClick={() => window.open(project.githubUrl, "_blank")}
                  className="group flex items-center justify-center px-4 py-2 rounded-lg 
                    bg-gray-800/60 backdrop-blur-md border border-gray-600/40
                    text-white font-medium hover:bg-gray-700/70 
                    transition-all duration-300 hover:scale-105 shadow-lg
                    hover:shadow-yellow-400/20"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Ver Código</span>
                </button>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;