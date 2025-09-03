import { techIcons } from "./Iconos";

const Contac = [
    {
        title:"Mi correo profesional",
        description:"No dudes en contatarme, estaré disponible",
        email:"maycolgutierrez.dev@gmail.com"
    },
    {
        title:"Mi numero de telefono",
        description:"Si gustas saber más de mi, no dudes en contactarme.",
        phone: <a href="https://wa.me/573142812093?text=Hola%20Maycol,%20me%20interesa%20saber%20más%20sobre%20tus%20servicios.">(+57) 314 281 2093</a>
    },
    {
        title:"Mi LinkedIn",
        description:"Hagamos match para conectar",
        linkedin: <a href="https://www.linkedin.com/in/maicolgutierrez"> Maycol Gutierrez </a>
    }
];

const ContacMe = () => {
    return (   
        <div className="container grid gap-8 px-6 py-12 mx-auto lg:grid-cols-3" id="contact">
            <div>
                <p className="font-medium "> Contacta Me </p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl"> Recuerda Sin Junior no hay Senior </h1>

                <p className="mt-3 "> Si gustas podemos agendar una entrevista con gusto</p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  {techIcons.gmail}
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{Contac[0].title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{Contac[0].description}</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{Contac[0].email}</p>
            </div>
            <div className="p-4  bg-dark text-light rounded-lg shadow-lg">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                    {techIcons.whatsapp}
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{Contac[1].title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{Contac[1].description}</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{Contac[1].phone}</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                    {techIcons.linkedin}
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{Contac[2].title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{Contac[2].description}</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{Contac[2].linkedin}</p>
            </div>
        </div>
        </div>
     
    )
}
export default ContacMe;


