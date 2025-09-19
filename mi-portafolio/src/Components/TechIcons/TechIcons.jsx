import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPhp, FaPython, FaGitAlt, FaGithub, FaNodeJs, FaFigma,  FaDatabase } from "react-icons/fa";
import { SiMysql, SiTypescript } from "react-icons/si";

export default function TechIcons() {
  return (
    <>
    <section className="pt-8" >
    <h1 className="text-3xl font-bold mb-4 text-left text-white" id="techicons"> Mi Stack Tecnologico</h1>
    <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-11 text-3xl sm:text-4xl md:text-5xl lg:text-6xl justify-center"> 
      <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform" /> 
      <FaCss3Alt className="text-blue-500 hover:scale-110 transition-transform" />
      <FaJsSquare className="text-yellow-400 hover:scale-110 transition-transform" />
      <FaReact className="text-cyan-400 hover:spin transition-transform" />
      <FaPhp className="text-indigo-600 hover:scale-110 transition-transform" />
      <SiMysql className="text-blue-700 hover:scale-110 transition-transform" />
      <FaDatabase className="text-blue-600 hover:scale-110 transition-transform" />
      <FaPython className="text-yellow-500 hover:scale-110 transition-transform" />
      <FaGitAlt className="text-red-600 hover:scale-110 transition-transform" />
      <FaGithub className="text-gray-800 hover:scale-110 transition-transform" />
      <FaNodeJs className="text-green-600 hover:scale-110 transition-transform" />
      <SiTypescript className="text-blue-600 hover:scale-110 transition-transform" />
      <FaFigma className="text-purple-600 hover:scale-110 transition-transform" />
    </div>
    </section>
  </>
  );
}

