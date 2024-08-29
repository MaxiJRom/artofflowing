import React from "react";
import yogaBanner from "../../assets/yoga-online.webp";
import { ClassCard } from "../../components/ClassCard.jsx";
import { clasesData } from "../../assets/cardsData";

export function YogaOnline() {
  return (
    <>
      <section className="subpage-container">
        <img src={yogaBanner} alt="Yoga class" className="subpage-banner" />
        <div className="subpage-text">
          <h1>Yoga Online</h1>
          <p>
            Nos centramos en la respiración, nos tomamos un momento en cada
            postura y disfrutamos del flow de cada movimiento del cuerpo
            acompañando con la respiración consciente.
            <br />
            <br /> Desde el día 1 hacemos hincapié en las posturas conscientes,
            escuchar a nuestro cuerpo, sentir nuestros limites y respetarlos con
            amor sin juicio. <br />
            <br /> Realizamos Hatha Yoga Online, un estilo de yoga suave, donde
            a través de cada postura y respiración nos entregamos al flujo del
            movimiento logrando equilibrio de mente, cuerpo y espíritu. <br />
            <br />
            Te invito a que formes parte de un grupo de personas igual que tú,
            principiante, con conocimientos básicos y muchas ganas de aprender a
            soltar el control y conectar con su cuerpo, con su energía, con sus
            sueños.
          </p>
          <br />
          <b>Elementos necesarios:</b>
          <ul>
            <li>Mat o colchoneta</li>
            <li>Ropa cómoda</li>
            <li>Bloques de yoga o algo parecido</li>
            <li>Cinta de tela de alrededor 200cm (**)</li>
          </ul>
          <br />
          <br />
          ** No es primordial, podemos hablarlo y chequear que elementos tienes
          en casa que puedan reemplazarlo. Que nada te impida hacer lo que
          quieres ;)
          <br />
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
            <li>Matutino</li>
            <li>Vespertino</li>
          </ul>
        </div>
        <hr />
      </section>
    </>
  );
}
