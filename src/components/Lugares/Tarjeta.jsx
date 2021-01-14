import React from "react";
import { Card, Button } from "react-bootstrap";

const Tarjeta = (props) => {
  return (
      <Card className="mt-5 mx-1" style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{ height: "9rem"}} src={props.fotoCard} />
        <Card.Body>
          <Card.Title>{props.titleCard}</Card.Title>
          <Card.Text>{props.descriptionCard}</Card.Text>
          <Button variant="primary">Como llegar</Button>
        </Card.Body>
      </Card>
  );
};

export default Tarjeta;
