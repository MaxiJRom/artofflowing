import React from "react";
import banner from "../assets/hero-banner.jpg";
import { Hero } from "../components/Hero";

export function Home() {
	const description =
		"Aquí encontrarás todas las clases, cursos y talleres que ofreceremos en Art of Flowing. Siempre haciendo hincapié en seguir el flujo de la vida y disfrutarlo desde nuestro más aunténtico ser.";

	return (
		<Hero
			img={banner}
			tittle={"Bienvenido a Art of Flowing"}
			description={description}
		/>
	);
}
