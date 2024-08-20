import React from "react";
import { Link, Outlet } from "react-router-dom";

export function ClasesLayout() {
	const styles = {
		display: "flex",
		justifyContent: "space-around",
	};

	return (
		<>
			<div style={styles}>
				<Link to="/Clases/YogaOnline">Yoga online</Link>
				<Link to="/Clases/YogaPresencial">Yoga presencial</Link>
			</div>
			<Outlet />
		</>
	);
}
