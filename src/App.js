import "./style/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Clases } from "./pages/Clases.tsx";
import { Nosotros } from "./pages/Nosotros.tsx";
import { Talleres } from "./pages/Talleres.tsx";
import { Sesiones } from "./pages/Sesiones.tsx";
import { HeaderLogo } from "./components/HeaderLogo.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Newsletter } from "./components/Newsletter.tsx";
import { Footer } from "./components/Footer.tsx";
import { useState, useEffect } from "react";
import { YogaOnline } from "./pages/subpages/YogaOnline.tsx";
import { YogaPresencial } from "./pages/subpages/YogaPresencial.tsx";
import { MeditacionOnline } from "./pages/subpages/MeditacionOnline.jsx";

function App() {
	const [windowWidth, setWindowWidth] = useState(undefined);
	// const location = useLocation();

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<header>
				<HeaderLogo />
				<Navbar windowWidth={windowWidth} />
			</header>

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Clases">
						<Route index element={<Clases />} />
						<Route path="YogaOnline" element={<YogaOnline />} />
						<Route path="YogaPresencial" element={<YogaPresencial />} />
						<Route path="YogaOnline" element={<YogaOnline />} />
						<Route path="MeditacionOnline" element={<MeditacionOnline />} />
					</Route>

					<Route path="/Talleres" element={<Talleres />} />
					<Route path="/Nosotros" element={<Nosotros />} />
					<Route path="/Sesiones" element={<Sesiones />} />
				</Routes>
			</main>

			<Newsletter />
			<Footer />
		</>
	);
}

export default App;
