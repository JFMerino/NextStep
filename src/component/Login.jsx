import React from "react";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import "./styles/login.css";
import Footer from "./Footer";

export const Login = () => {

    const clientID =  "910135715292-upq6mepp2rlavudfs1hpd1cp6svgjl0c.apps.googleusercontent.com";
    const[user, setUser]=useState({});
    useEffect(()=>{
        const start = () => {
            gapi.auth2.init({
                client_id: clientID,
            })
        }

        gapi.load("client:auth2", start)
    }, [])

    const onSuccess = (response) =>{
        setUser(response);
    }

    const onFailure = () =>{
        console.log("Error de autenticacion")
    }

  return (
    <div className="login">
      <div className="form">
        <header className="header-login">
        <div className="imagen">
        <img
            src="./src/assets/img/nxtstepwhite-removebg-preview.png"
            alt="Next Step logo"
            className="logo-login"
          />
        </div>
        </header>
        <form action="#" className="form-login">
            <div className="datos">
                <input type="email" name="email" id="email" placeholder="Correo electronico" />
                <input type="password" name="pass" id="pass" placeholder="Contraseña" />
            </div>
            <div className="register">
                <a href="#/" className="a-link">Registrarse</a>
            </div>
            <div className="login-submit">
                <input type="submit" value="Log In" />
            </div>
            <div className="olvide-contraseña">
                <a href="#/" className="a-link">Olvide mi contraseña</a>
            </div>
            <div className="google">
            <GoogleLogin
            clientId={clientID}
            onSuccess ={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
            redirectUri="/"
            />
            </div>
        </form>
      </div>
      <div className="mensaje">
        <div className="mensaje-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
