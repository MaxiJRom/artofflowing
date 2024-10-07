/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export function ClassCard({
  tittle,
  img,
  description,
  urlPath,
  onClick,
  onClickAnother,
}) {
  //cuando hago click en una card, oculto el hero y cambio la active class
  function handleClick() {
    window.scrollTo(0, 0);
    onClick(true);
    onClickAnother(tittle);
  }

  return (
    <article className="class-card">
      <h3>{tittle}</h3>
      <hr />
      <div className="img-container">
        <img src={img} alt={tittle} />
      </div>
      <p>{description}</p>

      <Link to={urlPath} rel="noopener noreferrer" onClick={handleClick}>
        Ver más
      </Link>
    </article>
  );
}
