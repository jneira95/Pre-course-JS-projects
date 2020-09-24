"use strict";

const questionList = [
  {
    letter: "a",
    answer: ["antivirus", "actualizar", "amazon"],
    status: 0,
    question: [
      "Programas que permiten analizar la memoria, las unidades de disco y otros elementos de un ordenador, en busca de virus.",
      "En un entrono virtual, reemplazar información por considerarse antigua o no válida",
      "Compañía creada por Jeff Bezos en 1994",
    ],
  },
  {
    letter: "b",
    answer: ["bit", "blog", "backup"],
    status: 0,
    question: [
      "Unidad mínima de información empleada en la informática y en las telecomunicaciones",
      "Sitio web similiar a un diario personal online, cuyas entradas o artículos publicados se denominan post",
      "Hacer copia de seguridad.",
    ],
  },
  {
    letter: "c",
    answer: ["conexion", "comprimir", "cracker"],
    status: 0,
    question: [
      "Enlace que se establece entre el emisor y el receptor a través del que se envía el mensaje",
      "Reducir el peso de un archivo para que ocupe menos espacio sin perder la información original",
      "Es una persona interesada en saltarse la seguridad de un sistema informático.",
    ],
  },
  {
    letter: "d",
    answer: ["directorio", "digital", "dom"],
    status: 0,
    question: [
      "Tipo de buscador",
      "Contrario a analógico",
      "Estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante Javascript para cambiar dinámicamente los contenidos y aspecto de la página.",
    ],
  },
  {
    letter: "e",
    answer: ["ebay", "encriptar", "extension"],
    status: 0,
    question: [
      "Sitio de subastas por internet más popular en el mundo.",
      "Proteger archivos expresando su contenido en un lenguaje cifrado",
      "Cadena de caracteres anexado al nombre de un archivo usualmente precedido de un punto",
    ],
  },
  {
    letter: "f",
    answer: ["facebook", "fakenews", "firewall"],
    status: 0,
    question: [
      "Red social creada por Mark Zuckerberg en 2006",
      "Bulos o noticias falsas en la red",
      "Su traducción literal es muro de fuego, también conocido a nivel técnico como cortafuegos.",
    ],
  },
  {
    letter: "g",
    answer: ["gift", "gigaherzt", "gusano"],
    status: 0,
    question: [
      "Formato de imagen digital usado para crear animaciones cortas que se reproducen en bucle",
      "1000 megahertz",
      "Es un programa similar a un virus que, a diferencia de éste, solamente realiza copias de sí mismo, o de partes de él. En ingles Worm.",
    ],
  },
  {
    letter: "h",
    answer: ["hacker", "hardware", "harmonyos"],
    status: 0,
    question: [
      "Pirata informático",
      "Componentes físicos de un PC.",
      "Nombre del sistema operativo de Huawei",
    ],
  },
  {
    letter: "i",
    answer: ["internet", "intel", "ip"],
    status: 0,
    question: [
      "Red informática de nivel mundial que utiliza la línea telefónica para transmitir la información",
      "Primera empresa de procesadores.",
      "Direccion única e irrepetible que se asigna a un dispositivo que trata de comunicarse con otro en Internet",
    ],
  },
  {
    letter: "j",
    answer: ["jpg", "joke", "javascript"],
    status: 0,
    question: [
      "Formato de imagen más popular con gran grado de compresión.",
      "No es un virus, sino bromas de mal gusto que tienen por objeto hacer pensar a los usuarios que han sido afectados por un virus.",
      "Lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
    ],
  },
  {
    letter: "k",
    answer: ["kindle", "keylogger", "key"],
    status: 0,
    question: [
      "Tableta diseñada por Amazon.com como la versión multimedia del lector de libros electrónicos",
      "Programa que recoge y guarda una lista de todas las teclas pulsadas por un usuario. Dicho programa puede hacer pública la lista, permitiendo que terceras personas conozcan los datos escritos por el usuario afectado",
      "Tecla, en su uso más general, o bien, por extensión, el teclado.",
    ],
  },
  {
    letter: "l",
    answer: ["link", "linux", "lcd"],
    status: 0,
    question: [
      "Elemento de un documento electrónico que permite acceder automáticamente a otro documento o a otra parte del mismo.",
      "Sistema operativo gratuito para PC derivado de Unix",
      "Monitor de Cristal Líquido.",
    ],
  },
  {
    letter: "m",
    answer: ["microsoft", "malware", "meme"],
    status: 0,
    question: [
      "Fundada en 1975 por Bill Gates, entre otros.",
      "Cualquier programa, documento o mensaje, susceptible de causar perjuicios a los usuarios de sistemas informáticos. MALicious softWARE.",
      "Imagen, video o texto, por lo general distorsionado con fines caricaturescos que se difunde principalmente a través de Internet",
    ],
  },
  {
    letter: "n",
    answer: ["navegador", "netiqueta", "nuke"],
    status: 0,
    question: [
      "Software informático que permite acceder a internet",
      "Norma o regla que tengo que cumplir para no generar conflictos cuando me comunico en la red",
      "Caída o pérdida de la conexión de red, provocada de forma intencionada por alguna persona.",
    ],
  },
  {
    letter: "o",
    answer: ["open source", "offline", "ocr"],
    status: 0,
    question: [
      "Expresión de la lengua inglesa que pertenece al ámbito de la informática. Aunque puede traducirse como fuente abierta o código abierto",
      "Modo en el que trabajo cuando no tengo Internet",
      "Reconocimiento óptico de caracteres.",
    ],
  },
  {
    letter: "p",
    answer: ["perfil", "programar", "podcast"],
    status: 0,
    question: [
      "He de crearme uno para acceder por primera vez a mi red social favorita",
      "Dar instrucciones a un dispositivo digital para que realice una tarea en un momento determinado",
      "Emisión de radio o de televisión que un usuario puede descargar de internet mediante una suscripción previa y escucharla tanto en una computadora como en un reproductor portátil.",
    ],
  },
  {
    letter: "q",
    answer: ["qr", "quicktime", "quick access"],
    status: 0,
    question: [
      "Código de barras de 2D compuesto por módulos negros en forma de cuadrado con fondo blanco",
      "Formato de video creado por Apple.",
      "Acceso rápido en ingles.",
    ],
  },
  {
    letter: "r",
    answer: ["recomendar", "ram", "robo de identidad"],
    status: 0,
    question: [
      "En LinkedIn, dar un like",
      "Memoria de acceso aleatorio.",
      "Obtención de información confidencial del usuario, como contraseñas de acceso a diferentes servicios, con el fin de que personas no autorizadas puedan utilizarla para suplantar al usuario afectado.",
    ],
  },
  {
    letter: "s",
    answer: ["serie", "selfie", "servidor"],
    status: 0,
    question: [
      "Cuando los componentes de un circuito están dispuestos en una línea, uno tras otro, se dice que hay una conexión en...",
      "Autofoto",
      "Ordenador conectado a la red que presta asistencia a otros usuarios",
    ],
  },
  {
    letter: "t",
    answer: ["tutor", "teclado", "troyano"],
    status: 0,
    question: [
      "Persona que resuelve mis dudas sobre el curso online que estoy haciendo",
      "Dispositivo principal de entrada en PC.",
      "Programa que llega al ordenador de manera encubierta, aparentando ser inofensivo, se instala y realiza determinadas acciones que afectan a la confidencialidad del usuario afectado.",
    ],
  },
  {
    letter: "u",
    answer: ["ubicacion", "ubuntu", "url"],
    status: 0,
    question: [
      "La comparto cuando quiero decir dónde estoy",
      "Distribución de Linux más famosa basada en Debian.",
      "Dirección a través de la cual se accede a las páginas Web en Internet",
    ],
  },
  {
    letter: "v",
    answer: ["viral", "visical", "virus"],
    status: 0,
    question: [
      "Acepción referida a un mensaje o contenido que se difunde con gran rápidez a través de las redes sociales",
      "Primera hoja de cálculo",
      "Programas que se pueden introducir en los ordenadores y sistemas informáticos de formas muy diversas, produciendo efectos molestos, nocivos e incluso destructivos e irreparables.",
    ],
  },
  {
    letter: "w",
    answer: ["wallapop", "webinar", "wav"],
    status: 0,
    question: [
      "Empresa española fundada en el año 2013, que ofrece una plataforma dedicada a la compra venta de productos de segunda mano entre usuarios a través de Internet",
      "Conferencia o seminario en formato online que se transmite en directo a través de una herramienta especializada",
      "Extensión de tipo de formato de sonido con muy poca o nula compresión.",
    ],
  },
  {
    letter: "x",
    answer: ["xeon", "xml", "xxi"],
    status: 0,
    question: [
      "Familia de microprocesadores Intel para servidores PC y Macintosh",
      "Lenguaje de Marcado Extensible o Lenguaje de Marcas Extensible, metalenguaje que permite definir lenguajes de marcas",
      "Siglo actual dónde la computadora parece que estuvo toda la vida y ahora nos parece imposible vivir sin tecnología",
    ],
  },
  {
    letter: "y",
    answer: ["youtuber", "yahoo", "yosemite"],
    status: 0,
    question: [
      "Profesion de moda entre los más pequeños que consiste en grabar videos y subirlos su canal en una plataforma online, para conseguir el mayor numero de visitas posible",
      "Empresa global de medios con sede en Estados Unidos que posee un portal de Internet, un directorio web y una serie de servicios tales como el popular correo electrónico",
      "Undécima versión de OS X, el sistema operativo de Apple para los ordenadores Macintosh.",
    ],
  },
  {
    letter: "z",
    answer: ["zoom", "zettabyte", "zombie"],
    status: 0,
    question: [
      "Aplicación que utilizo cuando teletrabajo para reunirme con mis compañeros de equipo",
      "Unidad de almacenamiento de información equivale a 1021 bytes, cuyo prefijo fue adoptado en 1991, viene del latín septem, que significa siete",
      "Ordenador conectado a la red que ha sido comprometido por un hacker, un virus informático o un troyano. Puede ser utilizado para realizar distintas tareas maliciosas de forma remota",
    ],
  },
];


const menuSectionDisplay = document.getElementById("menu-section");
const menuSection = document.querySelectorAll("#menu-section ul li");
const playSection = document.getElementById("play-section");
const ruleSection = document.getElementById("rule-section");
const rankingSection = document.getElementById("ranking-section");

// menuSection.forEach(button => {
//     button.addEventListener("click", function (x) {
//         const test = x.target.textContent
//         if (test === "JUGAR") {
//             menuSectionDisplay.style.display = "none"
//             playSection.style.display = "block"
//         }
//     })
// })
