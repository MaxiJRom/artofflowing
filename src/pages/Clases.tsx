import React from "react";
import { ClassCard } from "../components/ClassCard.tsx";
import heroBanner from "../assets/hero-banner.jpg";
import { Hero } from "../components/Hero.js";
import { clasesData } from "../assets/cardsData.js";

const description =
	"Aquí encontrarás todas las clases, cursos y talleres que ofreceremos en Art of Flowing. Siempre haciendo hincapié en seguir el flujo de la vida y disfrutarlo desde nuestro más aunténtico ser.";

export function Clases() {
	return (
		<>
			<Hero
				img={heroBanner}
				tittle="Nuestras clases"
				description={description}
			/>
			<div className="page-container">
				<section className="class-container">
					{clasesData.map((clase) => (
						<ClassCard
							tittle={clase.tittle}
							description={clase.description}
							img={clase.img}
							urlPath={clase.urlPath}
							key={clase.tittle}
						/>
					))}
				</section>
			</div>
		</>
	);
}
