import React from "react";
import SubSection11 from "./SubSection1-1";
import Usuarios from "./Usuarios";
import Reclutador from "./Reclutador";
import SubSection1 from "./SubSection1";
import SubSection2 from "./SubSection2";
import SubSection3 from "./SubSection3";
import SubSection4 from "./SubSection4";
import "./styles/contenido.css";

export const Contenido = () => {
  return (
    <>
      <section className="section-home">
        <SubSection11 />
      </section>
      <section className="section-usuarios">
        <Usuarios />
      </section>
      <div className="container">
        <section className="reclutador">
          <Reclutador />
        </section>
        <section className="section">
          <SubSection1 />
        </section>
        <section className="section">
          <SubSection2 />
        </section>
        <section className="section">
          <SubSection3 />
        </section>
        <section className="section">
          <SubSection4 />
        </section>
      </div>
    </>
  );
};

export default Contenido;
