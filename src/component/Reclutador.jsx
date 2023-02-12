import React from "react";
import './styles/reclutador.css';

export const Reclutador = ()=>{
    return (
        <div className="recluta">
            <h1 className="title-general">Eres Reclutador??</h1>
            <p className="content-general">Publique su oferta de empleo para que nuestros usuarios naveguen y postulen a una nueva búsqueda de empleo</p>
            <input type="submit" value="Publique Aquí" />
        </div>
    )
}

export default Reclutador;