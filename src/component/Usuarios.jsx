import React from "react";
import "./styles/user.css";

export const Usuarios = () => {
  return (
    <div className="usuario">
      <div className="item-usuarios">
        <h2 className="title-item">3K</h2>
        <p className="content-item">Usuarios Activos</p>
      </div>
      <div className="item-usuarios">
        <h2 className="title-item">1K+</h2>
        <p className="content-item">Coaches</p>
      </div>
      <div className="item-usuarios">
        <h2 className="title-item">4.3K</h2>
        <p className="content-item">Empresas </p>
      </div>
    </div>
  );
};

export default Usuarios;
