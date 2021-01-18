import React from "react";
import { Card } from "react-bootstrap";

const Contacto = () => {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <img
          style={{ objectFit: "scale-down", width: "500px" }}
          src="https://imgur.com/DFZPrYY.jpg"
          alt="representación"
        />
        <h1 className="text-center mt-5">Comunicate con nosotros</h1>
      </div>
      <div className="blog-card spring-fever">
        <div className="title-content text-center">
          <h3>Lineas activas</h3>
          <hr />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <Card variant="success" style={{ width: "700px" }} className="text-center">
              <Card.Header>Información</Card.Header>
              <Card.Body>
                <Card.Title>Comunicate</Card.Title>
                <Card.Text>
                  podras comunicarte de lunes a sabado en las lines de atención
                  que informamos a continuación y por medio de correo
                  electronico ecoparque@ecoparque.com y el respectivo whatsapp
                  3226540000.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
