import React from "react";
import "./styles/footer.css";

export const Footer = () => {
    return (
        <>
        <div>
            <p>"La perseverancia es la madre del éxito."</p>
            <input type="submit" value="Mas informacion" className="more-info" />
        </div>
        <hr />
        <p>&copy; 2023 NextStep, Todos los derechos reservados</p>
        </>
     );
};

export default Footer;