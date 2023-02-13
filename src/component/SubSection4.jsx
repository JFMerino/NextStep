import React from "react";
import "./styles/section.css";
import "./styles/phone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const SubSection4 = () => {
  return (
    <div className="section-tabla">
      <div className="media-table">
        <div className="mobile-form">
          <div className="media-2"></div>
          <div className="container-title-mobil">
            <div className="tr">
              <div className="atras">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className="nombre-tiempo">
                <p className="content-movil">Buscar empleo</p>
              </div>
            </div>
            <div className="tres-puntos-2">
              <div className="punto"></div>
              <div className="punto"></div>
              <div className="punto"></div>
            </div>
          </div>
          <div className="footer-movil">
            <input type="submit" value="Buscar" />
          </div>
        </div>
        <div className="table">
          <div className="cabecera">
            <p className="title-table">Empresa</p>
            <p className="title-table">Fecha Postulacion</p>
            <p className="title-table">Reclutador</p>
            <p className="title-table">Estado</p>
          </div>
          <div className="columnas">
            <p className="subtitle-table">BobCast</p>
            <p className="contenido-tabla">03/02/22</p>
            <p className="contenido-tabla">Karen B</p>
            <p className="contenido-tabla">En Proceso</p>
          </div>
          <div className="columnas">
            <p className="subtitle-table">Mineria Casia</p>
            <p className="contenido-tabla">03/02/22</p>
            <p className="contenido-tabla">Manuel L</p>
            <p className="contenido-tabla">Descartado</p>
          </div>
          <div className="columnas">
            <p className="subtitle-table">Empresa NL</p>
            <p className="contenido-tabla">03/02/22</p>
            <p className="contenido-tabla">Lorean K</p>
            <p className="contenido-tabla">Solicitud Enviada</p>
          </div>
          <div className="columnas">
            <p className="subtitle-table">KB Frabrics</p>
            <p className="contenido-tabla">04/02/22</p>
            <p className="contenido-tabla">Sebastian O</p>
            <p className="contenido-tabla">En Proceso</p>
          </div>
          <div className="columnas">
            <p className="subtitle-table">BK Jhones</p>
            <p className="contenido-tabla">04/02/22</p>
            <p className="contenido-tabla">Francia H</p>
            <p className="contenido-tabla">En Proceso</p>
          </div>
          <div className="columnas">
            <p className="subtitle-table">Empresas Rodriguez</p>
            <p className="contenido-tabla">05/02/22</p>
            <p className="contenido-tabla">Cristian F</p>
            <p className="contenido-tabla">En Proceso</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection4;
