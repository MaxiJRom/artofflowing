import React from "react";
import { clasesData } from "../../assets/cardsData";
import { ClassCard } from "../../components/ClassCard.jsx";
import yogaBanner from "../../assets/yoga-presencial.webp";

export function YogaPresencial() {
  return (
    <>
      <section className="subpage-container">
        <img src={yogaBanner} alt="Yoga class" className="subpage-banner" />
        <div className="subpage-text">
          <h1>Yoga presencial</h1>
          <p>
            En las clases presenciales disfrutamos de la compañía de nosotros
            mismos desde la consciencia, desde la respiración. Nos movemos desde
            la gratitud de darnos el permiso para disfrutar un momento para
            nosotros mismos. La presencialidad nos permite percibir el espacio
            que generamos al hacer yoga.
            <br />
            <br />
            Sin dejar de lado la técnica, la suavidad con la que realizamos las
            posturas, acompañando con la respiración, no regala lo que es la
            esencia del yoga: la unión de mente, cuerpo y espiritu.
            <br />
            <br />
            Realizamos Hatha Yoga Online, un estilo de yoga con movimientos
            suaves, centrado en la respiración y sosteniendo las posturas para
            poder conectar con nuestro cuerpo.
            <br />
            <br />
            Te invito a que formes parte de un grupo de personas igual que tú,
            principiante, con conocimientos básicos y muchas ganas de aprender a
            soltar el control y conectar con su cuerpo, con su energía, con el
            fluir de la vida.
          </p>

          <br />
          <b>Elementos necesarios:</b>
          <ul>
            <li>Mat de yoga o colchoneta</li>
            <li>Ropa cómoda</li>
          </ul>
          <br />
          <b>Precio:</b>
          <ul>
            <li>Opción 1: Una clase semanal de 1hs. €10</li>
            <li>Opción 2: Cuatro clases mensuales de 1hs. €30</li>
          </ul>
          <br />
          <b>Horario:</b>
          <ul>
            <li>Matutino</li>
            <li>Vespertino</li>
          </ul>
        </div>
        <hr />
      </section>
    </>
  );
}
