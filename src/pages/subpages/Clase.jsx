import React from "react";
import { CLASES } from "../../assets/cardsData";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Clase() {
  const { name } = useParams();

  return (
    <>
      <section className="subpage-container">
        <img
          className="subpage-banner"
          src={CLASES[name].subpageImg}
          alt={CLASES[name].subpageImgAlt}
        />
        <div className="subpage-text">
          <h1>{CLASES[name].tittle}</h1>

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {CLASES[name].subpageText}
          </ReactMarkdown>
        </div>
        <hr />
      </section>
    </>
  );
}
