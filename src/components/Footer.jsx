import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitterx.svg";
import bloggerIcon from "../assets/icon-blogger.svg";
import youtubeIcon from "../assets/icon-youtube.svg";

const redes = [
	{
		url: "https://www.instagram.com/artof_flowing",
		icon: instagramIcon,
		name: "Instagram",
	},
	{
		url: "https://www.twitter.com/Art_of_Flowing",
		icon: twitterIcon,
		name: "Twitter X",
	},
	{
		url: "https://artofflowing.blogspot.com/",
		icon: bloggerIcon,
		name: "Blogspot",
	},
	{
		url: "https://www.youtube.com/@ArtOfFlowing",
		icon: youtubeIcon,
		name: "Youtube",
	},
];

const publicKey = "ACVBkvD4ohyOMUH0Z";

export function Footer() {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submit, setSubmit] = useState("Enviar");
	const status = document.getElementById("status");

	const statusStyle = {
		fontWeight: "700",
		fontSize: ".8rem",
	};

	function handleClick({ target }) {
		window.open(target.dataset.url, "_blank", "noopener");
	}

	function handleSubmit(e) {
		e.preventDefault();

		setSubmit("Enviando...");

		emailjs
			.sendForm("eli_contact", "contact_form", form.current, publicKey)
			.then(
				(result) => {
					// console.log(result);
					status.innerHTML = "Enviado con éxito";
					setTimeout(() => {
						setName("");
						setEmail("");
						setMessage("");
						setSubmit("Enviar");
					}, 2000);
				},
				(error) => {
					// console.log(error.text);
					status.innerHTML = "Hubo un error, intente nuevamente";
					setSubmit("Enviar");
				}
			);
	}

	return (
		<footer>
			<div className="footer-container">
				<div className="footer-social">
					<h3>Seguinos en nuestras redes</h3>
					{redes.map((red, index) => (
						<div className="social-network" key={index}>
							<img
								src={red.icon}
								alt={red.name}
								data-url={red.url}
								onClick={handleClick}
							/>
							<Link to={red.url} rel="noopener noreferrer" target="_blank">
								{red.name}
							</Link>
						</div>
					))}
				</div>
				<div className="footer-form">
					<form ref={form} onSubmit={handleSubmit}>
						<input
							type="text"
							name="user_name"
							placeholder="Nombre"
							onChange={({ target }) => setName(target.value)}
							value={name}
							required
						/>
						<input
							type="email"
							name="user_email"
							placeholder="Email"
							required
							onChange={({ target }) => setEmail(target.value)}
							value={email}
						/>
						<textarea
							name="message"
							cols="30"
							rows="8"
							placeholder="Escribe tu comentario"
							onChange={({ target }) => setMessage(target.value)}
							value={message}
							required
						></textarea>
						<p id="status" style={statusStyle}></p>
						<input type="submit" value={submit} />
					</form>
				</div>
			</div>

			<p className="footer-copyright">
				©Art of Flowing 2024. Creado por MaxiJRom
			</p>
		</footer>
	);
}
