import { 
  SiTypescript, 
  SiJavascript,
  SiMysql, 
  SiGmail
} from "react-icons/si";
import { 
  FaFigma, 
  FaPhp, 
  FaPython, 
  FaGitAlt, 
  FaGithub, 
  FaDatabase, 
  FaNodeJs, 
  FaReact, 
  FaHtml5,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";

export const techIcons = {
  typescript: <SiTypescript className="text-blue-600 hover:scale-110 transition-transform" />,
  figma: <FaFigma className="text-purple-600 hover:scale-110 transition-transform" />,
  php: <FaPhp className="text-indigo-600 hover:scale-110 transition-transform" />,
  mysql: <SiMysql className="text-blue-700 hover:scale-110 transition-transform" />,
  database: <FaDatabase className="text-blue-600 hover:scale-110 transition-transform" />,
  python: <FaPython className="text-yellow-500 hover:scale-110 transition-transform" />,
  git: <FaGitAlt className="text-red-600 hover:scale-110 transition-transform" />,
  github: <FaGithub className="text-gray-800 hover:scale-110 transition-transform" />,
  nodejs: <FaNodeJs className="text-green-600 hover:scale-110 transition-transform" />,
  javascript: <SiJavascript className="text-yellow-400 hover:scale-110 transition-transform" />,
  html: <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform" />,
  react: <FaReact className="text-blue-500 hover:scale-110 transition-transform" />,
  whatsapp: <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform" />,
  linkedin: <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />,
  gmail: <SiGmail className="text-red-500 hover:scale-110 transition-transform" />
};

export default techIcons;