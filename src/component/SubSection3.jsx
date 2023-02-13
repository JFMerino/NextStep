import React from "react";
import "./styles/section.css";

export const SubSection3 = () => {
  return (
    <div className="section">
      <div className="media-section">
        <div className="position">
          <div className="img">
            <img
              src="https://framerusercontent.com/images/BSZlVdIaXipFLiVUgQOgPTTl3T4.png?scale-down-to=2048"
              alt="Woman using a mobile phone"
              sizes="399px"
              loading="lazy"
            />
          </div>
          <div className="fondo"></div>
        </div>
      </div>
      <div className="content-section">
        <h1 className="title-section">Revisa estado de tu Postulación</h1>
        <p className="paragraph-section">
          Revisa el estado de tu postulación en tiempo real.
        </p>
      </div>
    </div>
  );
};

export default SubSection3;
