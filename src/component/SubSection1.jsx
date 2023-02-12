import React from "react";
import "./styles/section.css";
import "./styles/audio.css";

export const SubSection1 = () => {
  return (
    <div className="section">
      <div className="media-section">
        <div className="position">
          <div className="img">
            <img
              src="https://framerusercontent.com/images/BZveiOrOkC27ti2CQXL7mMWAAxU.png?scale-down-to=512"
              alt="Woman using a mobile phone"
              sizes="399px"
              loading="lazy"
            />
          </div>
          <div className="fondo"></div>
          <div className="padre">
            <div className="emoji">
              <p className="emoji-chica">👩🏽‍💻</p>
            </div>
          </div>
          <div className="audio-form">
            <div className="play"></div>
            <div className="linea"></div>
            <p className="tiempo">0:24</p>
          </div>
          <div className="fila-emojis">
            <p className="emo">🔥</p>
            <p className="emo">💖</p>
            <p className="emo">😮</p>
            <p className="emo">💋</p>
            <p className="emo">👍</p>
            <p className="emo">🤩</p>
          </div>
        </div>
      </div>
      <div className="content-section">
        <h1 className="title-section">Acceso a Ofertas de trabajo</h1>
        <p className="paragraph-section">
          Postule y envíe sus antecedentes directamente de la plataforma
        </p>
      </div>
    </div>
  );
};

export default SubSection1;
