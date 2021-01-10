import React from "react";
import { Card, Button } from "react-bootstrap";

const Catalogo = (props) => {
  return (
    <>
      <Card style={{ width: "16rem"}}>
        <Card.Img style={{ height: "160px" }} variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>
            <h1 className="text-center">{props.service}</h1>
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button style={{width: "210px"}} variant="warning" size="lg" block>
            Reserva ya
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Catalogo;
