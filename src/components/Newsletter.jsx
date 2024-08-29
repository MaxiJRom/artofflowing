import React, { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  function handleChange({ target }) {
    setEmail((prev) => target.value);
  }

  function handleSubmit(e) {
    // e.preventDefault();
    setEmail((prev) => "");
  }

  return (
    <section className="newsletter">
      <h3>Únete al club</h3>
      <p>Suscríbete y sé el primero en enterarte de las novedades!</p>
      <form
        action="https://formsubmit.co/maxiromero11@hotmail.com"
        method="POST"
        className="newsletter-form"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Ingresa tu dirección de correo aquí"
          required
        />
        <input type="submit" value="Unirse" />
      </form>
    </section>
  );
}
