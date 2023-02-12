import React from "react";
import "./styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-footer">
          <div className="line-footer">
          <div className="encabezado">
            <h1 className="titulo-footer">
              "La perseverancia es la madre del éxito."
            </h1>
            <input
              type="submit"
              value="Mas informacion"
              className="more-info"
            />
          </div>
          </div>          
          <div className="redes">
          <FontAwesomeIcon icon={["fab", "github"]} />
          </div>
          <div className="copy">
            <p>&copy; 2023 NextStep, Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
