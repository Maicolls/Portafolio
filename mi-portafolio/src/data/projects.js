import interfaz from "../assets/repositorios/interfaz 1.png";
import interfaz2 from "../assets/repositorios/interfaz2.jpg";

export const projects = [
  {
    title: "Sistema de Almacen Cenigraf",
    description:
      "Aplicación web para la gestión de inventario para el almacén del centro de formación CENIGRAF. Permite el control de productos, categorías, proveedores y usuarios, facilitando la administración del almacén y optimizando los procesos internos, como la generación de reportes, carga masiva de archivos y gestión de usuarios. (dale click al icono Git para ver el repositorio)",
    image: interfaz,
    imageClass: "w-full h-48 object-cover",
    github: true,
    githubUrl: "https://github.com/Maicolls/Sistema-Inventario-CENIGRAF",
    technologies: ["php", "mysql", "javascript", "html", "css", "git", "github"],
  },
  {
    title: "PsicoAxioma",
    description:
      "PsicoAxioma es una app móvil creada con React Native, que integra IA de HumeAI para ofrecer apoyo psicológico. Incluye un escáner emocional, un diario emocional y acceso a líneas de atención psicológica en Bogotá. (dale click al icono Git para ver el repositorio)",
    image: interfaz2,
    imageClass: "w-full h-48 object-contain bg-gray-100",
    github: true,
    githubUrl:  "https://github.com/amlune/PsicoAxioma",
    technologies: ["react", "git", "github", "figma", "node", "typescript", "database"],
  }
];
