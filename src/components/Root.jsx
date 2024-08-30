/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { HeaderLogo } from "./HeaderLogo.jsx";
import { Navbar } from "./Navbar.jsx";
import { Newsletter } from "./Newsletter.jsx";
import { Footer } from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>
        <HeaderLogo />
        <Navbar windowWidth={windowWidth} />
      </header>

      <main>
        <Outlet />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
