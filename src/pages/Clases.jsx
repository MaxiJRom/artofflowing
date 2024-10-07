/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { ClassCard } from "../components/ClassCard.jsx";
import heroBanner from "../assets/hero-banner.jpg";
import { Hero } from "../components/Hero.jsx";
import { CLASES } from "../assets/cardsData.js";
import { Outlet } from "react-router";

const description =
  "Aquí encontrarás todas las clases, cursos y talleres que ofreceremos en Art of Flowing. Siempre haciendo hincapié en seguir el flujo de la vida y disfrutarlo desde nuestro más aunténtico ser.";

export function Clases() {
  const [heroIsVisible, setHeroIsVisible] = useState(true);

  //creo la capacidad de ocultar el hero y luego le paso esa capacidad a las cards
  function hiddeHero(bool) {
    setHeroIsVisible(!bool);
  }

  //cuando se hace click en algun navLink, vuelve a estar visible el hero
  useEffect(() => {
    const $navLinks = document.querySelectorAll("header > nav > ul > li> a");
    $navLinks.forEach((link) => {
      link.addEventListener("click", () => hiddeHero(false));
    });

    return () => {
      $navLinks.forEach((link) => {
        link.removeEventListener("click", () => hiddeHero(false));
      });
    };
  });

  //quiero saber cual es la clase activa en cada momento, luego le paso la habilidad de cambiar a clase activa a las cards
  const [activeClass, setActiveClass] = useState(null);

  return (
    <>
      {heroIsVisible && (
        <Hero
          img={heroBanner}
          tittle="Nuestras clases"
          description={description}
        />
      )}

      <Outlet />

      <div className="page-container">
        <section className="class-container">
          {Object.keys(CLASES)
            .filter((clase) => CLASES[clase].tittle !== activeClass)
            .map((clase) => (
              <ClassCard
                onClick={hiddeHero}
                onClickAnother={(elm) => setActiveClass(elm)}
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
