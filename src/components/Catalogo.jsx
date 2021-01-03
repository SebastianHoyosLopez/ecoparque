import React from "react";
import { Card, Button } from "react-bootstrap";

const Catalogo = (props) => {
  return (
    <div>
      <Card className="my-5 mx-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imgCabañas} />
        <Card.Body>
          <Card.Title>
            <h1 className="text-center">{props.hospedaje}</h1>
          </Card.Title>
          <Card.Text>{props.descriptionHospedaje}</Card.Text>
          <Button variant="warning" size="lg" block>Reserva ya</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Catalogo;
