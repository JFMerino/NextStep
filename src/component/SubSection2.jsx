import React from "react";
import "./styles/section.css";
import "./styles/phone.css";

export const SubSection2 = () => {
  return (
    <div className="section inversa">
      <div className="content-section">
        <h1 className="title-section">
          Crea un perfil de usuario y comparte tus datos con empresas
        </h1>
        <p className="paragraph-section">
          Crea un Video, o una carta de presentacion{" "}
        </p>
      </div>
      <div className="media-section">
        <div className="media">
          <div className="mobile-form">
            <div className="container-datos">
              <div className="title-mobile">
                <div className="container-title-mobil">
                  <div className="tr">
                    <div className="emojis">
                      <p className="emoji-chico">👩🏽</p>
                    </div>
                    <div className="nombre-tiempo">
                      <p className="nombre">Alan</p>
                      <p className="tiempo">30 minutos atras</p>
                    </div>
                  </div>
                  <div className="tres-puntos">
                    <div className="punto"></div>
                    <div className="punto"></div>
                    <div className="punto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <video
            src="./src/assets/img/skbo1LpSjhokBWFi8l3F9RwDiM4_ZGpqw-RFjJNOEoQXIsBXwRzy_JnnvisgIUo8YcdI5bM.mp4"
            autoPlay
            muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default SubSection2;
