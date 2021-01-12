import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

const NavbarHome = () => {
  return (
    <Navbar bg="light" expand="md"  sticky="top">
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          <img
            src="https://imgur.com/cf9aQaX.jpg"
            alt="icono"
            id="img"
            className="mx-2"
          />
          Ecoparque
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle arial-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-md-end" id="basic-navbar-nav" id="navbar">
        <Nav>
            <NavLink className="btn btn-light mr-2" to="/" exact>
              Inicio
            </NavLink>
<<<<<<< HEAD
            <NavLink className="btn btn-light mr-2" to="/nosotros">
=======
            <NavLink className="btn btn-light mr-2" to="/conocenos">
>>>>>>> e9a94e5a99322847701edbb11423e5962346fcc8
              Nosotros
            </NavLink>
            <NavLink className="btn btn-light mr-2" to="/lugares">
              Lugares
            </NavLink>
            <NavLink className="btn btn-light mr-2" to="/contactanos">
              Contáctanos
            </NavLink>
            <NavLink className="btn btn-light mr-2" to="/reservas">
              Reservas
            </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHome;
