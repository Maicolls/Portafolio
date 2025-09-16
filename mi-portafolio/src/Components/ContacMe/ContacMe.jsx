import { techIcons } from "../Iconos/Iconos";
import { contact } from "../../data/contact";

const ContacMe = () => {
    return (   
        <div className="container grid gap-8 px-6 py-12 mx-auto lg:grid-cols-3" id="contact">
            <div>
                <p className="font-medium "> Contacta conmigo. </p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl"> Recuerda Sin Junior no hay Senior </h1>

                <p className="mt-3 "> Si gustas, podemos agendar una entrevista con gusto</p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2">
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-red-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                <span className="mb-4 text-4xl text-red-500">{techIcons.gmail}</span>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{contact[0].title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">{contact[0].description}</p>
                <span className="px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition-colors">{contact[0].email}</span>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                <span className="mb-4 text-4xl text-green-500">{techIcons.whatsapp}</span>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{contact[1].title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">{contact[1].description}</p>
                <a
                href={contact[1].phone}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition-colors"
                >
                {contact[1].phoneLabel}
                </a>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                <span className="mb-4 text-4xl text-blue-700">{techIcons.linkedin}</span>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{contact[2].title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">{contact[2].description}</p>
                <a
                href={contact[2].linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition-colors"
                >
                {contact[2].linkLabel}
                </a>
            </div>
            </div>
            </div>
     
    )
}
export default ContacMe;


