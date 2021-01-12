import React from "react";
import { Card, Button } from "react-bootstrap";

const Catalogo = (props) => {
  return (

    <section class="py-5 text-center container">
    <div class="row py-lg">
      <div class="col-lg-8 col-md-8 mx-auto">
        <h1 class="fw-light">Ecoparque</h1>
        <img
            className="d-block w-100"
            src="https://imgur.com/VAUPA0q.jpg"
            alt="imagenes de muestra"
          />
        <p class="text-muted col-md-12">Somos una empresa con más de 17 años de experiencia en brindar bienestar a nuestros turistas, 
      promovemos el contacto del hombre con la naturaleza, mediante el aprendizaje y la diversion. 
      Queremos fomentar la conservación de los recursos naturales y demostrar lo hermoso que tiene 
      nuestra región a traves de una gama amplia de productos con la cual nuestro público tenga la mejor 
      opción del significado de turismo ecológico.</p>
       
      </div>
    </div>
  </section>

  );
};

export default Catalogo;
