import "./style/App.css";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Clases } from "./pages/Clases.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Talleres } from "./pages/Talleres.jsx";
import { Sesiones } from "./pages/Sesiones.jsx";
import { useState, useEffect } from "react";
import { YogaOnline } from "./pages/subpages/YogaOnline.jsx";
import { YogaPresencial } from "./pages/subpages/YogaPresencial.jsx";
import { MeditacionOnline } from "./pages/subpages/MeditacionOnline.jsx";
import Root from "./components/Root.jsx";

function App() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/clases" element={<Clases />}>
          <Route path="yogaOnline" element={<YogaOnline />} />
          <Route path="yogaPresencial" element={<YogaPresencial />} />
          <Route path="meditacionOnline" element={<MeditacionOnline />} />
        </Route>
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/sesiones" element={<Sesiones />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
