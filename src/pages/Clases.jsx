/* eslint-disable react/prop-types */
import React from "react";
import { ClassCard } from "../components/ClassCard.jsx";
import heroBanner from "../assets/hero-banner.jpg";
import { Hero } from "../components/Hero.jsx";
import { CLASES } from "../assets/cardsData.js";
import { Outlet } from "react-router";

const description =
  "Aquí encontrarás todas las clases, cursos y talleres que ofreceremos en Art of Flowing. Siempre haciendo hincapié en seguir el flujo de la vida y disfrutarlo desde nuestro más aunténtico ser.";

export function Clases() {
  return (
    <>
      {/* { ? (
        <Hero
          img={heroBanner}
          tittle="Nuestras clases"
          description={description}
        />
      ) : (
        <Outlet />
        )} */}

      <Outlet />

      <div className="page-container">
        <section className="class-container">
          {Object.keys(CLASES).map((clase) => (
            <ClassCard
              tittle={CLASES[clase].tittle}
              description={CLASES[clase].description}
              img={CLASES[clase].img}
              urlPath={CLASES[clase].urlPath}
              key={CLASES[clase].tittle}
            />
          ))}
        </section>
      </div>
    </>
  );
}
