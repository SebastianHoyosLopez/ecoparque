import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Lugares from "./components/Lugares/Lugares";
import NavbarHome from "./components/NavbarHome";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <Router>
      <NavbarHome />
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/ecoparque" exact>
          <Inicio />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/lugares">
          <Lugares />
        </Route>
        <Route path="/contactanos">Contáctanos</Route>
        <Route path="/reservas">Reservas</Route>
      </Switch>
    </Router>
  );
}

export default App;
