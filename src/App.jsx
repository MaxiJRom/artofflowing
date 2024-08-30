import "./style/App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Clases } from "./pages/Clases.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Talleres } from "./pages/Talleres.jsx";
import { Sesiones } from "./pages/Sesiones.jsx";
import Root from "./components/Root.jsx";
import React from "react";
import { Clase } from "./pages/subpages/Clase.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/clases" element={<Clases />}>
          <Route path=":name" element={<Clase />} />
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
