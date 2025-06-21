// Función para cambiar el idioma a inglés
function cambiarIdiomaIngles() {
  // Elementos que queremos traducir
  const elementosTraducir = document.querySelectorAll("[data-translate]");

  // Traducciones en inglés
  const traducciones = {
    Inicio: "Home",
    "Acerca de": "About",
    Habilidades: "Skills",
    Servicios: "Services",
    Portafolio: "Portfolio",
    Contacto: "Contact",
    "Sobre mí": "About me",
    "Un poco sobre mí": "A bit about me",
    "Hola, Soy Marcelo :D": "Hello, I'm Marcelo :D",
    "Programador FullStack Junior": "Junior FullStack Developer",
    "Soy un estudiante apasionado de desarrollo Full-Stack, enfocado en el desarrollo Frontend y en crear soluciones innovadoras.":
      "I'm a passionate student of Full-Stack development, focused on Frontend development and creating innovative solutions.",

    "Soy un apasionado del desarrollo full-stack, enfocado en crear soluciones innovadoras. Manejo diversas tecnologías y herramientas, lo que me permite abordar proyectos de manera integral. Siempre busco aprender nuevas habilidades y estoy abierto a nuevas tecnologías para dar lo mejor de mí en entornos colaborativos.":
      "I am passionate about full-stack development, focused on creating innovative solutions.I handle various technologies and tools, which allows me to tackle projects in a comprehensive way. I am always looking to learn new skills and am open to new technologies to give my best in collaborative environments.",

    DescargarCV: "Download CV",
    Contacto: "Contact me",
    Habilidades: "Skills",
    "Mi nivel técnico": "My technical level",
    "FrontEnd Developer": "FrontEnd Developer",
    "1 Año de Experiencia": "1 Year of Experience",
    "HTML and CSS3": "HTML and CSS3",
    JavaScript: "JavaScript",
    Bootstrap: "Bootstrap",
    React: "React",
    "BackEnd Developer": "BackEnd Developer",
    "SQL MySQL": "SQL MySQL",
    Linux: "Linux",
    "Git and Github": "Git and Github",
    "Designer and NoCode Tools": "Designer and NoCode Tools",
    "Cloud Tools": "Cloud Tools",
    Estudiando: "Studying",
    Calificación: "Qualification",
    "Ui/Ux Designer": "Ui/Ux Designer",
    "Desarrollo de paginas web responsive":
      "Development of responsive web pages",
    "Optimización del Rendimiento de Páginas Web":
      "Optimization of Web Page Performance",
    "Integración de APIs": "APIs Integration",
    "Pocisionamiento de la compañia": "Company Positioning",
    "Educación y Certificaciones": "Education and Certifications",
    "Ingeniera de Desarrollo de Software": "Software Development Engineer",
    "Universidad Tecnologica del Perú": "Technological University of Peru",
    "Estudios truncos": "Incomplete studies",
    "Redes y Seguridad Informática": "Networks and Computer Security",
    "Instituto Tecnológico Superior SISE":
      "SISE Higher Technological Institute",
    "Desarrollo de Software": "Software Development",
    Platzi: "Platzi",
    "Mis Trabajos mas Recientes": "My Most Recent Works",
    "Lo que ofrezco": "What I offer",
    "FrontEnd Developer": "FrontEnd Developer",
    "BackEnd Designer": "BackEnd Designer",
    "Ver más": "See more",
    "Visitar Demo": "Visit Demo",
    "Ver Código Fuente": "View Source Code",
    "Proyecto enfocado en el rubro Inmobiliario":
      "Project focused on the Real Estate sector",
    "Variedad de Proyectos como Navbars y Páginas web estáticas":
      "Variety of projects such as Navbars and static web pages",
    "Proyecto Ingresos y Gastos <br>En desarrollo ⌛":
      "Income and Expenses Project <br>In progress ⌛",
  };

  // Iterar sobre los elementos y cambiar el texto
  elementosTraducir.forEach((elemento) => {
    const clave = elemento.getAttribute("data-translate");
    if (traducciones.hasOwnProperty(clave)) {
      elemento.textContent = traducciones[clave];
    }
  });
}

// Evento del botón para cambiar a inglés
const botonIngles = document.getElementById("boton-ingles");
if (botonIngles) {
  botonIngles.addEventListener("click", cambiarIdiomaIngles);
}
