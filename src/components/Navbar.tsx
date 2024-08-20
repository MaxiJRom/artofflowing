import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import burgerIcon from "../assets/burger-menu.svg";
import closeIcon from "../assets/close.svg";

export function Navbar({ windowWidth }) {
	const [iconOpen, setIconOpen] = useState(true);
	const navMenu = useRef();

	function handleClick(e) {
		setIconOpen(!iconOpen);
		windowWidth < 750 && navMenu.current.classList.toggle("nav-bar-visible");
	}

	return (
		<>
			<nav
				className={windowWidth < 750 ? "mobile-nav" : "desktop-nav"}
				ref={navMenu}
			>
				<ul>
					<li>
						<Link to="/" onClick={handleClick}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/Clases" onClick={handleClick}>
							Clases
						</Link>
					</li>
					<li>
						<Link to="/Talleres" onClick={handleClick}>
							Talleres
						</Link>
					</li>
					<li>
						<Link to="/Sesiones" onClick={handleClick}>
							Sesiones
						</Link>
					</li>
					<li>
						<Link to="/Nosotros" onClick={handleClick}>
							Nosotros
						</Link>
					</li>
				</ul>
			</nav>

			<button
				className={"menu-button " + (windowWidth < 750 ? "visible" : "hidden")}
				onClick={handleClick}
				id="menu-button"
				aria-label="open"
			>
				<img src={iconOpen ? burgerIcon : closeIcon} alt="icon" />
			</button>
		</>
	);
}
