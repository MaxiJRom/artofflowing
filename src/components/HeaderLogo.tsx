import React from "react";
import { Link } from "react-router-dom";

export function HeaderLogo() {
	return (
		<Link to="/" className="header-logo">
			<h2 className="header-logo-text">Art of Flowing</h2>
		</Link>
	);
}
