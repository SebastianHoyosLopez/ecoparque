import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/conocenos">
            conocenos
            <hr />
            <div className="container-fluid bg-warning"></div>
          </Route>
          <Route path="/lugares">
            lugares
            <div className="container-fluid bg-danger"></div>
          </Route>
          <Route path="/contactanos">
            Contáctanos
          </Route>
          <Route path="/reservas">
            Reservas
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
