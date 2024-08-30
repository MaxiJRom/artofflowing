import retiroDeYoga from "./Retiro-de-yoga.webp";
import yogaEnLinea from "./Yoga-en-linea.webp";
import meditacionOnline from "./meditacion-online.webp";
import meditacionConCuencos from "./meditacion-con-cuencos.webp";
import lecturaTarot from "./lectura-tarot.webp";
import velas from "./velas.webp";
import charla from "./charla.webp";
import barras from "./barras.webp";
import libros from "./libros.webp";
import energetico from "./energetico.webp";
import chakras from "./chakras.webp";
import ayurvedico from "./ayurvedico.webp";
import yogaOnline from "./yoga-online.webp";
import yogaBanner from "./yoga-presencial.webp";
import meditacionBanner from "./grupo-de-meditacion.webp";

const CLASES = {
  yogaOnline: {
    tittle: "Yoga online",
    img: yogaEnLinea,
    description:
      "Porque ya aprendimos que la distancia no es un impedimento. Movernos desde la consciencia es tarea número 1 en nuestros grupos online.",
    urlPath: "/clases/yogaOnline",
    subpageImg: yogaOnline,
    subpageImgAlt: "yoga-class",
    subpageText: `Desde el día 1 hacemos hincapié en las posturas conscientes,escuchar a nuestro cuerpo, sentir nuestros limites y respetarlos con
  amor sin juicio.
  
  Realizamos Hatha Yoga Online, un estilo de yoga suave, donde a través de cada postura y respiración nos entregamos al flujo del movimiento logrando equilibrio de mente, cuerpo y espíritu.
  
  Te invito a que formes parte de un grupo de personas igual que tú, principiante, con conocimientos básicos y muchas ganas de aprender a
  soltar el control y conectar con su cuerpo, con su energía, con sus sueños.

  **Elementos necesarios:**
  - Mat o colchoneta 
  - Ropa cómoda 
  - Bloques de yoga o algo parecido
  - Cinta de tela de alrededor 200cm (**)
 
  ** No es primordial, podemos hablarlo y chequear que elementos tienes en casa que puedan reemplazarlo. Que nada te impida hacer lo que quieres ;)
  
  **Modalidad:**
  - vía Zoom y YouTube.
  
  **Precio:**
  - Una clase semanal de 1hs. €10 
  - Cuatro clases semanales de 1hs. €30 

  **Horario**
  - Matutino 
  - Vespertino 
`,
  },

  yogaPresencial: {
    tittle: "Yoga Presencial",
    img: retiroDeYoga,
    description:
      "Acompañarnos en el movimiento, sintiendo nuestro cuerpo, disfrutándonos, eso es Yoga. Descubre como el yoga puede cambiar tu cuerpo y tu vida.",
    urlPath: "/clases/yogaPresencial",
    subpageImg: yogaBanner,
    subpageImgAlt: "yoga-class",
    subpageText: `En las clases presenciales disfrutamos de la compañía de nosotrosmismos desde la consciencia, desde la respiración. Nos movemos desdela gratitud de darnos el permiso para disfrutar un momento paranosotros mismos. La presencialidad nos permite percibir el espacio que generamos al hacer yoga.

Sin dejar de lado la técnica, la suavidad con la que realizamos las
posturas, acompañando con la respiración, no regala lo que es la
esencia del yoga: la unión de mente, cuerpo y espiritu.

Realizamos Hatha Yoga Online, un estilo de yoga con movimientos
suaves, centrado en la respiración y sosteniendo las posturas para
poder conectar con nuestro cuerpo.

Te invito a que formes parte de un grupo de personas igual que tú,
principiante, con conocimientos básicos y muchas ganas de aprender a
soltar el control y conectar con su cuerpo, con su energía, con el
fluir de la vida.


**Elementos necesarios:**
- Mat de yoga o colchoneta
- Ropa cómoda


**Precio:**

- Opción 1: Una clase semanal de 1hs. €10
- Opción 2: Cuatro clases mensuales de 1hs. €30


**Horario:**

- Matutino
- Vespertino 
`,
  },

  meditacionOnline: {
    tittle: "Meditación Online",
    img: meditacionOnline,
    description:
      "Meditar nunca había sido tan fácil. La respiración y relajación son la meta y también nuestro camino. Alivia el insomnio con nuestras clases.",
    urlPath: "/clases/meditacionOnline",
    subpageImg: meditacionBanner,
    subpageImgAlt: "clases de meditacion",
    subpageText: `Algunas personas dicen que la meditación es una técnica difícil de dominar. Yo digo que nada más lejos de la realidad! 

Meditar es algo que tu puedes hacer para relajarte, dormir mejor, mejorar la digestión y miles de beneficios más y no es para nada difícil. 

En el grupo de meditación usamos una técnica milenaria que es a prueba de error y te aseguro que verás los beneficios rápidamente, por que como todo, lo que necesitas son las ganas de querer hacerlo.{" "}


Por eso te invito a que te unas al grupo de meditación, donde te encontrarás con personas como tú, que quieren mejorar su estilo de vida y saben que el cambio empieza desde adentro hacia afuera.

**Elementos necesarios:**

- Ropa cómoda

**Modalidad:**

- vía Zoom y YouTube


**Precio:**

- Una clase semanal de 1hs. €10
- Cuatro clases semanales de 1hs. €30


**Horario**

- Vespertino

    `,
  },

  meditacionConCuencos: {
    tittle: "Meditación con cuencos",
    img: meditacionConCuencos,
    description:
      "Los cuencos tibetanos nos ayudan a liberar y desbloquear energías estancadas. Agenda tu sesión y ven a soltar en relajación",
    urlPath: "/clases/meditacionConCuencos",
  },
  barrasDeAcces: {
    tittle: "Barras de Access®",
    img: barras,
    description:
      "MAGIA es lo que describe a la perfección esta clase ¿Estás lista para ser el cambio que buscas? Esta es la señal, reserva tu cupo!",
    urlPath: "/clases/barrasDeAcces",
  },
  librosDeAcces: {
    tittle: "Intro de libros de Access®",
    img: libros,
    description:
      "La magia también viene en papel y se puede leer. Ven a disfrutar de las maravillosas páginas de Access Conciousness®",
    urlPath: "/clases/librosDeAcces",
  },
};

