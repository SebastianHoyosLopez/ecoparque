import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

const NavbarHome = () => {
  return (
<<<<<<< Updated upstream
<<<<<<< HEAD
    <Navbar bg="light" expand="lg"  sticky="top">
=======
    <Navbar bg="light" expand="lg">
>>>>>>> b62b1fbb8efbbf6035dbb2e96245bc9dc282764d
=======
    <Navbar bg="light" expand="lg" sticky="top">
>>>>>>> Stashed changes
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
      <Navbar.Collapse id="basic-navbar-nav" id="navbar">
        <Nav className="ml-auto">
            <NavLink className="btn btn-light mr-2" to="/" exact>
              Inicio
            </NavLink>
            <NavLink className="btn btn-light mr-2" to="/conocenos">
              Conocenos
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
