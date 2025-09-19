import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

function SocialButtons() {
  return (
    <div className="flex flex-wrap items-center  sm:flex-row gap-4   ">
         {/* Resume */}
      <a
        href="/CV.pdf"
        download
        className="flex items-center gap-2 px-4 py-2  sm:w-auto rounded-md border border-gray-600 text-white hover:border-yellow-500 hover:text-yellow-500 transition whitespace-nowrap"
      >
        <HiOutlineDocumentArrowDown className="text-xl" />
        Resume
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/TU_USUARIO"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2  sm:w-auto rounded-md border border-gray-600 text-white hover:border-orange-500 hover:text-orange-500 transition whitespace-nowrap"
      >
        <FaGithub className="text-xl" />
        Github
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/TU_PERFIL"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2  sm:w-auto rounded-md border border-gray-600 text-white hover:border-blue-500 hover:text-blue-500 transition whitespace-nowrap"
      >
        <FaLinkedin className="text-xl" />
        LinkedIn
      </a>
    </div>
  );
}

export default SocialButtons;


