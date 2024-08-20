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

const clasesData = [
	{
		tittle: "Yoga presencial",
		img: retiroDeYoga,
		description:
			"Acompañarnos en el movimiento, sintiendo nuestro cuerpo, disfrutándonos, eso es Yoga. Descubre como el yoga puede cambiar tu cuerpo y tu vida.",
		urlPath: "/Clases/YogaPresencial",
	},
	{
		tittle: "Yoga online",
		img: yogaEnLinea,
		description:
			"Porque ya aprendimos que la distancia no es un impedimento. Movernos desde la consciencia es tarea número 1 en nuestros grupos online.",
		urlPath: "/Clases/YogaOnline",
	},
	{
		tittle: "Meditación Online",
		img: meditacionOnline,
		description:
			"Meditar nunca había sido tan fácil. La respiración y relajación son la meta y también nuestro camino. Alivia el insomnio con nuestras clases.",
		urlPath: "/Clases/MeditacionOnline",
	},
	{
		tittle: "Meditación con cuencos",
		img: meditacionConCuencos,
		description:
			"Los cuencos tibetanos nos ayudan a liberar y desbloquear energías estancadas. Agenda tu sesión y ven a soltar en relajación",
		urlPath: "/Clases/MeditacionConCuencos",
	},
	{
		tittle: "Barras de Access®",
		img: barras,
		description:
			"MAGIA es lo que describe a la perfección esta clase ¿Estás lista para ser el cambio que buscas? Esta es la señal, reserva tu cupo!",
		urlPath: "/Clases/BarrasDeAcces",
	},
	{
		tittle: "Intro de libros de Access®",
		img: libros,
		description:
			"La magia también viene en papel y se puede leer. Ven a disfrutar de las maravillosas páginas de Access Conciousness®",
		urlPath: "https://www.google.com",
	},
];

const talleresData = [
	{
		tittle: "Taller energético",
		img: energetico,
		urlPath: "https://www.google.com",
		description:
			"La solución siempre estuvo con nosotros, siempre estuvo dentro. La solución somos nosotros mismos",
	},
	{
		tittle: "Taller de meditación: Desbloqueando chakras",
		img: chakras,
		urlPath: "https://www.google.com",
		description: "Desbloquando y equilibrando nuestras ruedas energéticas.",
	},
	{
		tittle: "Taller Medicinal: El camino Ayurvédico",
		img: ayurvedico,
		urlPath: "https://www.google.com",
		description:
			"El sistema medicinal basado en la conciencia. La ciencia de la vida.",
	},
	{
		tittle: "Nuestras charlas de zoom",
		img: charla,
		urlPath: "https://www.google.com",
		description: `Charlas doble D - DD - Divino Diván. Aquí estamos, disfrutan y compartiendo experiencia, consejo y preguntas.`,
	},
];

const sesionesData = [
	{
		tittle: "Lectura de Tarot",
		img: lecturaTarot,
		description:
			"La energía de las cartas nos ayudan a descifrar qué es lo más contributivo para nuestras vidas hoy. Ábrete a recibir sus mensajes.",
		urlPath: "https://www.google.com",
	},
	{
		tittle: "Sesión de registros Akáshicos",
		img: velas,
		description:
			"Percibir la energía, los mensajes de nuestros guías y entender el aprendizaje de nuestras almas es lo que nos ayuda a conectar con la vida.",
		urlPath: "https://www.google.com",
	},
];

export { clasesData, talleresData, sesionesData };
