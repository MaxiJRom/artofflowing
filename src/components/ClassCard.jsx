import React from "react";
import { Link } from "react-router-dom";

export function ClassCard({ tittle, img, description, urlPath }) {
	function handleClick() {
		window.scrollTo(0, 0);
	}

	return (
		<article className="class-card">
			<h3>{tittle}</h3>
			<hr />
			<div className="img-container">
				<img src={img} alt={tittle} />
			</div>
			<p>{description}</p>

			<Link to={urlPath} rel="noopener noreferrer" onClick={handleClick}>
				Ver más
			</Link>
		</article>
	);
}
