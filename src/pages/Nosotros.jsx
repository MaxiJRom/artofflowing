import React from "react";
import { Link } from "react-router-dom";
import nosotros from "../assets/nosotros.webp";

export function Nosotros() {
	return (
		<>
			<section className="top-section">
				<div className="text-container">
					<h1>Nuestra historia</h1>
					<h5>Lo que hacemos</h5>
					<p>
						En Art of Flowing, nos dedicamos a ayudar a otros en base a nuestro
						propio camino de crecimiento personal. Compartimos herramientas y
						técnicas de superación personal para que puedas alcanzar tu máximo
						potencial. Ofrecemos clases tanto online como presenciales,
						adaptándonos a tus necesidades y preferencias. Además, organizamos
						talleres de superación personal y reconexión energética, donde
						podrás aprender y crecer junto a otras personas que comparten tus
						mismos objetivos. Nuestro compromiso es brindarte un espacio seguro
						y de apoyo para que puedas transformar tu vida y encontrar tu
						verdadero fluir.
					</p>
					<Link to="/Nosotros" rel="noopener noreferrer">
						Ver clases
					</Link>
				</div>
				<div className="img-container">
					<img src={nosotros} alt="caminando en el campo" />
				</div>
			</section>

			<section className="quote-section">
				<div className="quote-container">
					<blockquote cite="https://drdainheer.com/">
						<i className="quote">
							" La elección es siempre el primer paso. No tienes que saber el
							'cómo' se va a mostrar. Tu elección cambia al mundo para que
							comience a permitir que 'eso' suceda."
						</i>
						<p className="author">Dain Heer</p>
					</blockquote>
				</div>
			</section>
		</>
	);
}
