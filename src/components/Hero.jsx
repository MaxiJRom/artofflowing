import React from "react";

export function Hero({ img, tittle, description }) {
	return (
		<div className="hero-container">
			<img src={img} alt={tittle} className="hero-img" />
			<div className="hero-textbox">
				<h1>{tittle}</h1>
				<p>{description}</p>
			</div>
		</div>
	);
}
