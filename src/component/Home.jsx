import React from "react";
import "./styles/home.css/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import Movil from "./Movil";

export const Home = () => {
  return (
    <header className="header-home">
      <div className="home">
        <div>
          <h1 className="welcome">
            El apoyo que necesitas para tu proximo
            <br />
            <span>desafío laboral.</span>
          </h1>
        </div>
        <p className="content-home">
          Conecta con un reclutador mediante un match de habilidades laborales.
        </p>
        <input type="submit" value="Mas informacion" className="more-info" />
      </div>
      <div className="mobile">
      <Movil />
        
        <div className="content-mobile">
          <header className="header-mobile">
            <div className="back">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </header>
        </div>
      </div>
    </header>
  );
};

export default Home;
