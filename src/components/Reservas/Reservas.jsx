import React from "react";
import { Form } from "react-bootstrap";

const Reservas = () => {
  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
          <h1 className="text-center">Reserva tu cupo</h1>
          <hr/>
        <Form className="mt-5" style={{width:"700px", height:'400px'}}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Selecciona tu opción</Form.Label>
            <Form.Control as="select">
            <option>Camping</option>
              <option>Hospedaje Cabañas</option>
              <option>Recorridos</option>
              <option>Glanping</option>
              <option>Deportes Extremos</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Seleciona alguna de nuestras opciones</Form.Label>
            <Form.Control as="select" multiple>
              <option>Camping</option>
              <option>Hospedaje Cabañas</option>
              <option>Recorridos</option>
              <option>Glanping</option>
              <option>Deportes Extremos</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Breve descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Reservas;
