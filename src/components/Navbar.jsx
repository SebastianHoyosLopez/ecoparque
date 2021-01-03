import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand" to="/">
        <img src="https://imgur.com/cf9aQaX.jpg" alt="icono" id="img" className="mx-2"/>
        Ecoparque
      </Link>
      <div className="d-flex">
        <NavLink className="btn btn-dark mr-2" to="/" exact>
          Inicio
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/conocenos">
          Conocenos
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/lugares">
          Lugares
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/contactanos">
          Contáctanos
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/reservas">
          Reservas
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