const talleresData = [
  {
    tittle: "Taller energético",
    img: energetico,
    urlPath: "#",
    description:
      "La solución siempre estuvo con nosotros, siempre estuvo dentro. La solución somos nosotros mismos",
  },
  {
    tittle: "Taller de meditación: Desbloqueando chakras",
    img: chakras,
    urlPath: "#",
    description: "Desbloquando y equilibrando nuestras ruedas energéticas.",
  },
  {
    tittle: "Taller Medicinal: El camino Ayurvédico",
    img: ayurvedico,
    urlPath: "#",
    description:
      "El sistema medicinal basado en la conciencia. La ciencia de la vida.",
  },
  {
    tittle: "Nuestras charlas de zoom",
    img: charla,
    urlPath: "#",
    description: `Charlas doble D - DD - Divino Diván. Aquí estamos, disfrutan y compartiendo experiencia, consejo y preguntas.`,
  },
];

const sesionesData = [
  {
    tittle: "Lectura de Tarot",
    img: lecturaTarot,
    description:
      "La energía de las cartas nos ayudan a descifrar qué es lo más contributivo para nuestras vidas hoy. Ábrete a recibir sus mensajes.",
    urlPath: "#",
  },
  {
    tittle: "Sesión de registros Akáshicos",
    img: velas,
    description:
      "Percibir la energía, los mensajes de nuestros guías y entender el aprendizaje de nuestras almas es lo que nos ayuda a conectar con la vida.",
    urlPath: "#",
  },
];

export { talleresData, sesionesData, CLASES };
