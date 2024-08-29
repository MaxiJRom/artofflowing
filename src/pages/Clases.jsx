import React from "react";
import { ClassCard } from "../components/ClassCard.jsx";
import heroBanner from "../assets/hero-banner.jpg";
import { Hero } from "../components/Hero.jsx";
import { clasesData } from "../assets/cardsData.js";
import { Outlet } from "react-router";

const description =
  "Aquí encontrarás todas las clases, cursos y talleres que ofreceremos en Art of Flowing. Siempre haciendo hincapié en seguir el flujo de la vida y disfrutarlo desde nuestro más aunténtico ser.";

export function Clases() {
  return (
    <>
      {document.location.pathname === "/clases" ? (
        <Hero
          img={heroBanner}
          tittle="Nuestras clases"
          description={description}
        />
      ) : (
        <Outlet />
      )}
      <div className="page-container">
        <section className="class-container">
          {clasesData.map((clase) => (
            <ClassCard
              tittle={clase.tittle}
              description={clase.description}
              img={clase.img}
              urlPath={clase.urlPath}
              key={clase.tittle}
            />
          ))}
        </section>
      </div>
    </>
  );
}
