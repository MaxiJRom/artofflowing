import React from "react";
import { ClassCard } from "../../components/ClassCard";
import { clasesData } from "../../assets/cardsData";
import meditacionBanner from "../../assets/grupo-de-meditacion.webp";

export function MeditacionOnline() {
  return (
    <>
      <section className="subpage-container">
        <img
          src={meditacionBanner}
          alt="Yoga class"
          className="subpage-banner"
        />
        <div className="subpage-text">
          <h1>Grupo de Meditacion Online</h1>
          <p>
            Algunas personas dicen que la meditación es una técnica difícil de
            dominar. Yo digo que nada más lejos de la realidad! <br />
            <br /> Meditar es algo que tu puedes hacer para relajarte, dormir
            mejor, mejorar la digestión y miles de beneficios más y no es para
            nada difícil. <br />
            <br />
            En el grupo de meditación usamos una técnica milenaria que es a
            prueba de error y te aseguro que verás los beneficios rápidamente,
            por que como todo, lo que necesitas son las ganas de querer hacerlo.{" "}
            <br />
            <br />
            Por eso te invito a que te unas al grupo de meditación, donde te
            encontrarás con personas como tú, que quieren mejorar su estilo de
            vida y saben que el cambio empieza desde adentro hacia afuera.
          </p>

          <br />
          <b>Elementos necesarios:</b>
          <ul>
            <li>Ropa cómoda</li>
          </ul>
          <br />
          <b> Modalidad:</b>
          <ul>
            <li>vía Zoom y YouTube.</li>
          </ul>
          <br />
          <b>Precio:</b>
          <ul>
            <li>Una clase semanal de 1hs. €10</li>
            <li>Cuatro clases semanales de 1hs. €30</li>
          </ul>
          <br />
          <b>Horario</b>
          <ul>
            <li>Vespertino</li>
          </ul>
        </div>
        <hr />
      </section>
    </>
  );
}
