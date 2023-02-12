import "./styles/navbar.css";

export const NavBar = () => {
  return (
    <div>
      <header className="header">
      <nav className="nav">
        <a href="" className="logo-nav">
          <img
            src="https://framerusercontent.com/images/hl8L7wz7DYs6ZWVISvfPl63xZY.png?scale-down-to=512"
            alt="Next Step logo"
            className="logo"
          />
        </a>
        <div className="menu">
            <div><p className="item oculto">Eres profesional</p></div>
            <div><p className="item oculto">Eres reclutador</p></div>
            <div><p className="item"><button>Log In</button></p></div>
        </div>
      </nav>
    </header>
    </div>
  );
};

export default NavBar;
