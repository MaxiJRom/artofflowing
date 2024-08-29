import React from "react";
import heroBanner from "../assets/hero-banner.jpg";
import { Hero } from "../components/Hero.jsx";
import { ClassCard } from "../components/ClassCard.jsx";
import { sesionesData } from "../assets/cardsData";

const description =
  "Aquí encontrarás todas las clases, cursos y talleres que ofreceremos en Art of Flowing. Siempre haciendo hincapié en seguir el flujo de la vida y disfrutarlo desde nuestro más aunténtico ser.";

export function Sesiones() {
  return (
    <>
      <Hero
        img={heroBanner}
        tittle="Nuestras sesiones"
        description={description}
      />
      <div className="page-container">
        <section className="class-container">
          {sesionesData.map((clase) => (
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
