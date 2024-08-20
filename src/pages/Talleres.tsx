import React from "react";
import heroBanner from "../assets/hero-banner.jpg";
import { Hero } from "../components/Hero";
import { talleresData } from "../assets/cardsData";
import { ClassCard } from "../components/ClassCard.tsx";

const description =
	"Aquí encontrarás todas las clases, cursos y talleres que ofreceremos en Art of Flowing. Siempre haciendo hincapié en seguir el flujo de la vida y disfrutarlo desde nuestro más aunténtico ser.";

export function Talleres() {
	return (
		<>
			<Hero
				img={heroBanner}
				tittle="Nuestros talleres"
				description={description}
			/>
			<div className="page-container">
				<section className="class-container">
					{talleresData.map((clase) => (
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
