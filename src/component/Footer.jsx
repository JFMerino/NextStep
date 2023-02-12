import React from "react";
import "./styles/footer.css";

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
